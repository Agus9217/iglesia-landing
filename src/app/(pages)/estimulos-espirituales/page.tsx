'use client'

import {
    Box,
    Button,
    Card,
    CardBody,
    Flex,
    Heading,
    ListItem,
    Spinner,
    Stack,
    Text,
    UnorderedList
} from "@chakra-ui/react";
import Image from "next/image";
import estimulosImg from '../../assets/estimulos-espirituales.jpeg'
import useSWR from 'swr'
import {useRef, useState} from "react";
import Youtube from "@/app/components/youtube/Youtube";
import {motion} from "framer-motion";
import { IoPlay } from "react-icons/io5";

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

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function EstimulosPage() {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const selectedRef = useRef<HTMLVideoElement | null>(null);
    const {data, error, isLoading} = useSWR<ApiResponse | undefined>(URL, fetcher);

    const handleMediaClick = (index: number, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const currentSelectedVideo = selectedRef.current;

        if (currentSelectedVideo) {
            if (selectedIdx === index) {
                if (!currentSelectedVideo.paused) {
                    currentSelectedVideo.pause();
                    return;
                }
            } else {
                currentSelectedVideo.pause();
            }
        }

        setSelectedIdx(index);
        selectedRef.current = event.currentTarget.querySelector('video');
        console.log(selectedRef.current)
        if (selectedRef.current) {
            selectedRef.current.play();
        }
    };

    const videos = data?.data.filter(media => media.media_type === 'VIDEO').slice(0, 4)

    const ButtonMotion = motion(Button)

    return (
        <>
            <Stack
                position={'relative'}
                top={'5rem'}
                direction={{base: 'column', md: 'row'}}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Flex
                    maxW={{base: '100%', md: '50%'}}
                    flexGrow={1}
                    direction={'column'}
                    alignItems={'center'}
                >
                    <Box
                        as={Image}
                        maxW={{base: '200px', md: '400px'}}
                        h={{base: '200px', md: '400px'}}
                        src={estimulosImg}
                        alt={'Imagen estimulos espirituales'}
                        priority={true}
                    />
                </Flex>
                <Flex
                    maxW={{base: '100%', md: '50%'}}
                    flexGrow={1}
                    direction={'column'}
                    justifyContent={'center'}
                    p={2}
                    textAlign={{base: 'center', md: 'start'}}
                >
                    <Heading
                        fontSize={{base: '3xl', md: '5xl'}}
                        pb={'2rem'}
                    >
                        Estimulos Espirituales
                    </Heading>
                    <Text
                        maxW={{base: '90%', md: '70%'}}
                        mx={{base: 'auto', md: 0}}
                    >
                        Y consideremos como estimularnos unos
                        a otros al Amor y las Buenas obras
                        Hebreos 10:24
                    </Text>
                    <Flex
                        pt={'2rem'}
                        gap={3}
                        justifyContent={{base: 'center', md: 'start'}}
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
            <Stack
                mt={'9rem'}
                borderWidth={'thin'}
                borderColor={'cyan'}
                w={'100%'}
            >
                <Youtube/>
            </Stack>
            <Flex
                mt={'9rem'}
                borderWidth={'thin'}
                borderColor={'red'}
                w={'100%'}
                direction={'column'}
            >
                <Heading
                    fontSize={{base: '2xl', md: '4xl'}}
                    py={{base: 2, md: 8}}
                >

                </Heading>
                {isLoading ? (
                    <Box
                        mx={'auto'}
                    >
                        <Spinner color={'purple'}/>
                    </Box>
                ) : (
                    data && data.data ? (
                        <UnorderedList
                            display={'flex'}
                            styleType={'none'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            gap={'10px'}
                        >
                            {videos?.map((media, index) => (
                                <ListItem key={media.id} onClick={(e) => handleMediaClick(index, e)}>
                                    <Card
                                        w={200}
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
                                                <ButtonMotion
                                                    leftIcon={<IoPlay />}
                                                    colorScheme={'purple'}
                                                    whileTap={{scale: 0.9}}
                                                    whileHover={{scale: 1.1}}
                                                >
                                                    Reproducir
                                                </ButtonMotion>
                                            </Stack>
                                        </CardBody>
                                    </Card>
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
