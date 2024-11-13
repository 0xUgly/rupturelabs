import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const images = Array.from({ length: 22 }, (_, i) => `/Media/${i + 1}.png`);

const ImageCard = ({ src }: { src: string }) => {
  return (
    <div className="relative w-64 h-64 m-2 overflow-hidden rounded-xl">
      <Image
        src={src}
        alt="Gallery image"
        fill
        className="object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
};

export function ImageMarqueeDemo() {
  const firstRow = images.slice(0, images.length / 2);
  const secondRow = images.slice(images.length / 2);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((src, index) => (
          <ImageCard key={`first-${index}`} src={src} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((src, index) => (
          <ImageCard key={`second-${index}`} src={src} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  );
}