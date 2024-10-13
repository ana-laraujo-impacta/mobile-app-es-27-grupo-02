import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonComponentProps } from './interfaces/ButtonComponentProps';
import { styles } from './styles';

const ButtonComponent: React.FC<ButtonComponentProps> = ({
    title,
    onPress,
    backgroundColor = '#FF40A7',
    style,
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor }, style]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ButtonComponent;
