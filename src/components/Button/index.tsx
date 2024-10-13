import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { styles } from './Button';

interface ButtonComponentProps {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    style?: StyleProp<ViewStyle>;
}

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
