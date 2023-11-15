"use client";

import React from "react";

import Slider from "react-slick";

interface ArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SampleNextArrow: React.FC<ArrowProps> = React.memo(({ onClick }) => (
    <div className={` z-10`} onClick={onClick}>
        <svg
            className="h-6 w-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </div>
));

const SamplePrevArrow: React.FC<ArrowProps> = React.memo(({ onClick }) => (
    <div className={`z-10`} onClick={onClick}>
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

const PictureCarousel: React.FC<{ images: string[] }> = ({ images }) => {
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
            {images.map((img, index) => (
                <div key={index} className="flex w-full items-center justify-center">
                    <img
                        src={img}
                        alt={`Slide ${index}`}
                        className="h-auto w-full rounded-lg shadow-lg"
                    />
                </div>
            ))}
        </Slider>
    );
};

export default PictureCarousel;
