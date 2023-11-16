"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@blueprint/ui";
// import Carousel from "@/app/apartment-card/pictureCarousel";
// import { ViewDetails } from "@/app/apartment-card/viewDetails";
// import { Contact } from "@/app/apartment-card/contact";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionContent,
//   AccordionTrigger,
// } from "@blueprint/ui";
// import PotentialRoommateCarousel from "@/app/apartment-card/potentialRoommateCarousel";
// import { exampleApartmentInfo } from "@/data/exampleApartmentInfo";

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
    <div className="my-4 max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
      <CardTitle className="text-xl font-semibold text-gray-800 p-4">
        {apartment.title}
      </CardTitle>
      <CardDescription className="px-4 text-gray-600">
        {apartment.description}
      </CardDescription>
      <CardContent>
        {/* <Carousel images={apartment.images} /> */}
        <div className="p-4">
          <div className="flex justify-between items-center text-gray-800">
            <span className="font-bold text-lg">{apartment.price}</span>
            <span>
              {apartment.bedrooms} Bed / {apartment.bathrooms} Bath
            </span>
          </div>
          <div className="flex justify-between items-center text-gray-600 mt-2">
            <span>{apartment.squareFeet}</span>
            <span>{apartment.address}</span>
            <span>{apartment.listingAgency}</span>
          </div>
          {/* <Accordion type="multiple">
            <AccordionItem value="1">
              <AccordionTrigger>Potential Roomates</AccordionTrigger>
              <AccordionContent> */}
          {/* <div> */}
          {/* <PotentialRoommateCarousel
                      roommates={exampleApartmentInfo[0].potentialRoommates}
                    /> */}
          {/* </div> */}
          {/* </AccordionContent>
            </AccordionItem>
          </Accordion> */}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 bg-gray-100">
        {/* <ViewDetails {...apartment} />
        <Contact /> */}
      </CardFooter>
    </div>
  );
};

export default PopUpApartmentCard;
