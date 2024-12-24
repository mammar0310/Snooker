
import { Dimensions, ImageBackground, Text, View } from 'react-native'
import Profile_screen_buttons from '../../components/profile_screen_buttons'
import { useRouter } from 'expo-router'




export default function Startmatch(){

    const { width, height } = Dimensions.get('window');
    const router = useRouter();
    
    const navigate1v1 = () => {
      router.push('../(stack)/1v1')
    }

    const navigate2v2 = () => {
      router.push('../(stack)/2v2')
    }

    return (
      <View style={{justifyContent:'center'}}>
        <ImageBackground source={require("../../assets/images/bg.jpg")} style={{flex:1,width:width,height:height}} />
        <Profile_screen_buttons name='1 vs 1' func={navigate1v1}  />
        <Profile_screen_buttons name='Team vs Team' func={navigate2v2} />
        
      </View>
    )
  }

