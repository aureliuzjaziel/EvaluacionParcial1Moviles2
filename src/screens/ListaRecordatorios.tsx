import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, Alert, StyleSheet } from "react-native";
import Informacion from "../componentes/Informacion";

type Recordatorio = {
  id: string;
  nombre: string;
  fecha: string;
  descripcion: string;
  telefono: string;
};


const DATA: Recordatorio[] = [
  { id: "1", nombre: "Dentista", fecha: "01/06/2025", descripcion: "Cita odontológica", telefono: "5551234567" },
  { id: "2", nombre: "Supermercado", fecha: "03/06/2025", descripcion: "Comprar víveres", telefono: "5559876543" },
  { id: "3", nombre: "Reunión", fecha: "05/06/2025", descripcion: "Reunión de proyecto", telefono: "5551112222" },
];

export default function ListaRecordatorios() {
  const [inputId, setInputId] = useState("");
  const [recordatorio, setRecordatorio] = useState<Recordatorio | null>(null);

  const buscarPorId = () => {
    const encontrado = DATA.find(r => r.id === inputId.trim());
    if (encontrado) {
      setRecordatorio(encontrado);
    } else {
      Alert.alert("No encontrado", "No hay un recordatorio con ese id");
      setRecordatorio(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consulta y lista de recordatorios</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Ingresar id"
          value={inputId}
          onChangeText={setInputId}
          keyboardType="numeric"
        />
        <Button title="Leer" onPress={buscarPorId} />
      </View>
      {recordatorio && (
        <Informacion
          nombre={recordatorio.nombre}
          fecha={recordatorio.fecha}
          descripcion={recordatorio.descripcion}
          telefono={recordatorio.telefono}
        />
      )}

      <Text style={styles.subtitulo}>Todos los recordatorios:</Text>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text
            style={styles.item}
            onPress={() =>
              Alert.alert(
                "Detalles del recordatorio",
                `Nombre: ${item.nombre}\nFecha: ${item.fecha}\nDescripción: ${item.descripcion}\nTeléfono: ${item.telefono}`
              )
            }
          >
            {item.nombre}
          </Text>
        )}
        style={{ marginTop: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  titulo: { fontSize: 24, textAlign: "center", marginBottom: 16, fontWeight: "bold" },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 6,
    padding: 10,
    marginRight: 8,
    fontSize: 16,
  },
  subtitulo: { fontSize: 18, marginVertical: 12, fontWeight: "bold" },
  item: {
    padding: 12,
    backgroundColor: "#f3f3f3",
    marginVertical: 4,
    borderRadius: 6,
    fontSize: 17,
  },
});