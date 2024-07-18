import { Box, Card, CardBody, Heading, Stack, CardFooter, Text, Button } from '@chakra-ui/react';
import React from 'react'
import useSWR from 'swr';
import { Welcome } from "@/app/components/youtube/interfaces";

const fetcher = (url: string) => fetch(url).then(res => res.json());
const API_YOUTUBE = process.env.NEXT_PUBLIC_URL_YOUTUBE_API_KEY
const URL_VIDEOS = `https://www.googleapis.com/youtube/v3/search?key=${API_YOUTUBE}&channelId=UC5F8kSa6-dYluX4ZACxfJYA&part=snippet`

console.log(URL)

export default function Youtube() {
  const { data: getVideos, isLoading } = useSWR<Welcome | undefined>(URL_VIDEOS, fetcher)

  const allData = getVideos?.items.slice(0, 4)

  return (
    <Stack
      mx={'auto'}
      w={'70%'}
    >
      {
        allData?.map((video, index) => (
          <Card
            key={`${video.id.videoId}-${index}`}
            direction={{ base: 'column', md: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            <Box
              as={'iframe'}
              maxW={{ base: '100%', sm: '400px' }}
              width={'100%'}
              height="240"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
            </Box>
            <Stack>
              <CardBody>
                <Heading size='md'>{video.snippet.title}</Heading>
                <Text py='2'>
                  {video.snippet.description}
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                  Buy Latte
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))
      }
    </Stack>
  )
}
