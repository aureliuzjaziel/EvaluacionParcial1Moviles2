import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function ListaApi() {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  async function cargar() {
    const resp = await fetch('https://jritsqmet.github.io/web-api/crash.json');
    const json = await resp.json();
    setData(json);
  }

  useEffect(() => {
    cargar();
  }, []);

  function mostrarModal(item: any) {
    setSelectedItem(item);
    setModalVisible(true);
  }

  function cerrarModal() {
    setModalVisible(false);
    setSelectedItem(null);
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', margin: 10 }}>Lista de Personajes Crash</Text>
      <FlatList
        data={data}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }: any) =>
          <TouchableOpacity style={styles.container} onPress={() => mostrarModal(item)}>
            <View style={styles.contenido}>
              <Image source={{ uri: item.image }} style={styles.img} />
              <View style={styles.info}>
                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                <Text numberOfLines={2}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        }
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={cerrarModal}
      >
        <View style={styles.modalBg}>
          <View style={styles.modalContent}>
            {selectedItem && (
              <>
                <Image source={{ uri: selectedItem.image }} style={styles.img} />
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{selectedItem.name}</Text>
                <Text style={{ marginBottom: 8 }}>{selectedItem.description}</Text>
                <Text style={{ fontWeight: 'bold' }}>Atributos:</Text>
                {selectedItem.atributos && selectedItem.atributos.map((atr: string, idx: number) => (
                  <Text key={idx}>• {atr}</Text>
                ))}
                <Button title="Cerrar" onPress={cerrarModal} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
    marginRight: 10,
  },
  container: {
    backgroundColor: '#FFB22C',
    borderRadius: 20,
    margin: 8,
    padding: 10,
  },
  contenido: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  modalBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(30,40,60,0.25)',
  },
  modalContent: {
    backgroundColor: '#FEF3E2',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    minWidth: 250,
  },
});