import Breaks from "@/components/breaks";
import { getid } from "@/library/services";
import { supabase } from "@/library/supabase";
import { Button } from "@rneui/themed/dist/Button";
import { useState } from "react";
import { View, Text, Image, Dimensions } from "react-native";



export default function Home() {

const { width, height } = Dimensions.get('window');




  return (
    <View>

      <Image source={require("../../assets/images/home.jpg")} style={{width:width,height:height}} />

      
    </View>

  )
}