import RegisterForm from "@/components/auth/RegisterForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  //Protect the router
  if (user) {
    redirect("/user/" + user.id);
  }

  return (
    <div className="flex items-center justify-center min-h-svh p-2 x">
      <RegisterForm />
    </div>
  );
}
