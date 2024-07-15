import Image from "next/image";
import avatar from "@assets/image/avatar.svg";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { list_artist } from "@/mocks";
export const SideTopList = () => {
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
      <div className="flex gap-2 text-xl leading-6 text-dark-500 font-semibold">
        <span>Artist</span>
        <span>30</span>
      </div>
      <div
        ref={scrollRef}
        className="max-h-[600px] overflow-y-auto no-scrollbar"
      >
        {list_artist.slice(0, 30).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[10%_90%] items-center justify-center"
          >
            <span className="text-lg leading-6 text-grey-400">{index + 1}</span>
            <div className="flex gap-2 items-center pt-3">
              <Image src={avatar} alt="avatar" width={48} height={48} />
              <div className="flex flex-col">
                <span className="text-base font-semibold text-dark-500">
                  {item.name}
                </span>
                <div className="flex gap-2">
                  <span className="text-sm text-grey-400">
                    Lasts: {item.lasts}
                  </span>
                  <span className="text-sm text-grey-400">
                    Peaks: {item.Peaks}
                  </span>
                  <span className="text-sm text-grey-400">
                    Weeks: {item.weeks}
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
