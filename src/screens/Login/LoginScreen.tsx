import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from '../../components/Button/index';
import { styles } from './styles';

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

            navigation.navigate('Início');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            Alert.alert('Erro ao fazer login', error.response ? error.response.data.message : 'Usuário ou senha incorretos.');
        }
    };

    const handleForgotPassword = () => {
        navigation.navigate('Developing');
    };

    const handleCreateAccount = () => {
        navigation.navigate('Developing');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../image/logo.png')} />
            </View>

            <Text style={styles.title}>Entre ou crie sua conta</Text>
            <Text style={styles.subtitle}>Garanta o bem estar do seu Pet</Text>

            <TextInput
                style={styles.input}
                placeholder="Seu nome de usuário"
                autoCapitalize="none"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
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
                <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
                <View style={styles.line} />
                <Text style={styles.dividerText}>OU</Text>
                <View style={styles.line} />
            </View>

            <TouchableOpacity
                style={styles.createAccountButton}
                onPress={handleCreateAccount}
            >
                <Text style={styles.createAccountText}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
