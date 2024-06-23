import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import imgHero from '../../assets/iglesia-hero-image.jpeg'
export const Hero = () => {

  return (
    <Box
      position={'relative'}
      top={'5rem'}
    >
      <Box
        as={Image}
        src={imgHero}
        w={'100%'}
        h={{ base: 'auto', '2xl': '1080px' }}
        objectFit={'cover'}
        rounded={'2xl'}
        filter={'brightness(65%)'}
        alt={'Hero iglesia barrio nuevo'}
        priority={true}
      />
      <Box
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        color={'white'}
        textShadow={'0 0 20px black'}
        textAlign={'center'}
        maxW={'80%'}
        w={'100%'}
      >
        <Heading
          fontSize={{ base: '2xl', sm: '5xl', md: '6xl', lg: '8xl' }}
        >
          Iglesia Cristiana en Barrio Nuevo
        </Heading>
        <Text
          maxW={{ base: '80%', md: '60%' }}
          mx={'auto'}
          fontSize={{ base: 'xs', md: 'sm', lg: 'lg' }}
          py={{ base: '0.5rem', md: '2rem' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, blanditiis quam porro, iure tenetur ipsa magnam aut
        </Text>
        <Button
          colorScheme={'yellow'}
          size={{ base: 'sm', md: 'lg' }}
        >
          Ver más
        </Button>
      </Box>
    </Box>
  )
}
