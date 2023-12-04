"use client";

import React, { useState } from "react";

import {
    Button,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    ScrollArea,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@blueprint/ui";

import { Apartment } from "@/app/apartment-cards/exampleApartmentData";

export function ApartmentDetails({ apartment }: { apartment: Apartment }) {
    const [isFavorited, setIsFavorited] = useState(false);
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <Dialog>
            <DialogTrigger>Details</DialogTrigger>
            <DialogContent className="w-96">
                <DialogHeader>
                    <div className="relative flex items-center justify-between bg-white px-4 py-2 dark:bg-gray-800">
                        <DialogTitle className="text-lg font-bold text-gray-700 dark:text-gray-200">
                            {apartment.name}
                        </DialogTitle>
                        <button
                            onClick={toggleFavorite}
                            className={`absolute right-4 top-2 rounded-full p-1 ${
                                isFavorited ? "bg-yellow-400" : "bg-gray-200 dark:bg-gray-600"
                            } transition-colors duration-150 hover:bg-yellow-500 dark:hover:bg-yellow-400`}
                            aria-label="Toggle favorite"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill={isFavorited ? "yellow" : "none"}
                                stroke={isFavorited ? "yellow" : "currentColor"}
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={isFavorited ? "0" : "2"}
                                    d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.11 3.41a1.5 1.5 0 001.425 1.049h3.567c.958 0 1.356 1.224.65 1.856l-2.898 2.11a1.5 1.5 0 00-.543 1.67l1.11 3.41c.3.921-.758 1.683-1.54 1.15l-2.898-2.11a1.5 1.5 0 00-1.756 0l-2.898 2.11c-.782.533-1.84-.229-1.54-1.15l1.11-3.41a1.5 1.5 0 00-.543-1.67l-2.898-2.11c-.706-.632-.308-1.856.65-1.856h3.567a1.5 1.5 0 001.425-1.049l1.11-3.41z"
                                />
                            </svg>
                        </button>
                    </div>
                </DialogHeader>
                <DialogDescription className="grid grid-cols-2">
                    <ScrollArea className="h-96">
                        <div className="grid grid-cols-2 gap-1">
                            {apartment.images.length > 0 && (
                                <div className="col-span-2">
                                    <img
                                        src={apartment.images[0]}
                                        alt="Main"
                                        className="h-auto w-full rounded-lg shadow-lg"
                                    />
                                </div>
                            )}

                            {apartment.images.slice(1).map((img, index) => (
                                <div key={index} className="w-full">
                                    <img
                                        src={img}
                                        alt={`Image ${index + 1}`}
                                        className="h-auto w-full rounded-lg shadow-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </ScrollArea>

                    <div className="mx-2">
                        <Tabs defaultValue="general">
                            <TabsList>
                                <TabsTrigger value="general">General</TabsTrigger>
                                <TabsTrigger value="floorplans">Floorplans</TabsTrigger>
                                <TabsTrigger value="contact">Contact</TabsTrigger>
                            </TabsList>
                            <TabsContent value="general">
                                <div className="space-y-2">
                                    <p>
                                        <strong>Address:</strong> {apartment.address},{" "}
                                        {apartment.city}, {apartment.state}, {apartment.zip}
                                    </p>
                                    <p>
                                        <strong>Description:</strong> {apartment.description}
                                    </p>
                                    <p>
                                        <strong>Bedrooms:</strong> {apartment.bedrooms}
                                    </p>
                                    <p>
                                        <strong>Bathrooms:</strong> {apartment.bathrooms}
                                    </p>
                                    <p>
                                        <strong>Square Feet:</strong>{" "}
                                        {apartment.sqft.toLocaleString()} sqft
                                    </p>
                                    <p>
                                        <strong>Price:</strong> ${apartment.price.toLocaleString()}
                                    </p>
                                    <p>
                                        <strong>Date Listed:</strong> {apartment.dateListed}
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="floorplans">
                                <div className="space-y-2"></div>
                            </TabsContent>
                            <TabsContent value="contact">
                                <div className="space-y-2">
                                    <p>
                                        <strong>Address:</strong> {apartment.address},{" "}
                                        {apartment.city}, {apartment.state}, {apartment.zip}
                                    </p>
                                    <p>
                                        <strong>Contact URL:</strong>{" "}
                                        <a
                                            href={apartment.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Inquire about this apartment
                                        </a>
                                    </p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </DialogDescription>

                <DialogFooter>
                    <DialogClose>
                        <Button className="mr-4">Close</Button>
                    </DialogClose>
                    <Button>Contact</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
