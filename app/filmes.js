import { View, Text, ScrollView } from "react-native"
import { Image } from "react-native"
export default function Flex() {
    return (
        <ScrollView contentContainerStyle={{ flex:1 }}>
            <View style={{ display: "flex", flexDirection:"column"}}>
            
              <View style={{ alignItems:"center",justifyContent:"center"}}>
              <Text>Capitão América</Text>

            </View>
            
            <View style={{flexDirection:"row" }}>
              <View style={{flex:1}}>
                <Image style={{width: "100%",height:300}} 
                   source={require("../assets/images/capitao.jpg")}
                />
                </View>
              <View style={{flex:1,justifyContent: "center"}}>

                <Text>
                hoio
                </Text>
              </View>
            </View>
            <View style={{ alignItems:"center",justifyContent:"center"}}>
              <Text>Cruella</Text>

            </View>
            
            <View style={{flexDirection:"row" }}>
              <View style={{flex:1}}>
                <Image style={{width: "100%",height:300}} 
                   source={require("../assets/images/cruella.jpg")}
                />
                </View>
              <View style={{flex:1,justifyContent: "center"}}>

                <Text>
               ftytf
                </Text>
              </View>
            </View>
            <View style={{ alignItems:"center",justifyContent:"center"}}>
              <Text>Star Wars </Text>

            </View>
            
            <View style={{flexDirection:"row" }}>
              <View style={{flex:1}}>
                <Image style={{width: "100%",height:300}} 
                   source={require("../assets/images/star.jpg")}
                />
                </View>
                
              <View style={{flex:1,justifyContent: "center"}}>

                <Text>
                fghfhgf
                </Text>
              </View>
            </View>
            </View>
           
        </ScrollView>
    )
}