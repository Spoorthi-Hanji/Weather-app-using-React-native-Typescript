import * as React from 'react';
import {View,TextInput,StyleSheet,Button,ImageBackground } from 'react-native';
import {useState} from 'react'
import cloud from './images/cloud.jpg'
import { Stack } from './App';



const Home: React.FunctionComponent<Stack>=(props)=>{
    const{navigation} = props;
    const [name, setName] = useState('');
  return (
    <View >
       <ImageBackground source = {cloud} style={styles.img}>
       <TextInput
          placeholder="Enter Name"
          onChangeText={
            (value) => setName(value)
          }
          
          style={styles.textInputStyle}
        />
        <View style={styles.button}>
          <Button 
            title="Submit"
            color="#606070" 
            disabled={!name}
            onPress={()=>navigation.navigate('Countries',{name})}

          />
        </View>
       

       </ImageBackground>
        
        

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    textInputStyle: {
      width: '50%',
      height: 40,
      marginLeft:100,
      borderWidth: 2,
      marginTop: 200,
      borderRadius: 20,
      alignItems: 'center'
    },
    button:{
       alignItems: 'center',
       marginTop: 15,
      
       
    },
    img:{
      height: 700
    }
  });

  export default Home
