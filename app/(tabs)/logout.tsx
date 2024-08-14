// screens/Logout.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Logout = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clearing user data or tokens
    // navigation.navigate('Login'); // Uncomment and use if you have a Login screen

    // After logout logic, navigate to the Login screen or home
    navigation.reset({
      index: 0,
      routes: [{ name: 'index' }], // Adjust to your desired route after logout
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout</Text>
      <Text style={styles.description}>
        Are you sure you want to log out?
      </Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default Logout;
