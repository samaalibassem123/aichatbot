import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  //Protect the route
  if (user) {
    redirect("/user/" + user.id);
  }

  return (
    <main className="flex flex-col gap-2.5 items-center justify-center w-full h-svh">
      <Button asChild>
        <Link href={"/login"}>Login</Link>
      </Button>
      <Button asChild>
        <Link href={"/register"}>SignUp</Link>
      </Button>
    </main>
  );
}
