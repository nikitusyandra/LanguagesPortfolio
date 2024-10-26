import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ language, experience }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: 'https://avatars.mds.yandex.net/i?id=fd3fab716fe638f4541567fe702a7c8db9f768c6-12613260-images-thumbs&n=13' }} />
      <View>
        <Text style={styles.language}>{language}</Text>
        <Text style={styles.experience}>Опыт: {experience} года</Text>
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
