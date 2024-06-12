import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import imgHero from '../app/assets/iglesia-hero-image.jpeg'

export default function HomePage() {
  return (
    <Box
      position={'relative'}
      top={'5rem'}
      borderWidth={'thin'}
      borderColor={'red'}
      maxW={'90%'}
      mx={'auto'}
    >
      <Box>
        <Box
          mx={'auto'}
          as={Image}
          src={imgHero}
          alt={'Portada iglesia barrio nuevo'}
          rounded={'2xl'}
          filter={'brightness(60%)'}
        />
        <Box
          position={'absolute'}
          top={'50%'}
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          borderWidth={'thin'}
          borderColor={'cyan'}
          maxW={'80%'}
          w={'100%'}
          textAlign={'center'}
        >
          <Heading
            fontSize={{ base: 'xl', md: '7xl', lg: '8xl' }}
            color={'white'}
            textShadow={'dark-lg'}
          >
            Bienvenidos a nuestra iglesia
          </Heading>
          <Text
            maxW={'80%'}
            color={'white'}
            mx={'auto'}
            fontSize={'xs'}
            py={{ base: '0.5rem', md: '2rem' }}
          >
            lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit am lorem ipsum dolor sit
          </Text>
          <Button
            colorScheme={'yellow'}
            size={{ base: 'xs', md: 'md' }}
          >
            Ver más
          </Button>
        </Box>
      </Box>

    </Box>
  );
}
