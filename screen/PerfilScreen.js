import * as DocumentPicker from 'expo-document-picker';
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Datos agregados</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
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
