import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity, Button, FlatList } from "react-native";



export default function CrashCard( props:any) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
      <View style={styles.content}>
        <Image source={{ uri: props.Personajes.imagen }} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.nombre}>{props}</Text>
          <Text style={styles.descripcion}>{props}</Text>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBg}>
          <View style={styles.modalContent}>
            <Image source={{ uri: props }} style={styles.img} />
            <Text style={styles.nombre}>{props}</Text>
            <Text style={styles.descripcion}>{props}</Text>
            <Text style={styles.subtitulo}>Atributos:</Text>
            <FlatList
              data={props}
              keyExtractor={(item, idx) => idx.toString()}
              renderItem={({ item }) => <Text style={styles.atributo}>• {item}</Text>}
            />
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    borderRadius: 12,
    marginBottom: 10,
  },
  container: {
    backgroundColor: "#FFB22C",
    borderRadius: 20,
    margin: 5,
    padding: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  nombre: {
    fontWeight: "bold",
    fontSize: 18,
  },
  descripcion: {
    fontSize: 14,
    marginTop: 2,
  },
  subtitulo: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
  },
  atributo: {
    fontSize: 14,
    marginLeft: 8,
  },
  modalBg: {
    flex: 1,
    backgroundColor: "rgba(30,40,60,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FEF3E2",
    padding: 30,
    borderRadius: 22,
    alignItems: "center",
    minWidth: 320,
    minHeight: 320,
    maxWidth: "90%",
    maxHeight: "80%",
    justifyContent: "center",
  },
});