import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SearchInput from '../components/SearchInput';

type RootStackParamList = {
  Weather: {city: string};
};

type StartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Start'
>;

const StartScreen = () => {
  const navigation = useNavigation<StartScreenNavigationProp>();

  const handleSearch = (city: string) => {
    console.log('Added city to history: ', city);
    navigation.navigate('Weather', {city});
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
      <SearchInput onSearch={handleSearch} />

      <TouchableOpacity
        style={styles.history}
        onPress={() => navigation.navigate('History')}>
        <Text style={styles.history}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#aaa',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  history: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
});

export default StartScreen;
