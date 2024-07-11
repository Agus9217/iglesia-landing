import { Box, Heading, Text } from "@chakra-ui/react";
import { Carousel, Cronograma, Eventos, Hero, Ministerios } from "./components";
import img1 from '../app/assets/iglesia-carousel-1.jpg'
import img2 from '../app/assets/iglesia-carousel-2.jpg'
import img3 from '../app/assets/iglesia-carousel-3.jpg'
import img4 from '../app/assets/iglesia-carousel-4.jpg'
import img5 from '../app/assets/iglesia-carousel-5.jpg'
import img6 from '../app/assets/iglesia-carousel-6.jpg'
import img7 from '../app/assets/iglesia-carousel-7.jpg'
import img8 from '../app/assets/iglesia-carousel-8.jpg'

export default function HomePage() {

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8
  ]



  return (
    <>
      <Hero />
      <Box
        mt={{ base: '7.3rem', md: '9rem' }}
        w={'100%'}
        mb={'3rem'}
      >
        <Heading
          fontSize={{ base: '2xl', md: '4xl' }}
          py={{ base: 2, md: 8 }}
        >
          Nuestro propósito
        </Heading>
        <Text
          maxW={{ base: '75%', md: '60%' }}
          pt={{ base: '1rem', md: '2rem' }}
          fontSize={{ base: 'xs', md: 'sm', lg: 'lg' }}
        >
          Nuestra iglesia existe para glorificar a Dios, crecer en Cristo y servir a otros en el poder del Espiritu Santo. Nos reunimos para adorar a Dios, estudiar la Biblia, orar juntos, en comunión, ministrar a los demás y alcanzar a nuestra comunidad con el amor de Cristo.
        </Text>
      </Box>
      <Carousel
        img={images}
        alt={'Carousel iglesia'}
        w={400}
        h={400}
      />
      <Cronograma />
      <Ministerios />
      <Eventos />
    </>
  );
}
