import { View, Text, TouchableOpacity } from "react-native";
import styles from "../library/Stylesheet";

export default function Profile_screen_buttons({name,func}:any) {
    return (
        <View>
            <View>
                <TouchableOpacity style={styles.profie_screen_buttons} onPress={func}>
                    <Text>{name}</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}