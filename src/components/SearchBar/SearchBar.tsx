import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FF40A7',
        borderRadius: 30,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default SearchBar;