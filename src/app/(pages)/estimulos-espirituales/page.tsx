'use client'

import { Box, Button, Card, CardBody, Flex, Heading, ListItem, Spinner, Stack, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import estimulosImg from '../../assets/estimulos-espirituales.jpeg'
import useSWR from 'swr'
import { useRef, useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

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
    console.log(selectedRef.current)
    // Reproducir el video seleccionado si existe
    if (selectedRef.current) {
      selectedRef.current.play();
    }
  };

  const videos = data?.data.filter(media => media.media_type === 'VIDEO')

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
            alt={'Imagen estimulos espirituales'}
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
          <Box
            mx={'auto'}
          >
            <Spinner color={'purple'} />
          </Box>
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
              {videos?.map((media, index) => (
                <ListItem key={media.id} onClick={(e) => handleMediaClick(index, e)}>
                  <Flicking
                    align="prev"
                    circular={true}
                    onMoveEnd={e => {
                      console.log(e);
                    }}
                  >
                    <Card
                      maxW={'xs'}
                      h={450}
                    >
                      <CardBody>
                        <Box
                          h={250}
                          display={'flex'}
                          justifyContent={'center'}
                        >
                          <Box
                            h={'100%'}
                            as={'video'}
                            src={media.media_url}
                            poster={media.thumbnail_url}
                          />
                        </Box>

                        <Stack mt='6' spacing='3'>
                          <Text
                            noOfLines={4}
                          >
                            {media.caption}
                          </Text>
                        </Stack>
                      </CardBody>
                    </Card>
                  </Flicking>
                </ListItem>
              ))}
            </UnorderedList>
          ) : (
            <div>Error: {error}.</div>
          )
        )}
      </Flex >
    </>
  )
}
