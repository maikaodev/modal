import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleVerMaisPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          gap: 16,
        }}
      >
        <Text>Nome: Angelo Danrley</Text>
        <Text>Idade: 25 anos</Text>
        <Text>Nacionalidade: Brasileiro</Text>
        <Button title="Ver Mais" onPress={handleVerMaisPress} />
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              gap: 16,
            }}
          >
            <Text>Profissão: Dev Frontend</Text>
            <Text>Altura: 180 cm</Text>
            <Text>Peso: 76kg</Text>
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;
