import {WeatherData} from '../types';

const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';
const ICON_ENDPOINT = 'https://openweathermap.org/img/wn';

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const URL = `${API_ENDPOINT}?q=${city}&appid=10692b614cde4a27abc3caf08c696dfa&units=metric`;
  const response = await fetch(URL);
  const data = await response.json();

  if (response.ok) {
    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      timestamp: new Date(),
      iconId: data.weather[0].icon,
    };
  } else {
    throw new Error(data.message);
  }
};

export const fetchIcon = async (iconId: string): Promise<string> => {
  const url = `${ICON_ENDPOINT}/${iconId}@2x.png`;

  console.log('Fetching weather icon from URL:', url);

  const response = await fetch(url);

  if (response.ok) {
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } else {
    throw new Error('Error fetching weather icon');
  }
};
