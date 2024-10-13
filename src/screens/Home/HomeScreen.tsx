// HomeScreen.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();

    const handleFindPetSitter = () => {
        navigation.navigate('Busca');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cuidamos do seu pet quando você não pode.</Text>
            <Text style={styles.subtitle}>
                Encontre e conecte-se com voluntários de confiança na sua região, garantindo bem-estar e cuidado com seu Pet.
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleFindPetSitter}>
                <Text style={styles.buttonText}>Encontrar Pet Sitter</Text>
            </TouchableOpacity>
            <Image source={require('../../image/pet-sitter.png')} />
        </View>
    );
};

export default HomeScreen;
