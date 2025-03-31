"use client";
import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { fields } from "@/utils/contants";
import Link from "next/link";
import { register } from "@/actions/Register";

export default function RegisterForm() {
  const [state, action, pending] = useActionState(register, undefined);

  return (
    <form
      action={action}
      className="md:w-[400px] w-full inset-shadow-2xs shadow-md  p-5 space-y-2 flex flex-col gap-2.5 rounded-md"
    >
      <div className="text-center">
        <legend className="text-2xl font-bold">Register</legend>
        <span className="text-gray-500 text-sm">Create new account</span>
        {state?.CheckyouMailMessage && (
          <p className="text-sm text-blue-400">{state.CheckyouMailMessage}</p>
        )}
        {state?.UserAlreadyExistMessage && (
          <p className="text-sm text-red-400">
            {state.UserAlreadyExistMessage}
          </p>
        )}
        {state?.ServerError && (
          <p className="text-sm text-red-400">{state.ServerError}</p>
        )}
      </div>
      {fields.map((field, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Label>{field.label}</Label>
          <Input
            name={field.name}
            placeholder={field.placeHolder}
            type={field.type}
          />
          {/*ERROR HANDLING */}
          {field.name === "username" && state?.error?.username && (
            <p className="text-sm text-red-400">{state.error.username}</p>
          )}{" "}
          {field.name === "email" && state?.error?.mail && (
            <p className="text-sm text-red-400">{state.error.mail}</p>
          )}
          {field.name === "password" &&
            state?.error?.password &&
            state.error.password.map((erreur, index) => (
              <p className="text-sm text-red-400" key={index}>
                {erreur}
              </p>
            ))}
          {field.name === "cpassword" &&
            state?.error?.Cpassword &&
            state.error.Cpassword.map((erreur, index) => (
              <p className="text-sm text-red-400" key={index}>
                {erreur}
              </p>
            ))}
        </div>
      ))}
      <Button disabled={pending} className="cursor-pointer">
        Register
      </Button>
      <Link href={"/login"} className="text-sm text-gray-500 underline">
        Login to your account
      </Link>
    </form>
  );
}
