import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function WelcomeScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>BIENVENIDO</Text>
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/200/000000/home.png' }}
        style={styles.imagen}
      />
      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.textoBoton}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate('Registrer')}
      >
        <Text style={styles.textoBoton}>REGISTRO</Text>
      </TouchableOpacity>
      
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagen: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
  },
  autor: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
})