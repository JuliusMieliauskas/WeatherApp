import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen';
import WeatherScreen from './screens/WeatherScreen';
import HistoryScreen from './screens/HistoryScreen';
import {SearchHistoryProvider} from './HistoryContext';

export type RootStackParamList = {
  Weather: {city: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SearchHistoryProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Weather" component={WeatherScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SearchHistoryProvider>
  );
};

export default App;
