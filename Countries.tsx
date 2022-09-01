import React from 'react';
import {useState,useEffect} from 'react'
import {View,Text,Button,StyleSheet,Image,ScrollView, ActivityIndicator} from 'react-native';
import axios from 'axios';
import { Stack } from './App';
 


const Countries: React.FunctionComponent<Stack>=(props)=>{
      
    const [countries, setCountries] = useState<any[]>([])
    const [loading,setLoading]=useState(true)
    const{navigation,route} = props;
    const{name} = route.params;
    const[error,setError] = useState<any>(null)
    
    
    const getInformation = async ()=>{
      const result = await axios.get(`https://restcountries.com/v2/name/${name}`)
      setCountries(result.data)
      setLoading(false)
    }
    
    useEffect(()=>{ 
        getInformation()
    },[])


  return (
    <ScrollView>
      
    <View style={styles.container} >
      {error && <Text>{error}</Text>}
      
      {
        loading ? <ActivityIndicator size="small" color="#0000ff" /> : (
            countries?.map((country)=>(
                <View>
                    <Text style={styles.content}>
                      Country Flag: 
                    <View style={styles.image}>
                    <Image
                     style={{width: 50, height: 25}}
                     source={{
                     uri: country.flags.png,
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
                  
                    <Text style={styles.content}>Capital: {country.capital} </Text>
                    <View
                     style={{
                     borderBottomColor: '#D3D3D3',
                     borderBottomWidth: 1,
                    }}
                    />
                    <Text  style={styles.content}>Population: {country.population}</Text>
                    <View
                      style={{
                      borderBottomColor: '#D3D3D3',
                      borderBottomWidth: 1,
                      }}
                    />
                    <Text style={styles.content} >Latitude and Longitude: {country.latlng}</Text> 
                    
                    
      <View>
      <Button title="Capital weather" onPress={()=>navigation.navigate('Weather', {capital:country.capital}) } color="#000"></Button>

      

      </View>
      
                    
                </View>
            ))
        )
      }

      

      
      

      

    </View>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection:'column',
      padding: 30,
      marginTop: 40,
      borderRadius: 30,
      justifyContent: 'center'
    },
    content:{
      marginTop: 20,
      margin: 10,
      fontWeight: '900'
    },
    text:{
      margin: 10
    },
    flagtext:{
      fontWeight: '900'
    },
    image:{
      paddingLeft: 20,
      
    }
    
  });
 export default Countries