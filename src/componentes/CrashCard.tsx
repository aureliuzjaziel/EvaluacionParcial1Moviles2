import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
  name: string;
  artist: string;
  image: string;
  year?: string;
};

export default function CrashCard({ name, artist, image, year }: Props) {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: image }} style={styles.imagen} />
      <View style={styles.info}>
        <Text style={styles.nombre}>{name}</Text>
        <Text style={styles.artista}>Artista: {artist}</Text>
        {year && <Text style={styles.year}>Año: {year}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    padding: 10,
    marginVertical: 4,
  },
  imagen: { width: 70, height: 70, borderRadius: 8, marginRight: 12, backgroundColor: "#eee" },
  info: { flex: 1 },
  nombre: { fontSize: 18, fontWeight: "bold" },
  artista: { fontSize: 15, marginTop: 2 },
  year: { fontSize: 14, color: "#555", marginTop: 2 },
});