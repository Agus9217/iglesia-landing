import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import extremadosImg from '../../assets/extremados.jpeg'
import maaocImg from '../../assets/maaoc.jpeg'
import mayordomiaImg from '../../assets/mayordomia.jpeg'
import oracionImg from '../../assets/oracion.jpeg'
import piedraAngularImg from '../../assets/piedra-angular.jpeg'
import estimulosImg from '../../assets/estimulos-espirituales.jpeg'
import escuelaEdiImg from '../../assets/escuela-edi.jpeg'
import gruposImg from '../../assets/la-red-grupos.jpeg'

export const Ministerios = () => {
  return (
    <Box>
      <Heading
        fontSize={{ base: '2xl', md: '4xl' }}
        py={{ base: 2, md: 8 }}
      >
        Ministerios
      </Heading>
      <Stack
        mt={'3rem'}
        mx={'auto'}
        wrap={'wrap'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={8}
        maxW={'1300px'}
      >
        <Flex
          direction={'column'}
          alignItems={'center'}
          boxShadow={'lg'}
          rounded={'xl'}
          w={'250px'}
        >
          <Box
            as={Image}
            src={extremadosImg}
            w={'250px'}
            h={'250px'}
            objectFit={'cover'}
          />
          <Box
            pt={2}
            pb={4}
            textAlign={'center'}
            px={3}
          >
            <Heading
              fontSize={'xl'}
              pb={2}
            >
              Extremados
            </Heading>
            <Text>
              lorem ipsum dolor sit amet, consectet, lorem ipsum dolor sit amet
            </Text>
          </Box>
        </Flex>
        <Flex
          boxShadow={'lg'}
          rounded={'xl'}
          direction={'column'}
          alignItems={'center'}
          w={'250px'}
        >
          <Box
            as={Image}
            src={piedraAngularImg}
            w={'250px'}
            h={'250px'}
            objectFit={'cover'}
          />
          <Box
            pt={2}
            pb={4}
            px={3}
            textAlign={'center'}
          >
            <Heading
              fontSize={'xl'}
              pb={2}
            >
              Piedra Angular
            </Heading>
            <Text>
              lorem ipsum dolor sit amet, consectet, lorem ipsum dolor sit amet
            </Text>
          </Box>
        </Flex>
        <Flex
          boxShadow={'lg'}
          rounded={'xl'}
          direction={'column'}
          alignItems={'center'}
          w={'250px'}
        >
          <Box
            as={Image}
            src={estimulosImg}
            w={'250px'}
            h={'250px'}
            objectFit={'cover'}
          />
          <Box
            pt={2}
            pb={4}
            px={3}
            textAlign={'center'}
          >
            <Heading
              fontSize={'xl'}
              pb={2}
            >
              Estimulos Espirituales
            </Heading>
            <Text>
              lorem ipsum dolor sit amet, consectet, lorem ipsum dolor sit amet
            </Text>
          </Box>
        </Flex>
        <Flex
          boxShadow={'lg'}
          rounded={'xl'}
          direction={'column'}
          alignItems={'center'}
          w={'250px'}
        >
          <Box
            as={Image}
            src={maaocImg}
            w={'250px'}
            h={'250px'}
            objectFit={'cover'}
          />
          <Box
            pt={2}
            pb={4}
            px={3}
            textAlign={'center'}
          >
            <Heading
              fontSize={'xl'}
              pb={2}
            >
              Maaoc
            </Heading>
            <Text>
              lorem ipsum dolor sit amet, consectet, lorem ipsum dolor sit amet
            </Text>
          </Box>

        </Flex>
        <Flex
          boxShadow={'lg'}
          rounded={'xl'}
          direction={'column'}
          alignItems={'center'}
          w={'250px'}
        >
          <Box
            as={Image}
            src={gruposImg}
            w={'250px'}
            h={'250px'}
            objectFit={'cover'}
          />
          <Box
            pt={2}
            pb={4}
            px={3}
            textAlign={'center'}
          >
            <Heading
              fontSize={'xl'}
              pb={2}
            >
              La red grupos
            </Heading>
            <Text>
              lorem ipsum dolor sit amet, consectet, lorem ipsum dolor sit amet
            </Text>
          </Box>
        </Flex>
        <Flex
          boxShadow={'lg'}
          rounded={'xl'}
          direction={'column'}
          alignItems={'center'}
          w={'250px'}
        >
          <Box
            as={Image}
            src={mayordomiaImg}
            w={'250px'}
            h={'250px'}
            objectFit={'cover'}
          />
          <Box
            pt={2}
            pb={4}
            px={3}
            textAlign={'center'}
          >
            <Heading
              fontSize={'xl'}
              pb={2}
            >
              Mayordomia
            </Heading>
            <Text>
              lorem ipsum dolor sit amet, consectet, lorem ipsum dolor sit amet
            </Text>
          </Box>
        </Flex>
        <Flex
          boxShadow={'lg'}
          rounded={'xl'}
          direction={'column'}
          alignItems={'center'}
          w={'250px'}
        >
          <Box
            as={Image}
            src={escuelaEdiImg}
            w={'250px'}
            h={'250px'}
            objectFit={'cover'}
          />
          <Box
            pt={2}
            pb={4}
            px={3}
            textAlign={'center'}
          >
            <Heading
              fontSize={'xl'}
              pb={2}
            >
              Escuela EDI
            </Heading>
            <Text>
              lorem ipsum dolor sit amet, consectet, lorem ipsum dolor sit amet
            </Text>
          </Box>
        </Flex>
        <Flex
          boxShadow={'lg'}
          rounded={'xl'}
          direction={'column'}
          alignItems={'center'}
          w={'250px'}
        >
          <Box
            as={Image}
            src={oracionImg}
            w={'250px'}
            h={'250px'}
            objectFit={'cover'}
          />
          <Box
            pt={2}
            pb={4}
            px={3}
            textAlign={'center'}
          >
            <Heading
              fontSize={'xl'}
              pb={2}
            >
              Oracion e intercesion
            </Heading>
            <Text>
              lorem ipsum dolor sit amet, consectet, lorem ipsum dolor sit amet
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Box>
  )
}
