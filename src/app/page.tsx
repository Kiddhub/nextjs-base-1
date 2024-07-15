import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { MusicOverview } from "@/components/MusicOverview";
import { SlideImage } from "@/components/SlideImage";
import { VideoOverview } from "@/components/VideoOverview";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <main className='flex min-h-screen max-w-[100vw] flex-col overflow-hidden' style={{ backgroundColor: '#F8F8F8' }}>
        <Header />
        <MusicOverview/>
        <Banner/>
        <SlideImage/>
        <SlideImage/>
        <VideoOverview/>
        <SlideImage/>
      </main>
    </Suspense>
  );
}
