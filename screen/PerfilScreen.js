import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PerfilScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.label}>Nombre</Text>
      <Text style={styles.field}>[Nombre del usuario]</Text>
      <Text style={styles.label}>ID</Text>
      <Text style={styles.field}>[ID del usuario]</Text>
      <Text style={styles.label}>CI</Text>
      <Text style={styles.field}>[CI del usuario]</Text>
      <Text style={styles.label}>Correo</Text>
      <Text style={styles.field}>[Correo del usuario]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  field: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },
});

export default PerfilScreen;
