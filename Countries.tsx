import React from 'react';
import {useState,useEffect} from 'react'
import {View,Text,Button,StyleSheet,Image,ScrollView} from 'react-native';
import axios from 'axios';
import { Stack } from './App';




const Countries: React.FunctionComponent<Stack>=(props)=>{
      
    const [countries, setCountries] = useState<any[]>([])
    const [loading,setLoading]=useState(true)
    const{navigation,route} = props;
    const{name} = route.params;
    
    
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
      {
        loading ? <Text>Loading.....</Text> : (
            countries?.map((country)=>(
                <View>
                  <Image
        style={{width: 100, height: 100, marginLeft:40,margin:10}}
        source={{
          uri: country.flags.png,
        }}
      />
                    <Text style={styles.content}>Capital: {country.capital} </Text>
                    <Text  style={styles.content}>Population: {country.population}</Text>
                    <Text style={styles.content} >Latitude and Longitude: {country.latlng}</Text> 
                    <View style={{justifyContent: 'center', alignItems: "center", marginBottom: 10}}>

                    
      </View>
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
      
      padding: 30,
      marginTop: 100,
      borderRadius: 30,
      backgroundColor: "#D3D3D3",
      width: 250, //card width
      marginLeft:70, //centers the card
    },
    content:{
      marginTop: 20,
      margin: 10,
      fontWeight: '900'
    },
    text:{
      margin: 10,
      
    }
  });
 export default Countries