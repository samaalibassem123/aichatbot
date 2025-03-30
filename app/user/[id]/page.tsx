import Header from "@/components/Header";
import { createClient } from "@/utils/supabase/server";
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
  return (
    <main>
      <Header />
    </main>
  );
}
