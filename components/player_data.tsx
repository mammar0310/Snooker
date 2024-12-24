import { View, Text, TouchableOpacity } from "react-native";
import styles from "../library/Stylesheet";

export default function Player_data(){
    return(
        <View>
            <View style={{alignItems: 'center'}}>
                <Text>Muhammad Ammar</Text>
                <Text>Bowler | Right Hand Bat</Text>
                <Text>Right Arm Fast</Text>
            </View>
            <View style={styles.profile_id}>
                <Text>Profile ID : damm2173</Text>
            </View>
            <View style={styles.player_overview_datatable_heading}>
                <Text style={{fontSize:15,color:'white'}}>Matches</Text>
            </View>
            <View style={styles.player_overview_datatable_data}>
                <Text style={{fontWeight:'bold',fontSize:20}}>20</Text>
                <Text>Total Matches</Text>
            </View>
            <View style={styles.player_overview_datatable_data}>
                <Text style={{fontWeight:'bold',fontSize:20}}>20</Text>
                <Text>Won</Text>
            </View>
            <View style={styles.player_overview_datatable_data}>
                <Text style={{fontWeight:'bold',fontSize:20}}>20.0</Text>
                <Text>Average</Text>
            </View>
        </View>
    )
}