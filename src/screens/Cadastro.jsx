// Cadastro.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';  
import { LoginContext } from '../components/loginContext';

const Cadastro = (props) => {
  const { handleCadastro } = useContext(LoginContext);
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [emailCadastro, setEmailCadastro] = useState('');
  const [senhaCadastro, setSenhaCadastro] = useState('');

  const handleCadastroPress = async () => {
    try {
      const cadastroSucesso = await handleCadastro(nome, emailCadastro, senhaCadastro);

      if (cadastroSucesso) {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={emailCadastro}
        onChangeText={setEmailCadastro}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        value={senhaCadastro}
        onChangeText={setSenhaCadastro}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.cadastroButton}
        onPress={handleCadastroPress}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFCC00',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#FFCC00',
    fontFamily: 'times',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#FFCC00',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    color: '#FFFFFF',
    borderRadius: 8,
  },
  cadastroButton: {
    backgroundColor: '#FFCC00',
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '100%',
    borderRadius: 30,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },


});

export default Cadastro;
