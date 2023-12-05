import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LoginContext } from '../components/loginContext';
import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = () => {
  const { email, setEmail, senha, setSenha, autenticado, handleLogin } = useContext(LoginContext);
  const navigation = useNavigation();

  const handleLoginPress = async () => {
    await handleLogin();

    if (autenticado) {
      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    if (autenticado) {
      navigation.navigate('Home');
    }
  }, [autenticado, navigation]);

  const handleCadastroPress = () => {
    navigation.navigate('Cadastro'); // Navegar para a tela de cadastro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao CineVerse</Text>

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLoginPress}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleCadastroPress}
      >
        <Text style={styles.buttonText}>Cadastro</Text>
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
    backgroundColor: '#1E1E1E', // Cor de fundo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFCC00', // Cor do título
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#FFCC00', // Cor do texto
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
  loginButton: {
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


export default Login;
