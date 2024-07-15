import Image from "next/image";
import Container from "../Layout/Container";
import banner from "@assets/image/image.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const Banner = () => {
  return (
    <div className="py-10">
      <Container>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image src={banner} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={banner} alt="" />
            </CarouselItem>
            <CarouselItem>
              <Image src={banner} alt="" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </Container>
    </div>
  );
};
