"use client";

import React, { useEffect, useState } from "react";

import * as z from "zod";

import { ScrollArea } from "@blueprint/ui";

import { apartments } from "@/app/apartment-cards/exampleApartmentData";
import { ApartmentCard } from "./apartment-cards/_components/apartmentCard";
import GoogleMap from "./google-map/_components/google-map";
import { exampleCoordinates, polygonCoordinates } from "./google-map/exampleMapData";
import ParameterMenu from "./parameterMenu/parameterMenu";
import SearchBar from "./searchBar/searchBar";
import Sidebar from "./sidebar/sidebar";
import { FormSchema } from "./sidebar/sidebarForm";

export default function Home() {
    const [parameters, setParameters] = useState<z.infer<typeof FormSchema>[]>([]);
    const [visibleParameters, setVisibleParameters] = useState<boolean[]>(
        new Array(parameters.length).fill(true),
    );

    const toggleParameterVisibility = (index: number) => {
        setVisibleParameters((currentVisibleParameters) =>
            currentVisibleParameters.map((isVisible, i) => (i === index ? !isVisible : isVisible)),
        );
    };

    useEffect(() => {
        setVisibleParameters(new Array(parameters.length).fill(true));
    }, [parameters]);

    const mappedPolygons = parameters.map(
        (_, index) => polygonCoordinates[index % polygonCoordinates.length],
    );

    const [showApartments, setShowApartments] = useState(true);

    return (
        <div className="flex h-screen w-full flex-col px-2 md:flex-row">
            {/* Sidebar */}
            <Sidebar parameters={parameters} setParameters={setParameters} />

            {/* Search Bar and Map */}
            <div className="flex flex-grow flex-col overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="rounded-t-lg border-b-2 border-gray-200 bg-gray-100 px-4 py-2 text-lg font-bold text-gray-700 shadow-lg">
                    <SearchBar
                        showApartments={showApartments}
                        setShowApartments={setShowApartments}
                    />
                </div>

                <div className="flex-grow overflow-hidden rounded-lg">
                    <GoogleMap
                        lat={42.3601}
                        lng={-71.0589}
                        zoom={13}
                        markers={exampleCoordinates}
                        polygons={mappedPolygons}
                        visiblePolygons={visibleParameters}
                    />
                </div>
            </div>

            {/* Apartments */}
            <div className="h-screen w-full overflow-auto md:ml-4 md:w-1/3 lg:w-1/3">
                <div className="rounded-t-lg border-b-2 border-gray-200 bg-gray-100 px-2 py-2 text-lg font-bold text-gray-700 shadow-lg">
                    <ScrollArea className="h-full">
                        {showApartments ? (
                            <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                                {apartments.map((apartment) => (
                                    <div key={apartment.id}>
                                        <ApartmentCard apartment={apartment} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <ParameterMenu
                                parameters={parameters}
                                toggleVisibility={toggleParameterVisibility}
                                visibleParameters={visibleParameters}
                            />
                        )}
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}
