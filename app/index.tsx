import React, { useContext, useState, useEffect } from 'react' 
import { deleteid, setid, getid } from '@/library/services'
import { supabase } from "@/library/supabase"
import { Session } from '@supabase/supabase-js'
import { authcontext } from '@/library/authcontext'
import Home from './(drawer)/home'
import Auth from './login'






export default function App(){
  const [check,setcheck] : any = useState()
  useEffect(()=>{
    const checking = async () =>{
      const storedId = await getid();
      //deleteid();
      setcheck(storedId);
      
    }

    checking();
  },[])
   
  return(
    check == null ? <Home/> : <Auth />
  )
    
}