import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest } from 'next/server'

import { createClient } from '@/utils/supabase/server'
import { notFound, redirect } from 'next/navigation'
import { error } from 'console'

export async function GET(request: NextRequest) {
  console.log("tessst")

  const { searchParams } = new URL(request.url)
  const ErrorDesc  = searchParams.get('error_description') as string | null
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/'


  if (token_hash && type) {
    const supabase = await createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })  
    if (!error) {
      // redirect user to specified redirect URL or root of app
      const MailCode = next.split('=')[1];
      console.log(MailCode)
      if (MailCode === "access_denied&error_code"){
        notFound();
      }
      redirect('/mailtmp/'+MailCode)
    }
  }
  // redirect the user to an error page with some instructions
  notFound()
}