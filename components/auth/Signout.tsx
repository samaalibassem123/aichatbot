"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { logout } from "@/actions/Logout";

export default function Signout() {
  const [SignoutText, setSignoutText] = useState<string>("Sign out");

  const HandleLogout = () => {
    setSignoutText("Signin out...");
    logout();
  };
  return (
    <Button
      disabled={SignoutText === "Signin out..." ? true : false}
      className="cursor-pointer"
      onClick={HandleLogout}
    >
      {SignoutText}
    </Button>
  );
}
