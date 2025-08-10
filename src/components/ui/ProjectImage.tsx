type ProjectImageProps = {
  image: string; // desktop/tablet file (e.g. "todo_app.webp")
  image_mobile: string; // mobile file (e.g. "todo_app_mobile.webp")
  alt: string;
  width?: number; // default 475
  height?: number; // default 348
};

export function ProjectImage({
  image,
  image_mobile,
  alt,
  width = 475,
  height = 348,
}: ProjectImageProps) {
  return (
    <img
      className="h-full w-full object-cover scale-100 backface-hidden desktop:transition-all desktop:duration-500 desktop:group-hover:scale-110 desktop:group-hover:blur-sm"
      src={`/images/projects/${image_mobile}`}
      srcSet={`/images/projects/${image_mobile} 345w, /images/projects/${image} 475w`}
      sizes="(min-width: 1280px) 475px, 313px"
      alt={alt}
      loading="lazy"
      width={width}
      height={height}
    />
  );
}
