import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../library/Stylesheet";


export default function Snooker_balls({key,func,size}:any) {
    return (
        <View>
            <View>
                <TouchableOpacity  onPress={func}>
                    <Image source={require("../assets/images/red.png")}
                    style={{width:60,height:60}} />
                </TouchableOpacity>
                
            </View>
        </View>
    )
}