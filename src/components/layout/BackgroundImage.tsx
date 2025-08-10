import { useEffect, useState } from "react";
import { useScrollFade } from "@/hooks/useScrollFade";

export default function BackgroundImage() {
  const [loaded, setLoaded] = useState(false);
  const opacity = useScrollFade(300); // Customize fadeEnd if needed

  useEffect(() => {
    const img = new Image();
    img.src = "/images/mountains-markus-spiske-desktop.webp";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div className="relative w-full desktop:h-[750px] ">
      {/* Fixed background image */}
      <div
        className="fixed top-32 left-0 w-full h-[650px] tablet:h-[550px] desktop:h-[800px] -z-10 overflow-hidden transition-opacity duration-500 ease-out"
        style={{ opacity }}
      >
        {/* Blur-up placeholder */}

        {!loaded && (
          <div
            className="absolute inset-0 bg-cover bg-center blur-xl scale-105 transition-opacity duration-500"
            style={{
              backgroundImage:
                "url('/images/mountains-markus-spiske-mobile.webp')",
            }}
          />
        )}

        {/* Background image with lazy loading and opacity */}
        <img
          src="/images/mountains-markus-spiske-mobile.webp"
          srcSet="/images/mountains-markus-spiske-mobile.webp 748w, /images/mountains-markus-spiske-tablet.webp 1024w, /images/mountains-markus-spiske-desktop.webp 1440w"
          sizes="(min-width: 1440px) 1440px, (min-width: 748px) 1024px, 100vw"
          width={748}
          height={650}
          alt="Bavarian Mountain Peaks with blue sky by Markus Spiske"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0  bg-light/80  dark:bg-black/75 " />
      </div>
    </div>
  );
}
