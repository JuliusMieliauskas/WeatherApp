import React, {useContext} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import WeatherCard from '../components/WeatherCard';
import {SearchHistoryContext} from '../HistoryContext';

const HistoryScreen = () => {
  const {history} = useContext(SearchHistoryContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        renderItem={({item}) => (
          <WeatherCard weather={item} iconUri={item.iconUri} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  },
});

export default HistoryScreen;
