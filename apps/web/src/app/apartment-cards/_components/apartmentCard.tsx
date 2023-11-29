import React from "react";

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
    return (
        <Card className="mx-auto w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <CardHeader>
                <div className="flex items-center justify-between bg-white px-4 py-2 dark:bg-gray-800">
                    <CardTitle className="text-lg font-bold text-gray-700 dark:text-gray-200">
                        {apartment.name}
                    </CardTitle>
                </div>
            </CardHeader>

            <CardContent className="px-4">
                <div className="mb-4 px-2">
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
                            <div className="px-6 py-2">
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
