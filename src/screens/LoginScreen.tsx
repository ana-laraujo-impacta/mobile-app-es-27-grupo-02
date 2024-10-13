import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import axios from 'axios';
import ButtonComponent from '../components/Button/index';
import { loginCss } from './Global';
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://192.168.15.72:8081/auth/login', {
                username: username,
                password: password,
            });

            Alert.alert('Login bem-sucedido!');

            navigation.navigate('Home');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            Alert.alert('Erro ao fazer login', error.response ? error.response.data.message : 'Usuário ou senha incorretos.');
        }
    };

    const handleForgotPassword = () => {
        console.log('Forgot password pressed');
    };

    const handleCreateAccount = () => {
        console.log('Create account pressed');
    };

    return (
        <View style={loginCss.container}>
            <View style={loginCss.logoContainer}>
                <Image source={require('../image/logo.png')} />
            </View>

            <Text style={loginCss.title}>Entre ou crie sua conta</Text>
            <Text style={loginCss.subtitle}>Garanta o bem estar do seu Pet</Text>

            <TextInput
                style={loginCss.input}
                placeholder="Seu nome de usuário"
                autoCapitalize="none"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={loginCss.input}
                placeholder="Sua senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <ButtonComponent
                title="Entrar"
                onPress={handleLogin}
                backgroundColor="#FF40A7"
                style={{ marginTop: 20, paddingVertical: 14 }}
            />

            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={loginCss.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <View style={loginCss.dividerContainer}>
                <View style={loginCss.line} />
                <Text style={loginCss.dividerText}>OU</Text>
                <View style={loginCss.line} />
            </View>

            <TouchableOpacity
                style={loginCss.createAccountButton}
                onPress={handleCreateAccount}
            >
                <Text style={loginCss.createAccountText}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
