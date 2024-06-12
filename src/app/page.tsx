import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import imgHero from '../app/assets/iglesia-hero-image.jpeg'

export default function HomePage() {
  return (
    <Container
      maxW={'1920px'}
      px={{ base: '0.5rem', md: '2rem' }}
      position={'relative'}
      top={'5rem'}
      borderWidth={'thin'}
      borderColor={'cyan'}
    >
      <Box>
        <Box
          as={Image}
          src={imgHero}
          w={'100%'}
          h={{ base: 'auto', '2xl': '1080px' }}
          objectFit={'cover'}
          rounded={'2xl'}
          filter={'brightness(65%)'}
        />
        <Box
          position={'absolute'}
          top={'50%'}
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          color={'white'}
          textShadow={'0 0 20px black'}
          textAlign={'center'}
          borderWidth={'thin'}
          borderColor={'cyan'}
          maxW={'80%'}
          w={'100%'}
        >
          <Heading>
            Iglesia Cristiana en Barrio Nuevo
          </Heading>
          <Text
            maxW={'60%'}
            mx={'auto'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, blanditiis quam porro, iure tenetur ipsa magnam aut, dignissimos officia vitae eos laudantium nemo vero nihil vel qui cum dolorem reiciendis!
          </Text>
          <Button
            colorScheme={'yellow'}
          >
            Ver más
          </Button>
        </Box>
      </Box>

    </Container>
  );
}
