import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga o proceso en el splash screen durante unos segundos
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Cambia este valor según tus necesidades
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Mi App</Text>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>¡Bienvenido a mi App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  welcome: {
    fontSize: 24,
    color: 'white',
  },
});

export default SplashScreen;