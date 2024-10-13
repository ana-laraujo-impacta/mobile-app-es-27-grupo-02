import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import ButtonComponent from 'src/components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from 'src/components/SearchBar';
import { styles } from './styles';
import { users } from './arrUsers';
import { useNavigation } from '@react-navigation/native';

const ListSearchScreen = () => {
    const navigation = useNavigation();

    const [searchTerm, setSearchTerm] = useState('');

    const handleShowProfile = (item: { id: number; nome: string; bairro: string; cidade: string; avaliacao: number; imagem: any; aceitaGato: boolean; aceitaCao: boolean; }) => {
        navigation.navigate('Developing');

    };

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
                                    <Image source={require('../../image/cat.png')} />
                                </View>
                            )}
                            {item.aceitaCao && (
                                <View style={styles.iconDog}>
                                    <Image source={require('../../image/dog.png')} />
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

export default ListSearchScreen;
