import React, {createContext, useState, useContext} from 'react';
import {WeatherData} from './types/index.ts';

interface HistoryData {
  city: string;
  temperature: number;
  description: string;
  timestamp: Date;
  iconId: string;
  iconUri: string;
}

export const SearchHistoryContext = createContext<HistoryData[]>([]);

export const SearchHistoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [history, setHistory] = useState<HistoryData[]>([]);

  const addSearchToHistory = (weatherData: HistoryData) => {
    setHistory(prevHistory => {
      const newHistory = [weatherData, ...prevHistory];
      return newHistory.slice(0, 5);
    });
    console.log('History: ', history);
  };

  return (
    <SearchHistoryContext.Provider value={{history, addSearchToHistory}}>
      {children}
    </SearchHistoryContext.Provider>
  );
};
