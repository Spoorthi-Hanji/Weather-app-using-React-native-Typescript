import React from 'react';

import {View,Text,StyleSheet,Image} from 'react-native';
import {useState,useEffect} from 'react'
import axios from 'axios';
import { Stack } from './App';




const Weather: React.FunctionComponent<Stack>=(props)=>{
  const [weatherData,setWeatherData] = useState<any>(null);
  const [loaded, setLoaded] = useState(true)
  const {route} = props;
  const {capital} = route?.params;

  const fetchWeatherData = async  ()=>{
    const result = await axios.get(`http://api.weatherstack.com/current?access_key=2b315244454a217b3348152d255a65a3&query=${capital}`)
      setWeatherData(result.data)
      setLoaded(false)
    }

    useEffect(()=>{
      fetchWeatherData()
    },[])

  return (
    <View style={styles.weather} >
    {
      loaded ? <Text>Loading.....</Text> : (
         
              <View>
                  <Text  style={styles.content}>Temperature: {weatherData.current.temperature} </Text>
                  <Text  style={styles.content}>Precipitation: {weatherData.current.precip}</Text>
                  <Text  style={styles.content} >Wind Speed: {weatherData.current.wind_speed}</Text> 
                  <View style={{justifyContent: 'center', alignItems: "center", marginBottom: 10}}>

                  <Image
      style={{width: 100, height: 100}}
      source={{
        uri: weatherData.current.weather_icons[0],
      }}
    />
    </View>
    <View>
    

    </View>
                  
              </View>
          
      )
    }
   
    

    

  </View>
  )
}

const styles = StyleSheet.create({
    weather: {
      padding: 30,
      marginTop: 100,
      borderRadius: 30,
      backgroundColor: "#D3D3D3",
      width: 250, //card width
      marginLeft:70, //centers the card
    },
    content: {
      fontSize:20,
      fontWeight: '900',
      padding:10
    }
  });

  export default Weather
