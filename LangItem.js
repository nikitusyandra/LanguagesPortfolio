import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ language, experience }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: 'URL логотипа' }} />
      <View>
        <Text style={styles.language}>{language}</Text>
        <Text style={styles.experience}>Опыт: {experience} лет</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  language: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 14,
    color: '#666',
  },
});

export default LanguageItem;
