"use client";
import { Label } from "@radix-ui/react-label";
import React, { ReactNode, useActionState, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { login } from "@/actions/Login";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);

  const emailLabel = useRef<HTMLLabelElement>(null);
  const PasswordLabel = useRef<HTMLLabelElement>(null);

  //Change the color of labels if there is an error
  if (state?.errors?.mail) {
    if (emailLabel.current) {
      emailLabel.current.style.color = "red";
    }
  } else {
    if (emailLabel.current) {
      emailLabel.current.style.color = "black";
    }
  }

  if (state?.errors?.password) {
    if (PasswordLabel.current) {
      PasswordLabel.current.style.color = "red";
    }
  } else {
    if (PasswordLabel.current) {
      PasswordLabel.current.style.color = "black";
    }
  }

  return (
    <form
      action={action}
      className="w-[400px] shadow-md p-5 space-y-5 rounded-md drop-shadow-md"
    >
      <legend className="text-2xl font-bold text-center">Login</legend>
      {state?.Autherror && (
        <p className="text-red-400 text-center text-sm">{state.Autherror}</p>
      )}
      <div className=" flex flex-col gap-1.5">
        <Label ref={emailLabel}>Email:</Label>
        <Input name="email" placeholder="example@gmail.com" />
        {
          //Show the error if the field is not valid
          state?.errors?.mail && (
            <span className="text-sm text-red-300">{state.errors.mail}</span>
          )
        }
      </div>
      <div className=" flex flex-col gap-1.5">
        <Label ref={PasswordLabel}>Password:</Label>
        <Input name="password" placeholder="***********" />
        {
          //Show the error if the field is not valid
          state?.errors?.password && (
            <>
              <span className="text-sm text-red-300">Password must be :</span>
              {state.errors.password.map((error, index) => (
                <p className="text-sm text-red-300" key={index}>
                  {error}
                </p>
              ))}
            </>
          )
        }
      </div>
      <div className="text-center">
        <Button disabled={pending} className=" cursor-pointer" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
}
