import Image from "next/image";

type PhoneScreenshotProps = {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

/** Brand artwork showcase — landscape-friendly frame for W88 Game creatives */
export default function PhoneScreenshot({
  src,
  alt,
  title,
  width,
  height,
  priority = false,
  className = "",
}: PhoneScreenshotProps) {
  return (
    <figure className={`mx-auto w-full max-w-[560px] ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-[#FFC933]/30 bg-[#090807] p-1 shadow-[0_28px_70px_rgba(0,0,0,0.55)] ring-1 ring-[#FFC933]/20">
        <div className="overflow-hidden rounded-xl bg-black">
          <Image
            src={src}
            alt={alt}
            title={title}
            width={width}
            height={height}
            className="h-auto w-full object-cover"
            priority={priority}
            quality={85}
            sizes="(max-width: 640px) 100vw, 560px"
          />
        </div>
      </div>
      <figcaption className="sr-only">{title}</figcaption>
    </figure>
  );
}
