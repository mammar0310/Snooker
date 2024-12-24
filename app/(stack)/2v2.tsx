import React, { Component, useState } from 'react'
import { Text, View, TextInput, Modal } from 'react-native'
import Player_selection from '../../components/player_selection'
import styles from '../../library/Stylesheet';
import Profile_screen_buttons from '../../components/profile_screen_buttons';



export default function twovtwo() {

  const [venue, setvenue] = useState("");
  const [oversmodal, setoversmodal] = useState(false)

  return (
    <View style={{ flexDirection: 'column' }}>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ left: 50, marginTop: 30, alignItems: 'center' }}>
          <Text> Select Team </Text>
          <Player_selection></Player_selection>
        </View>

        <View style={{ left: 100, marginTop: 30, alignItems: 'center' }}>
          <Text> Select Team </Text>
          <Player_selection></Player_selection>
        </View>
      </View>

      <View>
        <TextInput style={styles.venue} placeholder='Venue' value={venue} onChangeText={(text) => setvenue(text)}></TextInput>
      </View>

      <View style={{flexDirection:'row',alignSelf:'center'}}>
          <TextInput style={styles.date} placeholder='Date' ></TextInput>
          <TextInput style={styles.date} placeholder='Time' ></TextInput>
      </View>

      <View>
        <TextInput style={styles.venue} placeholder='Match Format' onPress={()=>setoversmodal(true)} cursorColor={'transparent'}></TextInput>
        <Modal transparent={true} visible={oversmodal} animationType='slide'>
          <View style={styles.oversmodalview}>
            <Text style={{alignSelf:'baseline'}}>Select Overs</Text>
            <TextInput style={styles.format} placeholder='Overs'></TextInput>
            <Text style={{marginTop:20,alignSelf:'baseline'}}>Select Format</Text>
            <Profile_screen_buttons name='Done' func={()=>setoversmodal(false)} />
          </View>
        </Modal>
      </View>

      <View style={{flexDirection:'row',marginTop:30, alignSelf:'center'}}>
        <Profile_screen_buttons name='Save Fixture' />
        <Profile_screen_buttons name='Start Match' />
      </View>

    </View>
  )

};
