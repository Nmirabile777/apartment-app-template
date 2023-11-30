"use client";

import React, { useState } from "react";

import { Button } from "@blueprint/ui";

import SideBarForm from "./sidebarForm";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black opacity-50"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } z-50 flex w-5/6 flex-col bg-white shadow-lg transition-transform duration-300 ease-in-out`}
            >
                {/* Sidebar content */}
                <div className="flex-1 p-4">
                    <SideBarForm />
                </div>

                {isOpen && (
                    <div className="absolute right-0 top-0 p-4">
                        <Button onClick={toggleSidebar}>Close Menu</Button>
                    </div>
                )}
            </div>

            {/* Expand Button */}
            {!isOpen && (
                <div className="fixed left-0 top-1/2 z-50 -translate-y-1/2 transform">
                    <Button
                        className="origin-bottom-left rotate-90 transform bg-gray-600 text-xl text-white"
                        onClick={toggleSidebar}
                    >
                        Multi-Parameter Search
                    </Button>
                </div>
            )}
        </>
    );
}
