"use client";
import React, { useState } from "react";
import Container from "@/components/Layout/Container";
import CustomDropdown from "../SelectType";
import { SideTopList } from "../TopList/sideTopList";
import { CenterTopList } from "../TopList/centerTopList";
import { CenterVideoTopList } from "../TopList/centerVideoTopList";

export const VideoOverview = () => {
  const [position, setPosition] = useState("bottom");
  return (
    <>
      <div className="pt-10">
        <Container>
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.7295 2H9.26953V6.36H14.7295V2Z" fill="#0ABFAC" />
              <path
                d="M16.2305 2V6.36H21.8705C21.3605 3.61 19.3305 2.01 16.2305 2Z"
                fill="#0ABFAC"
              />
              <path
                d="M2 7.85986V16.1899C2 19.8299 4.17 21.9999 7.81 21.9999H16.19C19.83 21.9999 22 19.8299 22 16.1899V7.85986H2ZM14.44 16.1799L12.36 17.3799C11.92 17.6299 11.49 17.7599 11.09 17.7599C10.79 17.7599 10.52 17.6899 10.27 17.5499C9.69 17.2199 9.37 16.5399 9.37 15.6599V13.2599C9.37 12.3799 9.69 11.6999 10.27 11.3699C10.85 11.0299 11.59 11.0899 12.36 11.5399L14.44 12.7399C15.21 13.1799 15.63 13.7999 15.63 14.4699C15.63 15.1399 15.2 15.7299 14.44 16.1799Z"
                fill="#0ABFAC"
              />
              <path
                d="M7.76988 2C4.66988 2.01 2.63988 3.61 2.12988 6.36H7.76988V2Z"
                fill="#0ABFAC"
              />
            </svg>
            <span className="font-semibold text-2xl leading-7">Video</span>
            <CustomDropdown
              options={[
                { value: "bottom", label: "Bottom" },
                { value: "top", label: "Top" },
              ]}
              initialValue="bottom"
              onValueChange={setPosition}
            />
          </div>
          <div className="grid grid-cols-[23%_50%_23%] gap-7">
            <SideTopList />
            <CenterVideoTopList />
            <SideTopList />
          </div>
        </Container>
      </div>
    </>
  );
};
