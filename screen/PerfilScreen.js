import * as DocumentPicker from 'expo-document-picker';
import * as LocalAuthentication from 'expo-local-authentication';
import React, { useState } from 'react';
import { Alert, Button, Modal, StyleSheet, Text, View } from 'react-native';

const PerfilScreen =() => {
  const [modalVisible, setModalVisible] = useState(false);

  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        copyToCacheDirectory: true,
      });

      if (result.type === 'success') {
        setModalVisible(true);
      }
    } catch (error) {
      Alert.alert("Error", "Hubo un problema al seleccionar el documento.");
    }
  };

  const authenticate = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      Alert.alert("Error", "Tu dispositivo no soporta autenticación biométrica.");
      return;
    }

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      Alert.alert("Error", "No tienes huella digital o Face ID registrado en este dispositivo.");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      setModalVisible(true);
    } else {
      Alert.alert("Error", "Fallo en la autenticación.");
    }
  };

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
      <Button title="Subir firma (PDF)" onPress={pickDocument} />
      <Button title="Registrar Huella/Face ID" onPress={authenticate} />
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
