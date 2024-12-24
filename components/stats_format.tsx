
import styles from "@/library/Stylesheet";
import { supabase } from "@/library/supabase";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function Stats_format({ name,played,won,lost,draw}: any) {
    
    //const [matchesplayed, setmatchesplayed] = useState()
    
    
    


    return (
        <View>

            <View style={{ flexDirection: 'row' }}>

                <View style={{ flexDirection: 'row', margin: 10, flex: 1 }}  >
                    <Text>{name}</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text>{played}</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text>{won}</Text>
                </View>


                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text>{lost}</Text>
                </View>


                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text>{draw}</Text>
                </View>

            </View>

            <View style={{ height: 1, backgroundColor: 'black', marginHorizontal: 10, marginTop: 10 }}>
            </View>

        </View>
    )
}