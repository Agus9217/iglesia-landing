'use client'

import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import estimulosImg from '../../assets/estimulos-espirituales.jpeg'
import useSWR from "swr";

interface Media {
  media_url: string;
  id: string;
}

interface ApiResponse {
  data: Media[];
}
const URL = process.env.NEXT_PUBLIC_URL_INSTAGRAM

// Define la función fetcher
const fetcher = (url: string): Promise<ApiResponse> => fetch(url).then(res => res.json());

export default function EstimulosPage() {
  const { data, error } = useSWR<ApiResponse>(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data)

  return (
    <>
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
            "Y consideremos como estimularnos unos
            a otros al Amor y las Buenas obras"
            Hebreos 10:24
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
      <Flex
        mt={'9rem'}
        borderWidth={'thin'}
        borderColor={'red'}
        w={'100%'}
        direction={'column'}
      >
        <Heading
          fontSize={{ base: '2xl', md: '4xl' }}
          py={{ base: 2, md: 8 }}
        >
          Nuestro propósito como ministerio
        </Heading>
        {data.data.map(media => (
          <li key={media.id}>
            <video width="320" height="240" controls>
              <source src={media.media_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </Flex>
    </>
  )
}
