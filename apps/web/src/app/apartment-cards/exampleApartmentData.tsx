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

export const apartments: Apartment[] = [
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
        lat: 42.3601,
        lng: -71.0589,
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
        bathrooms: 1,
        sqft: 1215,
        price: 2164,
        address: "138 Main St",
        city: "Cityville",
        state: "ST",
        zip: 60063,
        lat: 42.3467,
        lng: -71.0972,
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
        bedrooms: 2,
        bathrooms: 3,
        sqft: 519,
        price: 3350,
        address: "1074 Main St",
        city: "Cityville",
        state: "ST",
        zip: 57262,
        lat: 42.3736,
        lng: -71.1097,
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

    {
        id: 4,
        name: "Apartment 4",
        bedrooms: 4,
        bathrooms: 4,
        sqft: 2521,
        price: 5412,
        address: "1334 Main St",
        city: "Cityville",
        state: "ST",
        zip: 55068,
        lat: 42.3389,
        lng: -71.0912,
        images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        ],
        description: "This is a description of Apartment 4. It has all the amenities you need!",
        url: "https://www.example.com/apartment4",
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
        id: 5,
        name: "Apartment 5",
        bedrooms: 3,
        bathrooms: 5,
        sqft: 2521,
        price: 2423,
        address: "1334 Main St",
        city: "Cityville",
        state: "ST",
        zip: 55068,
        lat: 42.3496,
        lng: -71.0997,
        images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        ],
        description: "This is a description of Apartment 5. It has all the amenities you need!",
        url: "https://www.example.com/apartment5",
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
        id: 6,
        name: "Apartment 6",
        bedrooms: 2,
        bathrooms: 6,
        sqft: 2521,
        price: 7652,
        address: "1334 Main St",
        city: "Cityville",
        state: "ST",
        zip: 55068,
        lat: 42.3679,
        lng: -71.0708,
        images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        ],
        description: "This is a description of Apartment 6. It has all the amenities you need!",
        url: "https://www.example.com/apartment6",
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
        id: 7,
        name: "Apartment 7",
        bedrooms: 6,
        bathrooms: 7,
        sqft: 2521,
        price: 3213,
        address: "1334 Main St",
        city: "Cityville",
        state: "ST",
        zip: 55068,
        lat: 42.3473,
        lng: -71.0751,
        images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        ],
        description: "This is a description of Apartment 6. It has all the amenities you need!",
        url: "https://www.example.com/apartment6",
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
        id: 8,
        name: "Apartment 8",
        bedrooms: 1,
        bathrooms: 8,
        sqft: 2521,
        price: 1234,
        address: "1334 Main St",
        city: "Cityville",
        state: "ST",
        zip: 55068,
        lat: 42.3588,
        lng: -71.0567,
        images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        ],
        description: "This is a description of Apartment 6. It has all the amenities you need!",
        url: "https://www.example.com/apartment6",
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
        id: 9,
        name: "Apartment 9",
        bedrooms: 2,
        bathrooms: 9,
        sqft: 2521,
        price: 4356,
        address: "1334 Main St",
        city: "Cityville",
        state: "ST",
        zip: 55068,
        lat: 42.3656,
        lng: -71.0526,
        images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        ],
        description: "This is a description of Apartment 6. It has all the amenities you need!",
        url: "https://www.example.com/apartment6",
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
        id: 10,
        name: "Apartment 10",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 2521,
        price: 9263,
        address: "1334 Main St",
        city: "Cityville",
        state: "ST",
        zip: 55068,
        lat: 42.3782,
        lng: -71.0602,
        images: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        ],
        description: "This is a description of Apartment 6. It has all the amenities you need!",
        url: "https://www.example.com/apartment6",
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
];
