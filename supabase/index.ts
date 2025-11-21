
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://dqabjowlvscnkdjhsswy.supabase.co'

const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)