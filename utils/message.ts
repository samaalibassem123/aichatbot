import { createClient } from "./supabase/server"


export const FindMessaegeById = async (Messageid:string)=>{
    const supabase = await createClient();

}