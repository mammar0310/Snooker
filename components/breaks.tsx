import styles from "@/library/Stylesheet";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Breaks({ name }: any) {
    return (
        <View>

            <View style={{ flexDirection: 'row' }}>

                <View style={{ flexDirection: 'row', margin:10,flex:1 }}  >
                    <Text>{name}</Text>
                </View>

                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>100</Text>
                </View>

                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>100</Text>
                </View>

                
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>100</Text>
                </View>

                
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>100</Text>
                </View>

                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>100</Text>
                </View>

                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>100</Text>
                </View>

                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>100</Text>
                </View>

            </View>

            <View style={{ height: 1, backgroundColor: 'black', marginHorizontal: 10, marginTop: 10 }}>
            </View>

        </View>
    )
}