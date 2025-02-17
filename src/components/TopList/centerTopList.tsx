import { list_music } from "@/mocks";
import { Button } from "../ui/button";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import avatar from "@assets/image/trending.svg";
export const CenterTopList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showGradient, setShowGradient] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      setShowGradient(scrollTop + clientHeight < scrollHeight);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <div className="relative bg-primary rounded-xl p-2">
      <div className="flex gap-2 text-xl leading-6 text-dark-500 font-semibold items-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4327_11626)">
            <path
              d="M24.4402 16.3936C24.1194 12.2177 22.1752 9.60088 20.46 7.29164C18.8717 5.1538 17.5 3.30766 17.5 0.584333C17.5 0.365583 17.3775 0.165645 17.1833 0.0654028C16.9884 -0.035441 16.7543 -0.0189254 16.5771 0.109809C14.0011 1.95311 11.8518 5.05985 11.101 8.02413C10.5798 10.0879 10.5108 12.4079 10.5011 13.9402C8.12224 13.4321 7.58335 9.87372 7.57766 9.83494C7.55087 9.65037 7.4381 9.48975 7.27404 9.40204C7.10828 9.31547 6.91343 9.30918 6.74538 9.39236C6.62063 9.45273 3.68342 10.9452 3.51252 16.904C3.50055 17.1022 3.5 17.301 3.5 17.4998C3.5 23.2889 8.21051 27.9991 14 27.9991C14.008 27.9997 14.0165 28.0008 14.0234 27.9991C14.0256 27.9991 14.0279 27.9991 14.0307 27.9991C19.806 27.9826 24.5 23.2787 24.5 17.4998C24.5 17.2087 24.4402 16.3936 24.4402 16.3936ZM14 26.8325C12.07 26.8325 10.5 25.1601 10.5 23.1044C10.5 23.0343 10.4995 22.9637 10.5045 22.8771C10.5279 22.0101 10.6926 21.4183 10.8731 21.0247C11.2115 21.7515 11.8165 22.4197 12.7992 22.4197C13.1216 22.4197 13.3825 22.1588 13.3825 21.8364C13.3825 21.0059 13.3996 20.0478 13.6064 19.1831C13.7904 18.4163 14.2302 17.6006 14.7873 16.9467C15.0351 17.7955 15.5182 18.4824 15.9899 19.1529C16.665 20.1121 17.3628 21.1038 17.4853 22.7951C17.4927 22.8953 17.5001 22.9961 17.5001 23.1044C17.5 25.1601 15.93 26.8325 14 26.8325Z"
              fill="#FF7008"
            />
          </g>
          <defs>
            <clipPath id="clip0_4327_11626">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span>Hot trending</span>
        <Button variant="link">Today</Button>
        <Button variant="link">Week</Button>
        <Button variant="link">Month</Button>
      </div>
      <div
        ref={scrollRef}
        className="max-h-[600px] overflow-y-auto no-scrollbar"
      >
        {list_music.map((music, index) => (
          <div
            key={index}
            className="grid grid-cols-[10%_90%] items-center justify-center"
          >
            <span className="text-lg leading-6 text-grey-400">{index + 1}</span>
            <div key={music.id} className="flex items-center gap-2 mt-4">
              <div className="w-16 h-16 relative">
                <Image
                  src={avatar}
                  alt={music.name}
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{music.name}</span>
                <span className="text-gray-500">{music.artist}</span>
              </div>
              <span className="ml-auto text-gray-500">{music.duration}</span>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-2">
          <Button className="flex gap-1 bg-transparent text-grey-400 hover:bg-transparent hover:text-blue-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.2002 11.7H14.2002"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.7002 14.2V9.19995"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            More
          </Button>
        </div>
      </div>
      {showGradient && (
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-primary"></div>
      )}
    </div>
  );
};
