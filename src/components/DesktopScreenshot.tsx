import Image from "next/image";

type DesktopScreenshotProps = {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  priority?: boolean;
};

export default function DesktopScreenshot({
  src,
  alt,
  title,
  width,
  height,
  priority = false,
}: DesktopScreenshotProps) {
  return (
    <figure className="mx-auto w-full max-w-2xl">
      <div className="rounded-[1.4rem] border-[10px] border-[#2A2420] bg-[#090807] p-2 shadow-[0_28px_70px_rgba(0,0,0,0.55)] ring-1 ring-[#FFC933]/35">
        <div className="relative mx-auto aspect-video max-h-[390px] overflow-hidden rounded-lg bg-black">
          <Image
            src={src}
            alt={alt}
            title={title}
            width={width}
            height={height}
            className="h-full w-full object-contain"
            priority={priority}
            quality={85}
            sizes="(max-width: 768px) 92vw, 672px"
          />
        </div>
      </div>
      <div aria-hidden="true" className="mx-auto h-12 w-24 bg-[#2A2420]" />
      <div
        aria-hidden="true"
        className="mx-auto h-3 w-52 rounded-full bg-[#40372F] shadow-lg"
      />
      <figcaption className="sr-only">{title}</figcaption>
    </figure>
  );
}
