import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const sinopseExemplo = "John Wick é uma franquia de mídia de suspense e ação neo-noir americana criada pelo roteirista Derek Kolstad e estrelada por Keanu Reeves como John Wick, um ex-assassino que é forçado a voltar ao submundo do crime que havia abandonado";
  const sinopseExemplo2 = "'Daisuke, Miyako, Iori, Takeru Takashi, Hikari e Ken devem conciliar novas responsabilidades com seus parceiros Digimon. Mas Rui Owada, um jovem misterioso, parece afirmar ser o primeiro humano a fazer parceria com um Digimon.";
  const sinopseExemplo3 =" Coriolanus Snow orienta e desenvolve sentimentos pela tributo feminina ao Distrito 12 durante os 10º Jogos Vorazes.";
  const filmes = [
    {
      titulo: 'john Wick',
      imagem: 'https://m.media-amazon.com/images/I/71hE7L1HClL._AC_UF894,1000_QL80_.jpg',
      sinopse: sinopseExemplo,
    },
    {
      titulo: 'Digimon Adventure 02: O Início',
      imagem: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/07/imagem_2023_07_31_161156773__232207.png',
      sinopse: sinopseExemplo2,
    },
    {
      titulo: 'Jogos Vorazes – A Cantiga dos Pássaros e das Serpentes',   
      imagem: "https://br.web.img3.acsta.net/pictures/23/09/20/17/54/4013241.jpg",
      sinopse: sinopseExemplo,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Cineverse</Text>
      </View>
      {filmes.map((filme, index) => (
        <View key={index} style={styles.filmeContainer}>
          <Image
            style={styles.imagemFilme}
            source={{ uri: filme.imagem }}
          />
          <Text style={styles.sinopse}>{filme.sinopse}</Text>
        </View>
      ))}
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
    fontFamily: 'times',
    fontSize: 35,
    color: 'yellow',
    letterSpacing: 10,
  },
  filmeContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  imagemFilme: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  sinopse: {
    marginTop: 10,
    color: '#FFFFFF',
    textAlign: 'justify',
    paddingHorizontal: 20,
  },
});
