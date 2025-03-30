import { RegisterForm } from "@/lib/auth/definition";


export async function register(state:any, formData:FormData){

    const ValidFields = RegisterForm.safeParse(
        {
            username: formData.get('username'),
            email: formData.get('email'),
            password : formData.get('password'),
            cpassword : formData.get('cpassword')
        }
    )
    if(!ValidFields.success){
        return {error:ValidFields.error.flatten().fieldErrors}
    }else{
        //register the new user
    }

} 