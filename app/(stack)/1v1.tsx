import React, { useState } from 'react'
import { Text, View, TextInput, Modal, Dimensions, ImageBackground } from 'react-native'
import Player_selection from '../../components/player_selection'
import styles from '../../library/Stylesheet';
import Profile_screen_buttons from '../../components/profile_screen_buttons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';



export default function onevone() {
  const { width, height } = Dimensions.get('window');
  const router = useRouter();
  const [venue, setvenue] = useState("");
  const [oversmodal, setoversmodal] = useState(false)

  const navigate_scorer = () => {
    router.push('./scorer')
  }

  return (
    <View style={{ flexDirection: 'column' }}>
       <ImageBackground source={require("../../assets/images/bg.jpg")} style={{flex:1,width:width,height:height}} />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ left: 50, marginTop: 30, alignItems: 'center' }}>
          <Text> Select Player </Text>
          <Player_selection></Player_selection>
        </View>

        <View style={{ left: 100, marginTop: 30, alignItems: 'center' }}>
          <Text> Select Player </Text>
          <Player_selection></Player_selection>
        </View>
      </View>

      <View>
        <TextInput style={styles.venue} placeholder='Venue' value={venue} onChangeText={(text) => setvenue(text)}></TextInput>
      </View>

      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <TextInput style={styles.date} placeholder='Date' ></TextInput>
        <TextInput style={styles.date} placeholder='Time' ></TextInput>
      </View>

      <View>
        <TextInput style={styles.venue} placeholder='Match Format' onPress={() => setoversmodal(true)} cursorColor={'transparent'}></TextInput>
        <Modal transparent={true} visible={oversmodal} animationType='none'>
          <View style={styles.oversmodalview}>
            <AntDesign name="closecircleo" size={22} color="black" style={{ bottom:20,left:280 }} onPress={() => setoversmodal(false)} />
            <Text style={{ alignSelf: 'baseline' }}>Select Overs</Text>
            <TextInput style={styles.format} placeholder='Overs'></TextInput>
            <Text style={{ marginTop: 30, alignSelf: 'baseline' }}>Select Format</Text>
            <View style={{alignSelf:'center',marginTop:30}}>
            <Profile_screen_buttons name='Done' func={() => setoversmodal(false)} />
            </View>
          </View>
        </Modal>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 30, alignSelf: 'center' }}>
        <Profile_screen_buttons name='Save Fixture' />
        <Profile_screen_buttons name='Start Match' func={navigate_scorer} />
      </View>

    </View>
  )

};
