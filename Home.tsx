import * as React from 'react';
import {View,TextInput,StyleSheet,Button,ImageBackground } from 'react-native';
import {useState} from 'react'
import cloud from './images/cloud.jpg'
import { Stack } from './App';
import { HelperText } from 'react-native-paper';

const countryList = [
	"Afghanistan",
	"afghanistan",
	"Albania",
	"albania",
	"Algeria",
	"algeria",
	"American Samoa",
	"American samoa",
	"Andorra",
	"andorra",
	"Angola",
	"angola",
	"Anguilla",
	"anguilla",
	"Antarctica",
	"antarctica",
	"Antigua and Barbuda",
	"antigua and barbuda",
	"Argentina",
	"argentina",
	"Armenia",
	"armenia",
	"Aruba",
	"arbua",
	"Australia",
	"australia",
	"Austria",
	"austria",
	"Azerbaijan",
	"azerbaijan",
	"Bahamas",
	"bahamas",
	"Bahrain",
	"barhain",
	"Bangladesh",
	"bangladesh",
	"Barbados",
	"barbados",
	"Belarus",
	"belarus",
	"Belgium",
	"belgium",
	"Belize",
	"belize",
	"Benin",
	"benin",
	"Bermuda",
	"bermuda",
	"Bhutan",
	"bhutan",
	"Bolivia",
	"bolivia",
	"Bonaire",
	"bonaire",
	"Bosnia and Herzegovina",
	"bosnia and herzegovina",
	"Botswana",
	"botswana",
	"Bouvet Island",
	"bouvet island",
	"Brazil",
	"brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"brunei darussalam",
	"Bulgaria",
	"bulgaria",
	"Burkina Faso",
	"burkina faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"cambodia",
	"Cameroon",
	"Canada",
	"canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"chile",
	"China",
	"china",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"colombia",
	"Comoros",
	"Congo",
	"Congo",
	"congo",
	"Cook Islands",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"fiji",
	"Finland",
	"France",
	"france",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"india",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];


const Home: React.FunctionComponent<Stack>=(props)=>{
    const{navigation} = props;
    const [name, setName] = useState('');
    const [errorNum, setErrorNum] = useState<any>(null);

    const checkData = ()=> countryList.some(country=>{
      if(country === name){
        navigation.navigate('Countries',{name})
      }else{
		setErrorNum('Enter correct Country name');
		
	  }
    })
  return (
    <View >
       <ImageBackground source = {cloud} style={styles.img}>
       <TextInput
          placeholder="Enter country name"
          onChangeText={
            (value) => setName(value)
          }
          
          style={styles.textInputStyle}
        />
{errorNum != null && (
        <View>
          <HelperText type="error" visible={true}>
            {errorNum}
          </HelperText>
        </View>
      )}

        <View style={styles.button}>
          <Button 
            title="Submit"
            color="#606070" 
            disabled={!name}
            onPress={checkData}


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
