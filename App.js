import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import LanguageItem from './LanguageItem';

const langs = [
  { id: '1', lang: 'JavaScript', experience: 3 },
  { id: '2', lang: 'Python', experience: 2 },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={langs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LanguageItem language={item.lang} experience={item.experience} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
