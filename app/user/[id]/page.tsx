import Header from "@/components/Header";
import ChatUi from "@/components/user/ChatUi";
import { createClient } from "@/utils/supabase/server";
import { UserSchema } from "@/utils/types";
import { notFound, redirect } from "next/navigation";
import React from "react";

export default async function page({
  params,
}: {
  params: { id: string | null };
}) {
  const { id } = await params;
  const supabese = await createClient();
  const {
    data: { user },
    error,
  } = await supabese.auth.getUser();

  //Protect the router
  if (error) {
    redirect("/login");
  } else {
    if (user?.id != id) {
      notFound();
    }
  }
  //GET USER DATA
  const { data } = await supabese
    .from("users")
    .select("*")
    .eq("user_auth_id", user?.id);
  const User: Array<UserSchema> = data as Array<UserSchema>;

  return (
    <main className="md:block flex flex-col">
      <Header username={User[0]?.username} />
      <div className="w-full h-svh flex items-center  z-10 justify-center md:absolute md:top-0 md:left-0">
        <ChatUi username={User[0]?.username} />
      </div>
    </main>
  );
}
