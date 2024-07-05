'use client'

import { Box, Button, Flex, Heading, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import estimulosImg from '../../assets/estimulos-espirituales.jpeg'
import useSWR from 'swr'
import { useRef, useState } from "react";

interface Media {
  thumbnail_url: string;
  permalink: string;
  caption: string;
  media_url: string;
  media_type: string;
  id: string;
}

interface ApiResponse {
  data: Media[];
}
const URL = process.env.NEXT_PUBLIC_URL_INSTAGRAM

// Define la función fetcher
const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function EstimulosPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const selectedRef = useRef<HTMLVideoElement | null>(null);
  const { data, error, isLoading } = useSWR<ApiResponse | undefined>(URL, fetcher);

  const handleMediaClick = (index: number, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const currentSelectedVideo = selectedRef.current;

    if (currentSelectedVideo) {
      // Verificar si se hizo clic en el mismo video que ya está reproduciéndose
      if (selectedIdx === index) {
        if (!currentSelectedVideo.paused) {
          currentSelectedVideo.pause();
          return; // Salir de la función si se pausó el video
        }
      } else {
        // Pausar el video actual si no es el mismo que el que se está seleccionando
        currentSelectedVideo.pause();
      }
    }

    setSelectedIdx(index); // Establecer el índice seleccionado al hacer clic
    // Mantener la referencia al video dentro del elemento seleccionado
    selectedRef.current = event.currentTarget.querySelector('video');

    // Reproducir el video seleccionado si existe
    if (selectedRef.current) {
      selectedRef.current.play();
    }
  };


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
            Y consideremos como estimularnos unos
            a otros al Amor y las Buenas obras
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

        </Heading>
        {isLoading ? (
          <div>Cargando...</div>
        ) : (
          data && data.data ? (
            <UnorderedList
              display={'flex'}
              flexWrap={'wrap'}
              styleType={'none'}
              alignItems={'center'}
              justifyContent={'center'}
              gap={'10px'}
            >
              {data.data.map((media, index) => (

                <ListItem key={media.id} onClick={(e) => handleMediaClick(index, e)}>
                  {media.media_type === 'VIDEO' ? (
                    <Flex
                      py={2}
                      direction={'column'}
                      maxW={320}
                      gap={5}
                    >
                      <video id={`video-${index}`} width="320" height="240" poster={media.thumbnail_url} >
                        <source src={media.media_url} type="video/mp4" />
                      </video>
                      <Text>{media.caption}</Text>
                    </Flex>
                  ) : (
                    <Flex
                      py={2}
                      direction={'column'}
                      maxW={320}
                      gap={5}
                    >
                      <Image src={media.media_url} alt={media.caption} width={320} height={240} />
                      <Text>{media.caption}</Text>
                    </Flex>
                  )}

                </ListItem>
              ))}
            </UnorderedList>
          ) : (
            <div>Error: {error}.</div>
          )
        )}
      </Flex>
    </>
  )
}
