// Cycles through a project images at a rate of 5 seconds
import { useEffect, useState } from "react";
import Image from "next/image";

const ImageCarousel = (props) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselMedia = props.media.image;

  const changeSlide = (index) => {
    setCarouselIndex(index);
  };

  const nextSlide = () => {
    const newIndex = (carouselIndex + 1) % carouselMedia.length; //carouselIndex === carouselMedia.length - 1 ? 0 : carouselIndex + 1;
    changeSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [carouselIndex]);
  return (
    <>
      <Image
        src={carouselMedia[carouselIndex]}
        alt={`Image of ${props.media.name}'s Website`}
        fill
        sizes="75vw"
        className="!static object-contain"
      />
    </>
  );
};

export default ImageCarousel;
