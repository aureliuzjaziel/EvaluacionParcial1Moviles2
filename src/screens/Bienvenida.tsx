import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function Bienvenida({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Evaluacion Parcial</Text>
      {/* Aquí puedes agregar una imagen si lo deseas */}
      <Button
        title="Ingresar"
        onPress={() => navigation.replace('MenuPrincipal')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 28,
    marginBottom: 30,
    fontWeight: 'bold'
  }
})