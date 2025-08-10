export default function ApplicationPhoto() {
  return (
    <img
      src="/images/image-profile-cm-mobile.webp"
      srcSet="/images/image-profile-cm-mobile.webp 300w, /images/image-profile-cm-tablet.webp 600w, /images/image-profile-cm-desktop.webp 750w"
      sizes="(min-width: 1440px) 445px, (min-width: 748px) 320px, 200px"
      width={445} // any consistent pair that matches your aspect ratio is fine
      height={630} // (example if all variants share this ratio)
      alt="Portrait..."
      className="w-full h-auto object-cover rounded-2xl shadow-xl"
      loading="lazy"
    />
  );
}
