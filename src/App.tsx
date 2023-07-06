import React, { useState } from 'react';
import { styles } from './app_styles';
import useFetch from './hooks/useFetch';
import logo from './logo.svg';
import TodayView from './views/TodayView';
import WeeklyView from './views/WeeklyView';

function App() {
  const { result, error } = useFetch(`http://api.weatherapi.com/v1/forecast.json?key=4782855aaedf43cd816163151230507&q=London&days=3&aqi=no&alerts=no`)
  console.log(result);
  return (
    <div className={styles.app}>
      <TodayView data={result} />
      <WeeklyView data={result} />
    </div>
  );
}

export default App;
