import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import CrashCard from "../componentes/CrashCard";

type CrashItem = {
  id: number;
  name: string;
  artist: string;
  image: string;
  year?: string;
  [key: string]: any; // Por si vienen más campos
};

export default function ListaApi() {
  const [data, setData] = useState<CrashItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jritsqmet.github.io/web-api/crash.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2196F3" />
        <Text>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista desde la API</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CrashCard
            name={item.name}
            artist={item.artist}
            image={item.image}
            year={item.year}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  titulo: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginVertical: 15 },
  separator: { height: 10 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});