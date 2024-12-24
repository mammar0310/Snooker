import { View, Text, TouchableOpacity } from "react-native";
import styles from "../library/Stylesheet";

export default function Profile_picture({bgcolor}:any){
    return(
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={[styles.profile_picture,{backgroundColor:bgcolor}]}>

            </TouchableOpacity>
        </View>
    )
}