import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { supabase } from '../SupaBase/config';

export default function OperacionesScreen() {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [curso, setCurso] = useState('');

  const guardar = async () => {
    if (!cedula || !nombre || !edad || !curso) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }
    const { error } = await supabase
      .from('estudiantes')
      .insert([{ cedula, nombre, edad, curso }]);
    if (error) {
      Alert.alert('Error', 'No se pudo guardar');
    } else {
      Alert.alert('Éxito', 'Estudiante guardado correctamente');
      setCedula('');
      setNombre('');
      setEdad('');
      setCurso('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Operaciones</Text>
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/100/atm-card-in-slot.png' }}
        style={styles.imagen}
      />
      <TextInput
        style={styles.input}
        placeholder="cedula"
        value={cedula}
        onChangeText={setCedula}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre de estudiante"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad del estudiante"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Curso"
        value={curso}
        onChangeText={setCurso}
      />
      <TouchableOpacity style={styles.boton} onPress={guardar}>
        <Text style={styles.textoBoton}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'monospace',
  },
  imagen: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  input: {
    width: 250,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 6,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  boton: {
    width: 250,
    padding: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBoton: {
    fontSize: 18,
    color: '#222',
    fontWeight: 'bold',
  },
});