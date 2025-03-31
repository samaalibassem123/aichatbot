"use server"
import { RegisterForm } from "@/lib/auth/definition";
import { createClient } from "@/utils/supabase/server";



const ChekuserExist = async (supabase:any, email:string)=>{
    const {data, error} = await supabase.from('users').select('email').eq('email',email);
    const tabData = data as Array<any>;
    return tabData.length === 0 ? false : true;
}




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
        const supabase = await createClient()

        const Data= {   
            email: formData.get('email') as string,
            password : formData.get('password') as string
        }
       
        //first check the existance of user
        const userExist = await ChekuserExist(supabase,Data.email);
        if(userExist){ 
            return {UserAlreadyExistMessage:'this user is already exist try another mail'}
        }else{
            const {data, error} = await supabase.auth.signUp(Data);
            //SignUp ERROR
            if(error){
                return {ServerError:'Try again Error in the server'}
            }
            //Insert the user data in the the users table
            const UsersData =[ {
                email: formData.get('email') as string,
                username : formData.get('username') as string
            }]

            const {error:dbError} = await supabase.from('users').insert(UsersData)
            if(dbError){
                return {ServerError:'Try another time there is an Error in the server'}
            }
            return {CheckyouMailMessage:'Check your mail for the confirmation link !'};

        }   
    }

} 