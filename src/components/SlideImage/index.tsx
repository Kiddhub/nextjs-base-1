import Image from "next/image";
import Container from "../Layout/Container";
import song from "@assets/image/song.svg";
import { list_song_release } from "@/mocks";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { ListScroll } from "./ListScroll";
// import list_song_release from "@/mocks";
export const SlideImage = () => {
  return (
    <div className="">
      <Container className="bg-primary rounded-xl p-4">
        <div className="flex gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.57963 9.42026C2.49963 9.42026 2.40963 9.41026 2.32963 9.38026C1.93963 9.24026 1.73963 8.81026 1.86963 8.42026C2.53963 6.54026 3.69963 4.89026 5.24963 3.64026C5.56963 3.38026 6.03963 3.43026 6.29963 3.75026C6.55963 4.07026 6.50963 4.54026 6.18963 4.81026C4.86963 5.88026 3.85963 7.30026 3.28963 8.92026C3.17963 9.23026 2.88963 9.42026 2.57963 9.42026Z"
              fill="#0ABFAC"
            />
            <path
              d="M2.58 16.08C2.27 16.08 1.98 15.89 1.87 15.58C1.46 14.42 1.25 13.21 1.25 12C1.25 11.59 1.59 11.25 2 11.25C2.41 11.25 2.75 11.59 2.75 12C2.75 13.04 2.93 14.08 3.29 15.08C3.43 15.47 3.22 15.9 2.83 16.04C2.75 16.07 2.66 16.08 2.58 16.08Z"
              fill="#0ABFAC"
            />
            <path
              d="M11.9996 22.7496C10.9396 22.7496 9.88962 22.5896 8.86962 22.2796C8.46962 22.1596 8.24962 21.7396 8.36962 21.3396C8.48962 20.9396 8.90962 20.7196 9.30962 20.8396C10.1796 21.1096 11.0896 21.2396 11.9996 21.2396C17.0996 21.2396 21.2496 17.0896 21.2496 11.9896C21.2496 11.4696 21.1996 10.9296 21.0996 10.3596C21.0296 9.94955 21.2996 9.55955 21.7096 9.48955C22.1096 9.41955 22.5096 9.68955 22.5796 10.0996C22.6996 10.7596 22.7596 11.3796 22.7596 11.9996C22.7496 17.9296 17.9296 22.7496 11.9996 22.7496Z"
              fill="#0ABFAC"
            />
            <path
              d="M5.72021 20.5001C5.55021 20.5001 5.39021 20.4501 5.25021 20.3301C4.68021 19.8701 4.22021 19.4301 3.83021 18.9801C3.56021 18.6701 3.60021 18.1901 3.91021 17.9201C4.23021 17.6501 4.70021 17.6901 4.97021 18.0001C5.30021 18.3801 5.70021 18.7601 6.19021 19.1601C6.51021 19.4201 6.56021 19.8901 6.30021 20.2101C6.16021 20.4001 5.94021 20.5001 5.72021 20.5001Z"
              fill="#0ABFAC"
            />
            <path
              d="M20.2404 7.09C20.0004 7.09 19.7704 6.98 19.6204 6.76C17.9004 4.25 15.0404 2.75 12.0004 2.75C11.0904 2.75 10.1804 2.88 9.3104 3.15C8.9204 3.27 8.5004 3.05 8.3704 2.65C8.2404 2.25 8.4704 1.83 8.8704 1.71C9.8904 1.41 10.9404 1.25 12.0004 1.25C15.5404 1.25 18.8504 3 20.8604 5.92C21.0904 6.26 21.0104 6.73 20.6704 6.96C20.5404 7.05 20.3904 7.09 20.2404 7.09Z"
              fill="#0ABFAC"
            />
            <path
              d="M16.03 6.50046C15.7 6.25046 15.1 6.00046 14.14 6.26046L10.95 7.12046C10.03 7.38046 9.43 8.16046 9.43 9.12046V10.7605V13.3405C9.17 13.2405 8.89 13.1805 8.59 13.1805C7.3 13.1805 6.25 14.2305 6.25 15.5205C6.25 16.8105 7.3 17.8605 8.59 17.8605C9.87 17.8605 10.9 16.8305 10.92 15.5605C10.92 15.5505 10.93 15.5405 10.93 15.5205V11.3305L15.25 10.1505V12.2805C14.99 12.1805 14.71 12.1205 14.41 12.1205C13.12 12.1205 12.07 13.1705 12.07 14.4605C12.07 15.7505 13.12 16.8005 14.41 16.8005C15.7 16.8005 16.75 15.7505 16.75 14.4605V9.17046V8.25046C16.75 7.45046 16.51 6.86046 16.03 6.50046ZM8.59 16.3605C8.13 16.3605 7.75 15.9805 7.75 15.5205C7.75 15.0605 8.13 14.6805 8.59 14.6805C9.05 14.6805 9.43 15.0605 9.43 15.5205C9.43 15.9805 9.05 16.3605 8.59 16.3605ZM14.41 15.3005C13.95 15.3005 13.57 14.9205 13.57 14.4605C13.57 14.0005 13.95 13.6205 14.41 13.6205C14.87 13.6205 15.25 14.0005 15.25 14.4605C15.25 14.9205 14.87 15.3005 14.41 15.3005Z"
              fill="#0ABFAC"
            />
          </svg>

          <span className="font-semibold text-dark-500 text-2xl leading-7">
            New song releases
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
              stroke="#52616B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <ListScroll/>
      </Container>
    </div>
  );
};
