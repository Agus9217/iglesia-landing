import { Box, Flex, Stack, StackItem } from "@chakra-ui/react";
import Image from "next/image";
import estimulosImg from '../../assets/estimulos-espirituales.jpeg'

export default function EstimulosPage() {
  return (
    <Stack
      position={'relative'}
      top={'5rem'}
      direction={'row'}
    >
      <Flex
        maxW={'50%'}
        borderWidth={'thin'}
        borderColor={'red'}
        flexGrow={1}
        direction={'column'}
      >
        <Box
          as={Image}
          w={'100%'}
          src={estimulosImg}
          borderWidth={'thin'}
          borderColor={'cyan'}
        />
      </Flex>
      <Flex
        maxW={'50%'}
        borderWidth={'thin'}
        borderColor={'red'}
        flexGrow={1}
      >
        Estimulos Espirituales
      </Flex>
    </Stack>
  )
}
