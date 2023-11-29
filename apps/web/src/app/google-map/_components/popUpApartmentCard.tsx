"use client";

import React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@blueprint/ui";

export interface ApartmentInfo {
    title: string;
    description: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    squareFeet: string;
    address: string;
    listingAgency: String;
    images: string[];
    potentialRoommates: Roommate[];
}

interface Roommate {
    name: string;
    details: string;
    image: string;
}

const PopUpApartmentCard = ({ apartment }: { apartment: ApartmentInfo }) => {
    return (
        <div className="my-4 max-w-lg overflow-hidden rounded-lg bg-white shadow-lg">
            <Card>
                <CardTitle className="p-4 text-xl font-semibold text-gray-800">
                    {apartment.title}
                </CardTitle>
                <CardDescription className="px-4 text-gray-600">
                    {apartment.description}
                </CardDescription>
                <CardContent>
                    <div className="p-4">
                        <div className="flex items-center justify-between text-gray-800">
                            <span className="text-lg font-bold">{apartment.price}</span>
                            <span>
                                {apartment.bedrooms} Bed / {apartment.bathrooms} Bath
                            </span>
                        </div>
                        <div className="mt-2 flex items-center justify-between text-gray-600">
                            <span>{apartment.squareFeet}</span>
                            <span>{apartment.address}</span>
                            <span>{apartment.listingAgency}</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between bg-gray-100 p-4"></CardFooter>
            </Card>
        </div>
    );
};

export default PopUpApartmentCard;
