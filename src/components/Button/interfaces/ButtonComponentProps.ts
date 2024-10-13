import { StyleProp, ViewStyle } from 'react-native';

export interface ButtonComponentProps {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    style?: StyleProp<ViewStyle>;
}