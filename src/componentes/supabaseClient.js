import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://umunbkwbnvsrjwkvgodg.supabase.co";
const supabaseAnonKey = "sb_publishable_L08-12iwuxu-zlncNax-ig_IDiwe4aA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);



