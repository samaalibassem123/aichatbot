"use client";
import React, { useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

import { AvatarIcon } from "./AvatarIcon";

import { ClipLoader } from "react-spinners";
import SaveCon from "./SaveCon";
import { addMessages } from "@/utils/message";
import { UserSchema } from "@/utils/types";
import { User } from "@supabase/supabase-js";

export default function ChatUi({
  user,
  username,
}: {
  user: User;
  username: string;
}) {
  const { messages, input, handleInputChange, handleSubmit, status } =
    useChat();
  const MessageEndView = useRef<HTMLDivElement>(null);
  const ScrollBottom = () => {
    MessageEndView.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    ScrollBottom();
  }, [messages]);

  useEffect(() => {
    if (status === "ready") {
      addMessages(user.id, messages);
    }
  }, [status]);
  return (
    <div className=" h-full w-full inset-shadow-2xs shadow-md rounded-md p-2 overflow-hidden">
      <ScrollArea className="h-[90%] flex-grow ">
        {messages.map((message) => (
          <div key={message.id} className="flex gap-2 items-end mb-2.5">
            {message.role === "user" ? (
              <div className=" p-1 border-b w-full">
                <div className="flex items-center mb-1.5 gap-2">
                  <AvatarIcon icon="https://github.com/shadcn.png" />
                  <span className="text-gray-500 font-bold underline text-sm capitalize">
                    {username}:
                  </span>
                </div>
                <pre className=" text-wrap whitespace-pre-wrap p-1.5 font-mono">
                  {message.content}
                </pre>
              </div>
            ) : (
              <div className=" p-1 border-b w-full">
                <div className="flex items-center mb-1.5 gap-2 ">
                  <AvatarIcon />
                  <span className="text-gray-500 font-bold underline text-sm whitespace-pre-wrap">
                    ChatBot:
                  </span>
                </div>
                <pre className="text-wrap whitespace-pre-wrap p-1.5 font-mono">
                  {message.content}
                </pre>
              </div>
            )}
          </div>
        ))}{" "}
        <div ref={MessageEndView} />
      </ScrollArea>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 p-2 sticky bottom-0 backdrop-blur-sm "
      >
        <Input name="prompt" value={input} onChange={handleInputChange} />
        <Button type="submit" disabled={status === "submitted" ? true : false}>
          {status === "submitted" ? (
            <ClipLoader color="#ffffff" size={18} />
          ) : (
            "send"
          )}
        </Button>
        <SaveCon />
      </form>
    </div>
  );
}
