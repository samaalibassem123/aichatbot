"use server"
import { RegisterForm } from "@/lib/auth/definition";
import { createClient } from "@/utils/supabase/server";


export async function register(state:any, formData:FormData){

    const ValidFields = RegisterForm.safeParse(
        {   
            mail: formData.get('email'),
            password : formData.get('password'),
            username: formData.get('username'),
            Cpassword : formData.get('cpassword')
        }
    )
    if(!ValidFields.success){
        return {error:ValidFields.error.flatten().fieldErrors}
    }else{
        const Data= {   
            email: formData.get('email') as string,
            password : formData.get('password') as string
        }
        const supabase = await createClient()
        const {data,error} = await supabase.auth.signUp(Data);
        if(error){
           console.log(error)
        }

    }

} 