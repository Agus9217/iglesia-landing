import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Carousel, Cronograma, Eventos, Footer, Hero, Ministerios } from "./components";

export default function HomePage() {
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
      <Carousel />
      <Cronograma />
      <Ministerios />
      <Eventos />
      <Footer />
    </>
  );
}
