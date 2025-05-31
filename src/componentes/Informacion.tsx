import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  nombre: string;
  fecha: string;
  descripcion: string;
  telefono: string;
};

export default function Informacion({ nombre, fecha, descripcion, telefono }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.text}>{nombre}</Text>
      <Text style={styles.label}>Fecha:</Text>
      <Text style={styles.text}>{fecha}</Text>
      <Text style={styles.label}>Descripción:</Text>
      <Text style={styles.text}>{descripcion}</Text>
      <Text style={styles.label}>Teléfono:</Text>
      <Text style={styles.text}>{telefono}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#f3f3f3", padding: 12, borderRadius: 8, marginBottom: 12 },
  label: { fontWeight: "bold", fontSize: 16 },
  text: { marginBottom: 7, fontSize: 15 },
});