import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import ButtonComponent from 'src/components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import imgSusan from '../image/susan.jpg';
import imgGisele from '../image/gisele.jpg';
import SearchBar from 'src/components/SearchBar/SearchBar';

const ListSearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleShowProfile = (item) => {
        console.log("Show profile for:", item);
    };

    const users = [
        {
            id: 1,
            nome: "Susan",
            bairro: "tucuruvi",
            cidade: "sao paulo",
            avaliacao: 5,
            imagem: imgSusan,
            aceitaGato: true,
            aceitaCao: true
        },
        {
            id: 2,
            nome: "Gisele",
            bairro: "real",
            cidade: "sao paulo",
            avaliacao: 5,
            imagem: imgGisele,
            aceitaGato: false,
            aceitaCao: true
        },
        {
            id: 3,
            nome: "Marcela",
            bairro: "Santana",
            cidade: "São Paulo",
            avaliacao: 5,
            imagem: imgGisele,
            aceitaGato: true,
            aceitaCao: false
        }
    ];

    const filteredUsers = users.filter(user =>
        user.cidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.bairro.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />
            <FlatList
                data={filteredUsers}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View style={styles.imageContainer}>
                            <Image source={item.imagem} style={styles.image} />
                            {item.aceitaGato && (
                                <View style={styles.iconCat}>
                                    <Image source={require('../image/cat.png')} />
                                </View>
                            )}
                            {item.aceitaCao && (
                                <View style={styles.iconDog}>
                                    <Image source={require('../image/dog.png')} />
                                </View>
                            )}
                        </View>
                        <Text style={styles.itemName}>{item.nome}</Text>
                        <View style={styles.list}>
                            <View style={styles.listItem}>
                                <Icon name="map" size={18} color="#17181B" />
                                <Text style={styles.itemText}>{item.bairro}</Text>
                            </View>
                            <View style={styles.listItem}>
                                <Icon name="balance" size={18} color="#17181B" />
                                <Text style={styles.itemText}>5kg</Text>
                            </View>
                            <View style={styles.listItem}>
                                <Icon name="star" size={18} color="#17181B" />
                                <Text style={styles.itemText}>{item.avaliacao}</Text>
                            </View>
                        </View>
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
    },
    imageContainer: {
        position: 'relative',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    iconCat: {
        position: 'absolute',
        top: 10,
        left: 10,
        width: 36,
        height: 36,
        backgroundColor: '#EBEDF2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
    },
    iconDog: {
        position: 'absolute',
        top: 10,
        left: 60,
        width: 36,
        height: 36,
        backgroundColor: '#EBEDF2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
    },
    itemName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    list: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    itemText: {
        marginLeft: 5,
        fontSize: 18,
    },
});

export default ListSearchScreen;
