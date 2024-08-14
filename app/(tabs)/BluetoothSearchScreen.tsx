import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import BleManager from 'react-native-ble-manager';

export default function BluetoothSearchScreen() {
  const [bluetoothAddress, setBluetoothAddress] = useState( []);

  useEffect(() => {
    // Initialize BleManager
    BleManager.start({ showAlert: false })
      .then(() => {
        console.log('BleManager initialized');
      })
      .catch(error => {
        console.log('Error initializing BleManager:', error);
      });

    // Request BLE permissions on Android
    if (Platform.OS === 'android') {
      requestPermissions();
    }

    // Clean up BleManager on component unmount
    return () => {
      BleManager.stopScan().catch(error => console.log('Error stopping scan:', error));
    };
  }, []);

  const requestPermissions = async () => {
    if (Platform.Version >= 23) {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);

        if (
          granted['android.permission.BLUETOOTH_SCAN'] !== PermissionsAndroid.RESULTS.GRANTED ||
          granted['android.permission.BLUETOOTH_CONNECT'] !== PermissionsAndroid.RESULTS.GRANTED ||
          granted['android.permission.ACCESS_FINE_LOCATION'] !== PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('BLE permissions denied');
        } else {
          console.log('BLE permissions granted');
        }
      } catch (err) {
        console.warn('Permission request error:', err);
      }
    }
  };

  const handleSearch = () => {
    // Handle Bluetooth search logic here
    BleManager.scan([], 5, true)
      .then(() => {
        console.log('Scanning...');
      })
      .catch(error => {
        console.log('Error scanning:', error);
      });
  };

  const handleConnect = () => {
    // Handle Bluetooth connect logic here
    BleManager.connect(bluetoothAddress)
      .then(() => {
        console.log('Connected to', bluetoothAddress);
      })
      .catch(error => {
        console.log('Connection error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bluetooth Device Search</Text>

      <View style={styles.buttonContainer}>
        <Button title="Search" onPress={handleSearch} color="#5B84F1" />
      </View>

      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>{bluetoothAddress}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Connect" onPress={handleConnect} color="#5B84F1" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34eb98', // Background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '60%',
    marginVertical: 10,
    backgroundColor: '#5B84F1',
    borderRadius: 10,
    overflow: 'hidden', // To make button corners rounded
  },
  addressContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  addressText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
