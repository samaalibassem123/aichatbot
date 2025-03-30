import React from "react";
import Signout from "./auth/Signout";

export default function Header() {
  return (
    <header className="p-5 shadow-md select-none flex items-center justify-between backdrop-blur-lg sticky top-0">
      <h1 className=" font-bold">ChatHub</h1>
      <div className="flex gap-2 items-center ">
        <span className="text-sm font-bold">Username</span>
        <Signout />
      </div>
    </header>
  );
}
