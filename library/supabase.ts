import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://iingdqdwgfcoqxdjoprf.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpbmdkcWR3Z2Zjb3F4ZGpvcHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExMjkwMjgsImV4cCI6MjA0NjcwNTAyOH0.boLALaDLWXBYFC2r57c-EwF12rZ72o5wcu9u6F2DpVc"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})