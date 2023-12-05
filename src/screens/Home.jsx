import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import Escolha from '../screens/Escolha';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Cineverse</Text>
      </View>
      <View style={styles.filmePrincipal}>
        <Image
          style={styles.imagemFilmePrincipal}
          source={{
            uri: 'https://m.media-amazon.com/images/I/71hE7L1HClL._AC_UF894,1000_QL80_.jpg',
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
  containerTitulo: {
    borderColor: '#FF5524',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  titulo: {
    fontFamily: 'times', // Use uma fonte cursiva específica
    fontSize: 35,
    color: 'yellow',
    letterSpacing: 10,
  },
  filmePrincipal: {
    alignItems: 'center',
    marginTop: 20,
  },
  imagemFilmePrincipal: {
    width: 200, // Defina a largura da imagem conforme necessário
    height: 300, // Defina a altura da imagem conforme necessário
    resizeMode: 'cover', // Pode ajustar conforme necessário
    borderRadius: 10, // Borda arredondada
  },
});
