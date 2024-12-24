import { supabase } from "./supabase";



export const fetchMatchesPlayed = async (query:string) => {
 
    const { data: { user } } = await supabase.auth.getUser()
    const { data, error } : any = await supabase
      .from('Stats')
      .select(query)
      .eq('id', user?.id) // Match by the primary key
      // Fetch a single row
      
      const key : any = query; // Use the query parameter as the key
      const value  = data[0][key]; // Dynamically access the property using the key
      return value
  
   // remove any in const {data,error} if issue
  
  };