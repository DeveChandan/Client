import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

export default function LoginScreen() {
  const [name, setName] = useState('');
  const [empCode, setEmpCode] = useState('');
  const [secCode, setSecCode] = useState('');

  const handleLogin = () => {
    // Handle the login logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Emp code"
          value={empCode}
          onChangeText={setEmpCode}
        />
        <TextInput
          style={styles.input}
          placeholder="Sec code"
          value={secCode}
          onChangeText={setSecCode}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} color="#0000ffff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Background color similar to the design
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    width: '80%',
    backgroundColor: '#0096ff', // Background color for the login box
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#d3d3d3', // Input field background color
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});
