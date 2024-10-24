import {Text, Scrollview, View, Image, StyleSheet, TouchableOpacity} from "react-native"
import { Link } from "expo-router"; 
import list from './products.json';
export default function About() {
    return (
        <View style={{flex:1, flexDirection:"row"}}>
            
            <Image
            style={{width: '22%', height: 100, margin: 15, flex: 1}}
            source={require('../assets/images/capi.png')}
            />
       <Image
            style={{width: '22%', height: 100, margin: 15,flex: 1}}
            source={require('../assets/images/cru.png')}
            />
            
            <Image
            style={{width: '22%', height: 100, margin: 15, flex: 1}}
            source={require('../assets/images/darth.png')}
            /> 
         
        </View>
        
    )
}

const stylrs = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
});