import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
