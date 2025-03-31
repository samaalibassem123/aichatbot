import React from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function SaveConv({ chat }: { chat: Array<any> }) {


  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="cursor-pointer" >
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
