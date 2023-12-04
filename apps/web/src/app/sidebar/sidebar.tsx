"use client";

import React, { useState } from "react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@blueprint/ui";

import SideBarForm from "./sidebarForm";
import { FormSchema } from "./sidebarForm";
import * as z from "zod";

interface SidebarProps {
    parameters: z.infer<typeof FormSchema>[];
    setParameters: React.Dispatch<React.SetStateAction<z.infer<typeof FormSchema>[]>>;
}

export default function Sidebar({ parameters, setParameters }: SidebarProps) {
    return (
        <Sheet>
            <SheetTrigger className="fixed left-0 top-1/3 z-50 origin-bottom-left rotate-90 rounded-sm bg-black p-2 text-xl text-white">
                Multi-Parameter Search
            </SheetTrigger>
            <SheetContent className="w-1/2">
                <SheetHeader>
                    <SheetTitle>Advanced Search</SheetTitle>
                    <SideBarForm parameters={parameters} setParameters={setParameters} />
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
