import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import estimulosImg from '../../assets/estimulos-espirituales.jpeg'

export default function EstimulosPage() {
  return (
    <Stack
      position={'relative'}
      top={'5rem'}
      direction={{ base: 'column', md: 'row' }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Flex
        maxW={{ base: '100%', md: '50%' }}
        flexGrow={1}
        direction={'column'}
        alignItems={'center'}
      >
        <Box
          as={Image}
          maxW={{ base: '200px', md: '400px' }}
          h={{ base: '200px', md: '400px' }}
          src={estimulosImg}
        />
      </Flex>
      <Flex
        maxW={{ base: '100%', md: '50%' }}
        flexGrow={1}
        direction={'column'}
        justifyContent={'center'}
        p={2}
        textAlign={{ base: 'center', md: 'start' }}
      >
        <Heading
          fontSize={{ base: '3xl', md: '5xl' }}
          pb={'2rem'}
        >
          Estimulos Espirituales
        </Heading>
        <Text
          maxW={{ base: '90%', md: '70%' }}
          mx={{ base: 'auto', md: 0 }}

        >
          lorem ipsum dolor sit amet, consectet, lorem ipsum dolor sit amet, lorem ipsum lorem ipsum dolor sit, lorem ipsum lorem ipsum dolor sit, lorem ipsum lorem ipsum dolor sit
        </Text>
        <Flex
          pt={'2rem'}
          gap={3}
          justifyContent={{ base: 'center', md: 'start' }}
        >
          <Button
            colorScheme={'red'}
          >
            YouTube
          </Button>
          <Button
            colorScheme={'purple'}
          >
            Ver más
          </Button>
        </Flex>
      </Flex>
    </Stack>
  )
}
