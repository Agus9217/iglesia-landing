import { Box, Stack } from '@chakra-ui/react';
import React from 'react'
import useSWR from 'swr';
import {Welcome} from "@/app/components/youtube/interfaces";

const fetcher = (url: string) => fetch(url).then(res => res.json());
const API_YOUTUBE = process.env.NEXT_PUBLIC_URL_YOUTUBE_API_KEY
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_YOUTUBE}&channelId=UC5F8kSa6-dYluX4ZACxfJYA&part=snippet`

console.log(URL)

export default function Youtube() {
  const { data, isLoading } = useSWR<Welcome | undefined>(URL, fetcher)

  const allData = data?.items.slice(0, 4)

  return (
    <Stack
      direction={'row'}
      justifyContent={'center'}
      w={'100%'}
    >
      {
        allData?.map((video, index) => (
            <Box
              as={'iframe'}
              key={`${video.id.videoId}-${index}`}
              width={'100%'}
              height="340"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
          </Box>))
      }
    </Stack>

  )
}
