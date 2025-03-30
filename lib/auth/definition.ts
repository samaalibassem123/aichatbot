import { z } from "zod";

export const LoginFormSchema = z.object(
    {
        mail: z.string().trim().email({message:"* Please Enter a valid email. "}),
        password: z.string().min(6, {message:"* Be at least 6 characters long"}).regex(/[a-zA-Z]/, {message:"* Contain at least one letter."}).regex(/[0-9]/,{message:"* Contain at least one Number ."}).regex(/[^a-zA-Z0-9]/, {message:"* contains at least one speacial character ."}).trim(),
    }
)

