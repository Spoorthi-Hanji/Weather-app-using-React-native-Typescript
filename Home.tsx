import * as React from 'react';
import {View,TextInput,StyleSheet,Button,LogBox, Alert } from 'react-native';
import {useState} from 'react'
import { Stack } from './App';
import Toast from 'react-native-toast-message';

LogBox.ignoreAllLogs();
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
	"finland",
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
	"hong kong",
	"Hungary",
	"Iceland",
	"iceland",
	"India",
	"india",
	"Indonesia",
	"indonesia",
	"Iran",
	"iran",
	"Iraq",
	"iraq",
	"Ireland",
	"ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"italy",
	"Jamaica",
	"Japan",
	"japan",
	"Jersey",
	"jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"kenya",
	"Kiribati",
	"Korea",
	"korea",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"mauritius",
	"Mayotte",
	"Mexico",
	"mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"morocco",
	"Mozambique",
	"Myanmar",
	"myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"new zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"oman",
	"Pakistan",
	"pakistan",
	"Palau",
	"palau",
	"Palestine, State of",
	"Panama",
	"panama",
	"Papua New Guinea",
	"Paraguay",
	"paraguay",
	"Peru",
	"peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"qatar",
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
	"singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"somalia",
	"South Africa",
	"south africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"sudan",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"switzerland",
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
	
   
    const checkData = ()=> countryList.some(country=>{
      if(country == name){
        navigation.navigate('Countries',{name});
		// Toast.hide()
      }else{
		Toast.show({
			type:'error',
			text1: 'Enter correct country name',
			visibilityTime:1000,
			
		})

		
		setName('')
		
	  }
    })

	
  return (
    <View >
       

        <View>
			
		<TextInput
          placeholder="Enter country name"
          onChangeText={
            (value) => setName(value)
          }
		  value={name}
          style={styles.textInputStyle}
		  selectionColor='#0000FF'
		  testID='country-name'
        />

		</View>
       
		
        <View style={styles.button}>
          <Button 
            title="Submit"
            color="#606070" 
            disabled={!name}
            onPress={checkData}
			testID="submit_btn"
          />
		  
        </View>
		
		<Toast/>
       
        
        

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    textInputStyle: {
	height: 40,
	paddingLeft: 6,
	borderBottomWidth: 1,
	marginTop: 200,
	borderBottomColor:'#0000FF',
	marginLeft: 50,
	marginRight:50
    },
    button:{
       alignItems: 'center',
       marginTop: 15,
    },
    img:{
      height: 700
    },
	errorMsg:{
		fontSize:30
	}
  });

  export default Home;
