import { View, Text, TouchableOpacity } from "react-native";
import styles from "../library/Stylesheet";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Player_selection() {
    return (
        <View>
            <View>
                <TouchableOpacity style={styles.player_selection_button}>
                    <AntDesign name="plus" size={50} color="white" />
                </TouchableOpacity>
                
            </View>
        </View>
    )
}