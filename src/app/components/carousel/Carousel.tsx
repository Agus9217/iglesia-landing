'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Image, { StaticImageData } from "next/image";
import { Box } from "@chakra-ui/react";

interface Props {
  img?: [] | StaticImageData[],
  video?: []
  alt: string,
  w: number | string,
  h: number | string
}

export const Carousel = ({ img, alt, w, h }: Props) => {

  const settings = {
    infinite: true,
    speed: 3000,
    autoplaySpeed: 8000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box
      className="slider-container"
      width={'95%'}
      mx={'auto'}
      overflowX={'hidden'}
    >
      <Slider {...settings}>
        {
          img?.map((images, index) => (
            <Box
              key={index}
              as={Image}
              src={images}
              alt={alt}
              rounded={'3xl'}
              w={w}
              h={h}
              objectFit={'cover'}
              px={'0.5rem'} />
          ))
        }
      </Slider>
    </Box>
  )
}

