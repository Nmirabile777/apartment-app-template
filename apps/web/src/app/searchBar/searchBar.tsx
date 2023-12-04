"use client";

import React, { useState } from "react";

import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    Input,
} from "@blueprint/ui";

interface SearchBarProps {
    showApartments: boolean;
    setShowApartments: (show: boolean) => void;
}

export default function SearchBar({ showApartments, setShowApartments }: SearchBarProps) {
    const toggleDisplay = () => {
        setShowApartments(!showApartments);
    };
    return (
        <div>
            <Input
                type="text"
                placeholder="Address, City, Zip Code..."
                className="float-left w-1/3 rounded"
            ></Input>

            <div className="float-left ml-2">Sort By:</div>

            {/* Favorited */}
            <div className="float-left ml-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="bg-gray-800">Favorited</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-20">
                        <DropdownMenuItem>Ascending</DropdownMenuItem>
                        <DropdownMenuItem>Descending</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Price */}
            <div className="float-left ml-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="bg-gray-800">Price</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-20">
                        <DropdownMenuItem>Ascending</DropdownMenuItem>
                        <DropdownMenuItem>Descending</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Bedrooms */}
            <div className="float-left ml-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="bg-gray-800">Bedrooms</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-20">
                        <DropdownMenuItem>Ascending</DropdownMenuItem>
                        <DropdownMenuItem>Descending</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Bathrooms */}
            <div className="float-left ml-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="bg-gray-800">Bathrooms</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-20">
                        <DropdownMenuItem>Ascending</DropdownMenuItem>
                        <DropdownMenuItem>Descending</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Apartments vs Parameters Toggle */}
            <div className="float-right ml-2">
                <Button onClick={toggleDisplay} className="bg-gray-800">
                    {showApartments ? "Show Parameters" : "Show Apartments"}
                </Button>
            </div>
        </div>
    );
}
