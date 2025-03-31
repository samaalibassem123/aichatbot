import React from "react";
import Signout from "./auth/Signout";
import { AvatarIcon } from "./user/AvatarIcon";

export default function Header({ username }: { username: string }) {
  return (
    <header className="p-5 z-50 shadow-md select-none flex items-center justify-between backdrop-blur-lg sticky top-0">
      <h1 className=" font-bold">Chaty_Btounsi</h1>
      <div className="flex gap-2 items-center ">
        <span className="text-sm font-bold capitalize">{username}</span>
        <AvatarIcon icon="https://github.com/shadcn.png" />
        <Signout />
      </div>
    </header>
  );
}
