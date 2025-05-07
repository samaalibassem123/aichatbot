"use server"
import { createClient } from "./supabase/server"
import { Message } from "./types";


export const FindMessaegeById = async (Messageid:string, userId:string)=>{
    const supabase = await createClient();
    //get messasge by id
    const data = await supabase.from("chabotMessages").select('*').eq("meesage_id",Messageid).eq("user_id", userId).single()
    if(data){
        return data
    }
}

export const GetMessages = async (userId:string)=>{
    const supabase = await createClient();

    const {data} = await supabase.from("chabotMessages").select('*').eq("user_id", userId).order("created_at",{ ascending: true })

    if(data){
        return data;
    }

}


export const addMessages = async(userId:String, messages:Array<Message>)=>{
    const supabase = await createClient();
    //Looping the messages
    const MessagesData =messages.map((message)=>{
        
    })
}