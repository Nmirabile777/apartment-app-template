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
    lat: 45.679218,
    lng: -97.592295,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    ],
    description:
      "This is a description of Apartment 1. It has all the amenities you need!",
    url: "https://www.example.com/apartment1",
    dateListed: "2021-01-09",
    roommates: [
      {
        name: "Roommate A",
        details: "Description of Roommate A",
        image:
          "https://media.istockphoto.com/id/1498250886/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=DGsRdT5klN5dRkUidD-J1N07eOqmdjtdgaELTp0ZTa8=",
      },
      {
        name: "Roommate B",
        details: "Description of Roommate B",
        image:
          "https://media.istockphoto.com/id/1498250877/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=N7g2asUCnI4XtzT6VgTZenR94M6w3DYyPLMcmwoxSCA=",
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
    description:
      "This is a description of Apartment 2. It has all the amenities you need!",
    url: "https://www.example.com/apartment2",
    dateListed: "2022-02-24",
    roommates: [
      {
        name: "Roommate A",
        details: "Description of Roommate A",
        image:
          "https://media.istockphoto.com/id/1498250886/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=DGsRdT5klN5dRkUidD-J1N07eOqmdjtdgaELTp0ZTa8=",
      },
      {
        name: "Roommate B",
        details: "Description of Roommate B",
        image:
          "https://media.istockphoto.com/id/1498250877/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=N7g2asUCnI4XtzT6VgTZenR94M6w3DYyPLMcmwoxSCA=",
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
    description:
      "This is a description of Apartment 3. It has all the amenities you need!",
    url: "https://www.example.com/apartment3",
    dateListed: "2022-06-19",
    roommates: [
      {
        name: "Roommate A",
        details: "Description of Roommate A",
        image:
          "https://media.istockphoto.com/id/1498250886/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=DGsRdT5klN5dRkUidD-J1N07eOqmdjtdgaELTp0ZTa8=",
      },
      {
        name: "Roommate B",
        details: "Description of Roommate B",
        image:
          "https://media.istockphoto.com/id/1498250877/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=N7g2asUCnI4XtzT6VgTZenR94M6w3DYyPLMcmwoxSCA=",
      },
    ],
    favorited: false,
    hidden: false,
  },
  {
    id: 4,
    name: "Apartment 4",
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
    description:
      "This is a description of Apartment 4. It has all the amenities you need!",
    url: "https://www.example.com/apartment4",
    dateListed: "2021-01-09",
    roommates: [
      {
        name: "Roommate A",
        details: "Description of Roommate A",
        image:
          "https://media.istockphoto.com/id/1498250886/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=DGsRdT5klN5dRkUidD-J1N07eOqmdjtdgaELTp0ZTa8=",
      },
      {
        name: "Roommate B",
        details: "Description of Roommate B",
        image:
          "https://media.istockphoto.com/id/1498250877/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=N7g2asUCnI4XtzT6VgTZenR94M6w3DYyPLMcmwoxSCA=",
      },
    ],
    favorited: false,
    hidden: false,
  },
  {
    id: 5,
    name: "Apartment 5",
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
    description:
      "This is a description of Apartment 5. It has all the amenities you need!",
    url: "https://www.example.com/apartment5",
    dateListed: "2021-01-09",
    roommates: [
      {
        name: "Roommate A",
        details: "Description of Roommate A",
        image:
          "https://media.istockphoto.com/id/1498250886/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=DGsRdT5klN5dRkUidD-J1N07eOqmdjtdgaELTp0ZTa8=",
      },
      {
        name: "Roommate B",
        details: "Description of Roommate B",
        image:
          "https://media.istockphoto.com/id/1498250877/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=N7g2asUCnI4XtzT6VgTZenR94M6w3DYyPLMcmwoxSCA=",
      },
    ],
    favorited: false,
    hidden: false,
  },
  {
    id: 6,
    name: "Apartment 6",
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
    description:
      "This is a description of Apartment 6. It has all the amenities you need!",
    url: "https://www.example.com/apartment6",
    dateListed: "2021-01-09",
    roommates: [
      {
        name: "Roommate A",
        details: "Description of Roommate A",
        image:
          "https://media.istockphoto.com/id/1498250886/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=DGsRdT5klN5dRkUidD-J1N07eOqmdjtdgaELTp0ZTa8=",
      },
      {
        name: "Roommate B",
        details: "Description of Roommate B",
        image:
          "https://media.istockphoto.com/id/1498250877/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=N7g2asUCnI4XtzT6VgTZenR94M6w3DYyPLMcmwoxSCA=",
      },
    ],
    favorited: false,
    hidden: false,
  },
];