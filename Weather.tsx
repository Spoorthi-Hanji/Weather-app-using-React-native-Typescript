import React from 'react';

import {View,Text,StyleSheet,Image, ActivityIndicator} from 'react-native';
import {useState,useEffect} from 'react'
import axios from 'axios';



const Weather = ({route }: any) =>{
  const [weatherData,setWeatherData] = useState<any>(null);
  const [loaded, setLoaded] = useState(true)
 
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
      loaded ? <ActivityIndicator size="small" color="#0000ff" /> : (
         
              <View>
                  <Text style={styles.content}>
                    Weather Icon: 
                    <View style={styles.image}>
                  <Image
                   style={{width: 50, height: 50}}
                   source={{
                   uri: weatherData.current.weather_icons[0],
                   }}
                 />

                  </View>
                  </Text>
                  <View
                   style={{
                   borderBottomColor: '#D3D3D3',
                   borderBottomWidth: 1,
                   }}
                  />
                 
                 
                  <Text  style={styles.content}>Temperature: {weatherData.current.temperature} </Text>
                  <View
                   style={{
                   borderBottomColor: '#D3D3D3',
                   borderBottomWidth: 1,
                   }}
                  />
                  <Text  style={styles.content}>Precipitation: {weatherData.current.precip}</Text>
                  <View
                   style={{
                   borderBottomColor: '#D3D3D3',
                   borderBottomWidth: 1,
                   }}
                  />
                  <Text  style={styles.content} >Wind Speed: {weatherData.current.wind_speed}</Text> 
                  
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
    },
    content: {
      marginTop: 20,
      margin: 10,
      fontWeight: '900'
    },
    image:{
      paddingLeft: 20
    }
   
  });

  export default Weather
