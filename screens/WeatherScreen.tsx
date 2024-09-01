import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import WeatherCard from '../components/WeatherCard';
import {fetchWeather, fetchIcon} from '../services/weatherApi';
import {WeatherData} from '../types';
import {SearchHistoryContext} from '../HistoryContext';

type WeatherScreenRouteProp = RouteProp<{Weather: {city: string}}, 'Weather'>;

const WeatherScreen = () => {
  const route = useRoute<WeatherScreenRouteProp>();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [iconUri, setIconUri] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const {addSearchToHistory} = React.useContext(SearchHistoryContext);

  useEffect(() => {
    const getWeatherAndIcon = async () => {
      try {
        const data = await fetchWeather(route.params.city);
        setWeather(data);

        if (data.iconId) {
          const iconData = await fetchIcon(data.iconId);
          addSearchToHistory({...data, iconUri: iconData});
          setIconUri(iconData);
        }
      } catch (error) {
        console.error('Error fetching weather or icon:', error);
      } finally {
        setLoading(false);
      }
    };

    getWeatherAndIcon();
  }, [route.params.city]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {weather && <WeatherCard weather={weather} iconUri={iconUri} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaa',
  },
});

export default WeatherScreen;
