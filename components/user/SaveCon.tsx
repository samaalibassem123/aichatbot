"use client";

import React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SaveCon() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            onClick={() =>
              toast.success("conversation Saved succesfuly", {
                position: "top-center",
                closeButton: true,
              })
            }
          >
            Save
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>save the conversation</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
