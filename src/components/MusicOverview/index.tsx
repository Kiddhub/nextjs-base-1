"use client";
import React, { useState } from "react";
import Container from "@/components/Layout/Container";
import CustomDropdown from "../SelectType";
import { SideTopList } from "../TopList/sideTopList";
import { CenterTopList } from "../TopList/centerTopList";

export const MusicOverview = () => {
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
              <path
                d="M20.8904 5.17958V16.4796C20.8904 18.4596 19.2804 20.0696 17.3004 20.0696C15.3304 20.0696 13.7104 18.4596 13.7104 16.4796C13.7104 14.5096 15.3304 12.8996 17.3004 12.8996C18.1404 12.8996 18.8904 13.1896 19.5004 13.6696V7.71958L10.2904 10.3396V18.4096C10.2904 20.3896 8.67035 21.9996 6.70035 21.9996C4.72035 21.9996 3.11035 20.3896 3.11035 18.4096C3.11035 16.4396 4.72035 14.8296 6.70035 14.8296C7.53035 14.8296 8.28035 15.1196 8.89035 15.5896V6.74958C8.89035 5.27958 9.78035 4.13958 11.1904 3.75958L16.9704 2.17958C18.1404 1.85958 19.1304 1.96958 19.8304 2.50958C20.5403 3.03958 20.8904 3.93958 20.8904 5.17958Z"
                fill="#0ABFAC"
              />
            </svg>
            <span className="font-semibold text-2xl leading-7">Music</span>
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
              <SideTopList/>
              <CenterTopList/>
              <SideTopList/>
        </div>
        </Container>
      </div>
    </>
  );
};
