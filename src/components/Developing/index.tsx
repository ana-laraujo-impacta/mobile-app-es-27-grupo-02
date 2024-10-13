import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';

const Developing = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../image/dormindo.png')} />
            <Text style={styles.title}>Em Desenvolvimento!</Text>
        </View>
    );
};

export default Developing;
