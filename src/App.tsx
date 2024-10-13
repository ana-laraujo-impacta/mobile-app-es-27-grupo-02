import React from 'react'; // Importa o React
import { StatusBar } from 'expo-status-bar'; // Importa o StatusBar do Expo
import { StyleSheet, Text, View } from 'react-native'; // Importa os componentes do React Native

export default function App() {
  return (
    <View style={styles.container}> {/* Componente principal que irá conter o texto e o StatusBar */}
      <Text>Open up App.tsx to start working on your app!</Text> {/* Texto que será exibido */}
      <StatusBar style="auto" /> {/* StatusBar para exibir o status do aplicativo */}
    </View>
  );
}

// Estilos para o componente View
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: '#fff', // Cor de fundo branca
    alignItems: 'center', // Alinha os itens no centro horizontalmente
    justifyContent: 'center', // Alinha os itens no centro verticalmente
  },
});