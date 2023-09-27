// This while have a carousel function and another function that iwll timely move through the carousel allowing for the option of either clicking through or interval autoswitchs thru.
import { useEffect, useState } from "react";
import Image from "next/image";


const ImageCarousel = (props) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselMedia, setCarouselMedia] = useState(props.media.image);

  const changeSlide = (index) => {
    setCarouselIndex(index)
  }

  const nextSlide = () => {
    const newIndex =  (carouselIndex + 1) % carouselMedia.length //carouselIndex === carouselMedia.length - 1 ? 0 : carouselIndex + 1; 
    changeSlide(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [carouselIndex])
  return (
    <>
      <Image
        src={carouselMedia[carouselIndex]}
        alt={`Image of ${props.media.name}'s Website`}
        // width={500}
        // height={500}
        fill
        sizes="75vw"
        className="!static object-contain transition-opacity duration-500 ease-in-out"
      />
    </>
  );
};

export default ImageCarousel;
