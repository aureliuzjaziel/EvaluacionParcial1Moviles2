import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { supabase } from '../SupaBase/config';

export default function RegisterScreen() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [usuario, setUsuario] = useState('');
  const [celular, setCelular] = useState('');

  async function registro() {
    // Registro en Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email: correo,
      password: contrasena,
    });

    if (error) {
      Alert.alert('Error', error.message);
      return;
    }

    // Guardar datos extra en la tabla usuarios
    const { error: insertError } = await supabase
      .from('usuarios')
      .insert([
        {
          correo,
          contrasena,
          usuario,
          celular,
          auth_id: data.user?.id // puedes guardar el id del usuario autenticado
        }
      ]);

    if (insertError) {
      Alert.alert('Error', 'No se pudo guardar datos extra');
    } else {
      Alert.alert('Éxito', 'Usuario registrado correctamente');
      setCorreo('');
      setContrasena('');
      setUsuario('');
      setCelular('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/100/monitor--v1.png' }}
        style={styles.imagen}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese usuario"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de celular"
        value={celular}
        onChangeText={setCelular}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.boton} onPress={registro}>
        <Text style={styles.textoBoton}>Registro</Text>
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