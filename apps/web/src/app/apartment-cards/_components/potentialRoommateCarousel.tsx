"use client";

import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ContactRoommate } from "./contactRoommate";

interface Roommate {
    name: string;
    details: string;
    image: string;
}

interface PotentialRoommateProps {
    roommates: Roommate[];
}

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const PotentialRoommateCarousel: React.FC<PotentialRoommateProps> = ({ roommates }) => {
    const SampleNextArrow: React.FC<ArrowProps> = React.memo(({ onClick }) => (
        <div className="slick-arrow slick-next" onClick={onClick}>
            <svg
                className="h-6 w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </div>
    ));

    const SamplePrevArrow: React.FC<ArrowProps> = React.memo(({ onClick }) => (
        <div className="slick-arrow slick-prev" onClick={onClick}>
            <svg
                className="h-6 w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </div>
    ));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <Slider {...settings}>
            {roommates.slice(0, 5).map((roommate, index) => (
                <div key={index}>
                    <img
                        src={roommate.image}
                        alt={`Roommate ${index}`}
                        className="h-auto max-w-full rounded-lg shadow-lg"
                    />
                    <div className="relative bottom-0 flex w-full justify-center px-4 py-2">
                        <ContactRoommate roommate={roommate} />
                    </div>
                </div>
            ))}
            {roommates.length > 5 && (
                <div className="flex h-full items-center justify-center">
                    <p className="text-xl font-semibold">View Apartment Details for Full List!</p>
                </div>
            )}
        </Slider>
    );
};

export default PotentialRoommateCarousel;
