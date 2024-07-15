import { list_music } from "@/mocks";
import { Button } from "../ui/button";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import avatar from "@assets/image/video.svg";
export const CenterVideoTopList = () => {
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
              <div className="relative">
                <Image src={avatar} alt={music.name} width={142} height={80} />
                <div className="absolute bottom-0 right-0 bg-black text-white text-xs p-1 rounded-sm">
                  03:30
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{music.name}</span>
                <span className="text-gray-500">{music.artist}</span>
                <div className="flex gap-3">
                  <span className="flex gap-2 items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.1663 6.09995C12.6263 3.67995 10.373 2.28662 7.99967 2.28662C6.81301 2.28662 5.65967 2.63329 4.60634 3.27995C3.55301 3.93329 2.60634 4.88662 1.83301 6.09995C1.16634 7.14662 1.16634 8.84662 1.83301 9.89329C3.37301 12.32 5.62634 13.7066 7.99967 13.7066C9.18634 13.7066 10.3397 13.36 11.393 12.7133C12.4463 12.06 13.393 11.1066 14.1663 9.89329C14.833 8.85329 14.833 7.14662 14.1663 6.09995ZM7.99967 10.6933C6.50634 10.6933 5.30634 9.48662 5.30634 7.99995C5.30634 6.51329 6.50634 5.30662 7.99967 5.30662C9.49301 5.30662 10.693 6.51329 10.693 7.99995C10.693 9.48662 9.49301 10.6933 7.99967 10.6933Z"
                        fill="#A1ABB3"
                      />
                      <path
                        d="M7.99961 6.09326C6.95294 6.09326 6.09961 6.94659 6.09961 7.99993C6.09961 9.04659 6.95294 9.89993 7.99961 9.89993C9.04628 9.89993 9.90628 9.04659 9.90628 7.99993C9.90628 6.95326 9.04628 6.09326 7.99961 6.09326Z"
                        fill="#A1ABB3"
                      />
                    </svg>
                    150K views
                  </span>
                  <span className="flex gap-2 items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99967 1.3335C4.32634 1.3335 1.33301 4.32683 1.33301 8.00016C1.33301 11.6735 4.32634 14.6668 7.99967 14.6668C11.673 14.6668 14.6663 11.6735 14.6663 8.00016C14.6663 4.32683 11.673 1.3335 7.99967 1.3335ZM10.8997 10.3802C10.8063 10.5402 10.6397 10.6268 10.4663 10.6268C10.3797 10.6268 10.293 10.6068 10.213 10.5535L8.14634 9.32016C7.63301 9.0135 7.25301 8.34016 7.25301 7.74683V5.0135C7.25301 4.74016 7.47967 4.5135 7.75301 4.5135C8.02634 4.5135 8.25301 4.74016 8.25301 5.0135V7.74683C8.25301 7.98683 8.45301 8.34016 8.65967 8.46016L10.7263 9.6935C10.9663 9.8335 11.0463 10.1402 10.8997 10.3802Z"
                        fill="#A1ABB3"
                      />
                    </svg>
                    1 days ago
                  </span>
                </div>
              </div>
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
