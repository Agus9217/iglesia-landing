'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import imgCarousel1 from '../../assets/iglesia-carousel-1.jpg'
import imgCarousel2 from '../../assets/iglesia-carousel-2.jpg'
import imgCarousel3 from '../../assets/iglesia-carousel-3.jpg'
import imgCarousel4 from '../../assets/iglesia-carousel-4.jpg'
import imgCarousel5 from '../../assets/iglesia-carousel-5.jpg'
import imgCarousel6 from '../../assets/iglesia-carousel-6.jpg'
import imgCarousel7 from '../../assets/iglesia-carousel-7.jpg'
import imgCarousel8 from '../../assets/iglesia-carousel-8.jpg'
import Image from "next/image";
import { Box } from "@chakra-ui/react";

const images = [
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
  imgCarousel4,
  imgCarousel5,
  imgCarousel6,
  imgCarousel7,
  imgCarousel8
]

export const Carousel = () => {

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
      width={'100%'}
      mx={'auto'}
      overflowX={'hidden'}
    >
      <Slider {...settings}>
        {
          images.map((images) => (
            <Box
              as={Image}
              src={images}
              alt={'carousel de la iglesia'}
              rounded={'3xl'}
              w={500}
              h={200}
              objectFit={'cover'}
              px={'0.5rem'}
            />
          ))
        }
      </Slider>
    </Box>
  )
}

