"use server"
import { LoginFormSchema } from "@/lib/auth/definition";
import { createClient } from "@/utils/supabase/server";



export async function login(state: any, formData: FormData ){
    const ValidateForm = LoginFormSchema.safeParse(
        {
            mail:formData.get("email"),
            password: formData.get("password")
        }
    )
    //Check the validation of the fields
    if(ValidateForm.success){
        //CHECK THE AUTHENTICATION IN SUPABASE
        
        const data = {
            email: formData.get("email") as string,
            password: formData.get("password") as string
        }
        const supabase = await createClient();
        const {error} = await supabase.auth.signInWithPassword(data)
        if(error){
            return {Autherror:"Email or password Incorrect"}
        }
        
    }else{
        return {errors:ValidateForm.error.flatten().fieldErrors}
    }
}