import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "src/assets/images/Ad1.webp" },
  { url: "src/assets/images/ad2.webp" },
  { url: "src/assets/images/ad3.webp" },
  { url: "src/assets/images/ad4.webp" },
  { url: "src/assets/images/ad5.webp" },
];

export const Display_Slider = () => {
  return (
    <SimpleImageSlider
      width={600}
      autoPlay={true}
      autoPlayDelay={3.0}
      height={300}
      slideDuration={1.0}
      images={images}
      showBullets={true}
      showNavs={true}
    />
  );
};
