import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import styles from "../../library/Stylesheet";
import Profile_screen_buttons from "../../components/profile_screen_buttons";
import Profile_picture from "../../components/profile_picture";
import Player_data from "../../components/player_data";
import { Dimensions } from "react-native";

export default function Profile() {

    const { width, height } = Dimensions.get('window');
    
    return (
        <View >
            <ImageBackground source={require("../../assets/images/bg.jpg")} style={{flex:1,width:width,height:height}} />
            <ScrollView horizontal = {true}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Profile_screen_buttons name='Player Overview' />
                    <Profile_screen_buttons name='Statistics' />
                    <Profile_screen_buttons name='Matches' />
                    <Profile_screen_buttons name='Tournaments' />
                    <Profile_screen_buttons name='Insights' />
                    <Profile_screen_buttons name='Compare' />
                </View>
            </ScrollView>
            <View>
                <Profile_picture />
            </View>
            <View>
                <Player_data />
            </View>
        </View>
    )

}