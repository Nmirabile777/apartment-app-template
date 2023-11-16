import React from "react";
import PopUpApartmentCard from "@/app/google-map/_components/popUpApartmentCard";

type FancyInfoWindowContentProps = {
  title: string;
  message: string;
  onButtonClick: () => void;
};

const exampleApartment = {
  title: "Charming Downtown Studio",
  description:
    "A cozy and well-lit studio apartment in the heart of the city, perfect for singles or couples. Close to public transport and local amenities.",
  price: "$1,200/month",
  bedrooms: 1,
  bathrooms: 1,
  squareFeet: "550 sqft",
  address: "123 City St, Downtown, NY",
  listingAgency: "Blackrock Inc",
  images: [
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  ],
  potentialRoommates: [
    {
      name: "Joe Biben",
      details: "Mans the president, pretty cool, also very sleepy",
      image:
        "https://media.istockphoto.com/id/1498250886/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=DGsRdT5klN5dRkUidD-J1N07eOqmdjtdgaELTp0ZTa8=",
    },
    {
      name: "Joe Biben",
      details: "Mans the president, pretty cool, also very sleepy",
      image:
        "https://media.istockphoto.com/id/1498250877/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=N7g2asUCnI4XtzT6VgTZenR94M6w3DYyPLMcmwoxSCA=",
    },
    {
      name: "Joe Biben",
      details: "Mans the president, pretty cool, also very sleepy",
      image:
        "https://media.istockphoto.com/id/1498250874/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=_QwQM7_WAzzlVOgqGkmKCWYBdm-wZq75SXU1AlwxFSw=",
    },
    {
      name: "Joe Biben",
      details: "Mans the president, pretty cool, also very sleepy",
      image:
        "https://media.istockphoto.com/id/1494376830/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=MIhKRQ66zPAfj7oel8f-QBuNNS1ArgsXF4rQcq3MmiM=",
    },
    {
      name: "Joe Biben",
      details: "Mans the president, pretty cool, also very sleepy",
      image:
        "https://media.istockphoto.com/id/1498250873/photo/african-american-man-in-a-wheelchair.jpg?s=2048x2048&w=is&k=20&c=7-OwNyck7_PQWgIOy5_fWD3sojwnTSMQRlJWsxj1vL4=",
    },
    {
      name: "Joe Biben",
      details: "Mans the president, pretty cool, also very sleepy",
      image:
        "https://media.istockphoto.com/id/1498250886/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=DGsRdT5klN5dRkUidD-J1N07eOqmdjtdgaELTp0ZTa8=",
    },
    {
      name: "Joe Biben",
      details: "Mans the president, pretty cool, also very sleepy",
      image:
        "https://media.istockphoto.com/id/1498250886/photo/disabled-black-man-using-smartphone-at-home.jpg?s=2048x2048&w=is&k=20&c=DGsRdT5klN5dRkUidD-J1N07eOqmdjtdgaELTp0ZTa8=",
    },
  ],
};

export const FancyInfoWindowContent: React.FC<FancyInfoWindowContentProps> = ({
  title,
  message,
  onButtonClick,
}) => {
  return (
    <div className="flex-grow">
      <PopUpApartmentCard apartment={exampleApartment} />
    </div>
  );
};
