"use client";
import * as React from "react";
import Image from "next/image";
import song from "@assets/image/song.svg";
import { useRef, useState } from "react";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: "Vladimir Malyavko",
    art: song,
  },
  {
    artist: "Vladimir Malyavko",
    art: song,
  },
  {
    artist: "Vladimir Malyavko",
    art: song,
  },
  {
    artist: "Vladimir Malyavko",
    art: song,
  },
  {
    artist: "Vladimir Malyavko",
    art: song,
  },
  {
    artist: "Vladimir Malyavko",
    art: song,
  },
  {
    artist: "Vladimir Malyavko",
    art: song,
  },
  {
    artist: "Vladimir Malyavko",
    art: song,
  },
  {
    artist: "Vladimir Malyavko",
    art: song,
  },
  {
    artist: "Vladimir Malyavko",
    art: song,
  },
  {
    artist: "Vladimir Malyavko",
    art: song,
  },
  {
    artist: "Vladimir Malyavko",
    art: song,
  },
  {
    artist: "Vladimir Malyavko",
    art: song,
  },
  // Add more artworks here if needed
];

export function ListScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const newPosition = Math.max(scrollPosition - 220, 0);
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const newPosition = Math.min(
        scrollPosition + 220,
        scrollContainerRef.current.scrollWidth -
          scrollContainerRef.current.clientWidth
      );
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <div
        className="whitespace-nowrap rounded-md overflow-hidden no-scrollbar"
        ref={scrollContainerRef}
        style={{
          display: "flex",
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <div className="flex w-max space-x-4 p-4">
          {works.map((artwork, index) => (
            <figure key={index} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  width={220}
                  height={220}
                />
              </div>
              <figcaption className="pt-2 flex flex-col">
                <span className="font-semibold text-base text-dark-500">
                  I Love You 3000
                </span>
                <span className="font-normal text-sm text-grey-400">
                  Stephanie Poetri
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10  "
        onClick={scrollRight}
      >
        <svg
          width="82"
          height="104"
          viewBox="0 0 82 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_4327_28518)">
            <rect
              x="30"
              y="26"
              width="44"
              height="44"
              rx="22"
              fill="white"
              shape-rendering="crispEdges"
            />
            <path
              d="M54.4297 41.9297L60.4997 47.9997L54.4297 54.0697"
              stroke="#1A75FF"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M43.5 48H60.33"
              stroke="#1A75FF"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_4327_28518"
              x="0"
              y="0"
              width="104"
              height="104"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4327_28518"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4327_28518"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>
    </div>
  );
}
