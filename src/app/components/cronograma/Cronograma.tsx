'use client'

import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { IoBook, IoMusicalNotes } from "react-icons/io5";
import { FaPersonPraying, FaRadio } from "react-icons/fa6";

export const Cronograma = () => {
  return (
    <Box
      mt={'3rem'}
      w={'100%'}
    >
      <Heading
        fontSize={{ base: '2xl', md: '4xl' }}
      >
        Nuestro cronograma semanal
      </Heading>
      <Box
        py={'3rem'}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: '2rem', md: '5rem' }}
        >
          <Box>
            <Flex
              alignItems={'center'}
              gap={'15px'}
              w={'300px'}
            >
              <Box
                px={'12px'}
                py={'10px'}
                rounded={'md'}
                bg={'gray.100'}
              >
                <IoBook
                  size={'25px'}
                />
              </Box>
              <Box>
                <Text>
                  Escuela EDI
                </Text>
                <Text
                  color={'gray.500'}
                >
                  Lunes, Miercoles y Sabados
                </Text>
              </Box>
            </Flex>
            <Flex
              mt={'30px'}
              alignItems={'center'}
              gap={'15px'}
              w={'300px'}
            >
              <Box
                px={'12px'}
                py={'10px'}
                rounded={'md'}
                bg={'gray.100'}
              >
                <IoMusicalNotes
                  size={'25px'}
                />
              </Box>
              <Box>
                <Text>
                  Culto
                </Text>
                <Text
                  color={'gray.500'}
                >
                  Domingos 17:00hs
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex
              alignItems={'center'}
              gap={'15px'}
              w={'300px'}
            >
              <Box
                px={'12px'}
                py={'10px'}
                rounded={'md'}
                bg={'gray.100'}
              >
                <FaRadio
                  size={'25px'}
                />
              </Box>
              <Box>
                <Text>
                  Estimulos Espirituales en radio
                </Text>
                <Text
                  color={'gray.500'}
                >
                  Lunes, Miercoles y Viernes
                </Text>
              </Box>
            </Flex>
            <Flex
              mt={'30px'}
              alignItems={'center'}
              gap={'15px'}
              w={'300px'}
            >
              <Box
                px={'12px'}
                py={'10px'}
                rounded={'md'}
                bg={'gray.100'}
              >
                <FaPersonPraying
                  size={'25px'}
                />
              </Box>
              <Box>
                <Text>
                  Oracion
                </Text>
                <Text
                  color={'gray.500'}
                >
                  Jueves 19:00hs
                </Text>
              </Box>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Box>

  )
}

