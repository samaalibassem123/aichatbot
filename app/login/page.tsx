import LoginFrom from "@/components/auth/LoginForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  //Protect the route
  if (user) {
    redirect("/user/" + user.id);
  }
  return (
    <div className="flex p-5 items-center justify-center  h-svh">
      <LoginFrom />
    </div>
  );
}
