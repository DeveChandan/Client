// screens/Profile.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.description}>
        This is your profile page. You can update your information here.
      </Text>
      <Button
        title="Edit Profile"
        onPress={() => {
          // Handle navigation to edit profile or other actions
          // navigation.navigate('EditProfile'); // Uncomment and use if you have an EditProfile screen
        }}
      />
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

export default Profile;
