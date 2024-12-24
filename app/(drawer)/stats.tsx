import { View,Text,ImageBackground, Dimensions } from "react-native";
import Stats_format from "@/components/stats_format";
import Breaks from "@/components/breaks";
import Tournaments_format from "@/components/tournaments_format";
import { supabase } from "@/library/supabase";
import { useEffect, useState } from "react";
import { fetchMatchesPlayed } from "@/library/data";


export default function Stats(){

  const { width, height } = Dimensions.get('window');
  
  const [played,setplayed] : any = useState();
  const [won,setwon] : any = useState();
  const [lost,setlost] : any = useState();
  const [draw,setdraw] : any = useState();

  useEffect(()=>{
    setplayed(fetchMatchesPlayed("matches_played"));
    setwon(fetchMatchesPlayed("matches_won"));
    setlost(fetchMatchesPlayed("matches_lost"));
    setdraw(fetchMatchesPlayed("matches_drawn"));
  },[])
 



  return(
    <View>
      <ImageBackground source={require("../../assets/images/bg.jpg")} style={{flex:1,width:width,height:height}} />
      <View style={{ height: 30, backgroundColor: 'black', marginHorizontal: 10, marginTop: 20, flexDirection: 'row' }}>
        <Text style={{ color: 'white', fontSize: 20, marginLeft: 70 }}>Played</Text>
        <Text style={{ color: 'white', fontSize: 20, marginLeft: 25 }}>Won</Text>
        <Text style={{ color: 'white', fontSize: 20, marginLeft: 35 }}>Lost</Text>
        <Text style={{ color: 'white', fontSize: 20, marginLeft: 30 }}>Draw</Text>
      </View>
      <Stats_format name='Matches' played={played} won={won} lost={lost} draw={draw} />
      <Stats_format name='Frames' />
      <Stats_format name='Leagues' />
      <Stats_format name='Points' />

      <View style={{ height: 30, backgroundColor: 'black', marginHorizontal: 10, marginTop: 20, flexDirection: 'row' }}>
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 55 }}>50s</Text>
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 16 }}>60s</Text>
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 16 }}>70s</Text>
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 16 }}>80s</Text>
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 16 }}>90s</Text>
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>100s</Text>
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>Total</Text>
      </View>

      <Breaks name='Breaks' />

      <View style={{ height: 30, backgroundColor: 'black', marginHorizontal: 10, marginTop: 20, flexDirection: 'row' }}>
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 55 }}>Winner</Text>
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 16 }}>Final</Text>
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 16 }}>Semi</Text>
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 16 }}>Quarter</Text>
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>Round</Text>
        
        
      </View>

      <Tournaments_format name='Rank' />
      <Tournaments_format name='League' />
      <Tournaments_format name='Total' />

    </View>
     
  )
}