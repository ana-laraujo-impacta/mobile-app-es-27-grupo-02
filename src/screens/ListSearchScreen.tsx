import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ButtonComponent from 'src/components/Button';
import users from '../data/users.json'; 

const ListSearchScreen = () => {
    const handleShowProfile = (item) => {
        console.log("Show profile for:", item);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pet Sitters Disponíveis</Text>
            <FlatList
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text>Bairro: {item.bairro}</Text>
                        <Text>Cidade: {item.cidade}</Text>
                        <Text>Classificação: {item.avaliacao} ⭐</Text>
                        <Text>Aceita gato: {item['aceita-gato'] ? 'Sim' : 'Não'}</Text>
                        <Text>Aceita cão: {item['aceita-cao'] ? 'Sim' : 'Não'}</Text>
                        <ButtonComponent
                            title="Ver perfil"
                            onPress={() => handleShowProfile(item)}
                            backgroundColor="#FF40A7"
                            style={{ marginTop: 20, paddingVertical: 14 }}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        padding: 15,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
});

export default ListSearchScreen;
