import React from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function SaveConv({ chat }: { chat: Array<any> }) {
  const Save = () => {
    chat.map((msg, index) => {
      const msgData = {
        role: msg.role,
        content: msg.content,
      };
      console.log(msg.id, msg.role, msg.content);
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="cursor-pointer" onClick={Save}>
            Save
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Save the convesation</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
