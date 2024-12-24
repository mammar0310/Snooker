import { Text, View, TextInput, Dimensions, ImageBackground } from 'react-native'
import styles from '../../library/Stylesheet'
import Profile_screen_buttons from '../../components/profile_screen_buttons'

export default function Tournament() {
    const { width, height } = Dimensions.get('window');
    return (
       <View>
        <ImageBackground source={require("../../assets/images/bg.jpg")} style={{flex:1,width:width,height:height}} />
        <View>
            <TextInput placeholder='Organizer name' style={styles.venue} />
        </View>

        <View style={{flexDirection:'row',alignSelf:'center'}}>
            <TextInput placeholder='Start Date' style={styles.date} />
            <TextInput placeholder='End Date' style={styles.date} />
        </View>

        <View style={{marginTop:50,marginLeft:20}}>
            <Text >Match Type</Text>
        </View>

        <View style={{marginTop:50,alignSelf:'center'}}>
            <Profile_screen_buttons name='Create' />         
        </View>
       </View>
    )

}
