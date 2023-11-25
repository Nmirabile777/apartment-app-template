import React from "react";

import { ApartmentCard } from "./apartment-cards/apartmentCard";
// import GoogleMap from "./google-map/_components/google-map";


export interface Roommate {
    name: string;
    details: string;
    image: string;
}

export interface Apartment {
    id: number; //This is going to be generated for each list of apartments at the time of fetching the apartment data from the API
    name: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    price: number;
    address: string;
    city: string;
    state: string;
    zip: number;
    lat: number;
    lng: number;
    images: string[];
    description: string;
    url: string;
    dateListed: string;
    roommates: Roommate[];
    favorited: boolean;
    hidden: boolean;
}

const apartments: Apartment[] = [
    {
        id: 1,
        name: "Apartment 1",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 2521,
        price: 1263,
        address: "1334 Main St",
        city: "Cityville",
        state: "ST",
        zip: 55068,
        lat: 45.679218,
        lng: -97.592295,
        images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        ],
        description: "This is a description of Apartment 1. It has all the amenities you need!",
        url: "https://www.example.com/apartment1",
        dateListed: "2021-01-09",
        roommates: [
            {
                name: "Roommate A",
                details: "Description of Roommate A",
                image: "https://media.istockphoto.com/id/1498250886/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=DGsRdT5klN5dRkUidD-J1N07eOqmdjtdgaELTp0ZTa8=",
            },
            {
                name: "Roommate B",
                details: "Description of Roommate B",
                image: "https://media.istockphoto.com/id/1498250877/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=N7g2asUCnI4XtzT6VgTZenR94M6w3DYyPLMcmwoxSCA=",
            },
        ],
        favorited: false,
        hidden: false,
    },
    {
        id: 2,
        name: "Apartment 2",
        bedrooms: 5,
        bathrooms: 2,
        sqft: 1215,
        price: 2164,
        address: "138 Main St",
        city: "Cityville",
        state: "ST",
        zip: 60063,
        lat: 40.521549,
        lng: -110.945731,
        images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        ],
        description: "This is a description of Apartment 2. It has all the amenities you need!",
        url: "https://www.example.com/apartment2",
        dateListed: "2022-02-24",
        roommates: [
            {
                name: "Roommate A",
                details: "Description of Roommate A",
                image: "https://media.istockphoto.com/id/1498250886/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=DGsRdT5klN5dRkUidD-J1N07eOqmdjtdgaELTp0ZTa8=",
            },
            {
                name: "Roommate B",
                details: "Description of Roommate B",
                image: "https://media.istockphoto.com/id/1498250877/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=N7g2asUCnI4XtzT6VgTZenR94M6w3DYyPLMcmwoxSCA=",
            },
        ],
        favorited: false,
        hidden: false,
    },
    {
        id: 3,
        name: "Apartment 3",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 519,
        price: 3350,
        address: "1074 Main St",
        city: "Cityville",
        state: "ST",
        zip: 57262,
        lat: 36.156495,
        lng: -97.540072,
        images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        ],
        description: "This is a description of Apartment 3. It has all the amenities you need!",
        url: "https://www.example.com/apartment3",
        dateListed: "2022-06-19",
        roommates: [
            {
                name: "Roommate A",
                details: "Description of Roommate A",
                image: "https://media.istockphoto.com/id/1498250886/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=DGsRdT5klN5dRkUidD-J1N07eOqmdjtdgaELTp0ZTa8=",
            },
            {
                name: "Roommate B",
                details: "Description of Roommate B",
                image: "https://media.istockphoto.com/id/1498250877/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=N7g2asUCnI4XtzT6VgTZenR94M6w3DYyPLMcmwoxSCA=",
            },
        ],
        favorited: false,
        hidden: false,
    },
];


// import { LoadScript } from "@react-google-maps/api";
// import GoogleMapComponent from "./google-map/_components/google-map";

// const App = () => {
//   return (
//     <LoadScript googleMapsApiKey="YOUR_API_KEY">
//       <GoogleMapComponent
//         lat={...}
//         lng={...}
//         zoom={...}
//         markers={...}
//         polygons={...}
//       />
//     </LoadScript>
//   );
// };


export default async function Home() {
    return (
        <div>
            <div>
                we grind convention feat: apartment-card
                https://github.com/shadcn-ui/ui/blob/main/CONTRIBUTING.md
            </div>

            <div className="w-9/12">
                <div>Map here:</div>
                {/* <GoogleMap lat={0} lng={0} zoom={0} markers={[]} polygons={[]} /> */}
            </div>

            <div className="float-right mr-4">
                {apartments.map((apartment) => (
                    <ApartmentCard key={apartment.id} apartment={apartment} />
                ))}
            </div>
        </div>
    );
}
