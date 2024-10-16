import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    pinkText: {
        color: '#FF40A7',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#777',
        textAlign: 'left',
        marginBottom: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
    },
    forgotPasswordText: {
        color: '#02BBC2',
        textAlign: 'left',
        marginTop: 10,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    dividerText: {
        marginHorizontal: 10,
        fontSize: 14,
        color: '#777',
    },
    createAccountButton: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
    },
    createAccountText: {
        color: '#777',
        fontSize: 16,
        fontWeight: 'bold',
    },
});