// HomeScreen.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { homeCss } from './Global';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();

    const handleFindPetSitter = () => {
        navigation.navigate('Busca');
    };

    return (
        <View style={homeCss.container}>
            <Text style={homeCss.title}>Cuidamos do seu pet quando você não pode.</Text>
            <Text style={homeCss.subtitle}>
                Encontre e conecte-se com voluntários de confiança na sua região, garantindo bem-estar e cuidado com seu Pet.
            </Text>
            <TouchableOpacity style={homeCss.button} onPress={handleFindPetSitter}>
                <Text style={homeCss.buttonText}>Encontrar Pet Sitter</Text>
            </TouchableOpacity>
            <Image source={require('../image/pet-sitter.png')} />
        </View>
    );
};

export default HomeScreen;
