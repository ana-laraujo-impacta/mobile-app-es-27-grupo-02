import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './Global';
import ButtonComponent from '../components/Button/index';
import { useNavigation } from '@react-navigation/native';

const SplashScreen: React.FC = () => {
    const navigation = useNavigation();

    const handleContinue = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../image/logo.png')} style={styles.image} />
            <View style={styles.buttonContainer}>
                <ButtonComponent title="Continuar" onPress={handleContinue} backgroundColor="#FF40A7" />
            </View>
        </View>
    );
};

export default SplashScreen;
