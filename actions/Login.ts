"use server"
import { LoginFormSchema } from "@/lib/auth/definition";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';



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
        
        const Data = {
            email: formData.get("email") as string,
            password: formData.get("password") as string
        }
        const supabase = await createClient();
        const {data, error} = await supabase.auth.signInWithPassword(Data)
        if(error){
            return {Autherror:"Email or password Incorrect"}
        }
        revalidatePath('/',"layout")
        redirect('/user/'+data.user.id);
        
    }else{
        return {errors:ValidateForm.error.flatten().fieldErrors}
    }
}


