import React from "react";

import { ScrollArea } from "@blueprint/ui";

import { apartments } from "@/app/apartment-cards/exampleApartmentData";
import { ApartmentCard } from "./apartment-cards/_components/apartmentCard";
import GoogleMap from "./google-map/_components/google-map";
import { exampleCoordinates, polygonCoordinates } from "./google-map/exampleMapData";
import SearchBar from "./searchBar/searchBar";
import Sidebar from "./sidebar.tsx/sidebar";

export default function Home() {
    return (
        <div className="flex h-screen w-full flex-col px-4 md:flex-row">

            {/* Sidebar */}
            <Sidebar />

            {/* Search Bar and Map */}
            <div className="flex flex-grow flex-col overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="bg-gray-100 rounded-t-lg border-b-2 border-gray-200 px-4 py-2 text-lg font-bold text-gray-700 shadow-lg">
                    <SearchBar />
                </div>

                <div className="flex-grow overflow-hidden rounded-lg">
                    <GoogleMap
                        lat={42.3601}
                        lng={-71.0589}
                        zoom={13}
                        markers={exampleCoordinates}
                        polygons={polygonCoordinates}
                    />
                </div>
            </div>

            {/* Apartments */}
            <div className="h-screen w-full overflow-auto md:ml-4 md:w-1/3 lg:w-1/3">
                <ScrollArea className="h-full">
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                        {apartments.map((apartment) => (
                            <div key={apartment.id}>
                                <ApartmentCard apartment={apartment} />
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
}
