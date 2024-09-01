import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {WeatherData} from '../types';
import {format} from 'date-fns';

interface WeatherCardProps {
  weather: WeatherData;
  iconUri: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({weather, iconUri}) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Image source={{uri: iconUri}} style={styles.icon} />
        <Text style={styles.description}>{weather.description}</Text>
      </View>
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperature}>{weather.temperature}°C</Text>
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.city}>{weather.city}</Text>
        <Text style={styles.timestamp}>
          {/* {weather.timestamp.toLocaleString('MM-dd HH:mm')} */}
          {format(new Date(weather.timestamp), 'MM-dd HH:mm')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 30,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  icon: {
    width: 50,
    height: 50,
  },
  description: {
    fontSize: 18,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 10,
  },
});

export default WeatherCard;
