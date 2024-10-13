import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Busque pelo seu bairro ou cidade"
                value={searchTerm}
                onChangeText={onSearchChange}
            />
            <Icon name="search" size={24} color="#FF40A7" style={styles.icon} />
        </View>
    );
};



export default SearchBar;