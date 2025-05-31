import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function RegistroRecordatorio() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleRegistrar = () => {
    if (!nombre.trim() || !fecha.trim() || !descripcion.trim() || !telefono.trim()) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }
    Alert.alert('¡Éxito!', 'El recordatorio se agregó correctamente');
    setNombre('');
    setFecha('');
    setDescripcion('');
    setTelefono('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registrar recordatorio</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del recordatorio"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha (dd/mm/aaaa)"
        value={fecha}
        onChangeText={setFecha}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />
      <Button title="Registrar" onPress={handleRegistrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
});