"use client";

import React, { useState } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    Separator,
} from "@blueprint/ui";

import { Apartment } from "@/app/apartment-cards/exampleApartmentData";
import PictureCarousel from "./pictureCarousel";
import PotentialRoommateCarousel from "./potentialRoommateCarousel";
import { ViewApartment } from "./viewApartmentDetails";

export function ApartmentCard({ apartment }: { apartment: Apartment }) {
    const [isFavorited, setIsFavorited] = useState(false);
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <Card className="mx-auto w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <CardHeader>
                <div className="relative flex items-center justify-between bg-white px-4 py-2 dark:bg-gray-800">
                    <CardTitle className="text-lg font-bold text-gray-700 dark:text-gray-200">
                        {apartment.name}
                    </CardTitle>
                    <button
                        onClick={toggleFavorite}
                        className={`absolute right-2 top-2 rounded-full p-1 ${
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
            </CardHeader>

            <CardContent className="px-4">
                <div className="mb-4">
                    <PictureCarousel images={apartment.images} />
                </div>

                <div className="px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {apartment.bedrooms} BR | {apartment.bathrooms} Bath |{" "}
                                {apartment.sqft} sqft
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {apartment.address}, {apartment.city}, {apartment.state}{" "}
                                {apartment.zip}
                            </span>
                        </div>
                        <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            ${apartment.price}
                        </span>
                    </div>
                </div>

                <Separator />

                <Accordion type="multiple">
                    <AccordionItem value="1">
                        <AccordionTrigger>Potential Roomates</AccordionTrigger>
                        <AccordionContent>
                            <div>
                                <PotentialRoommateCarousel roommates={apartment.roommates} />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>

            <CardFooter>
                <ViewApartment apartment={apartment} />
            </CardFooter>
        </Card>
    );
}
