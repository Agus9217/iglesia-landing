import React from 'react'
import useSWR from 'swr';

export interface Welcome {
  kind:       string;
  etag:       string;
  regionCode: string;
  pageInfo:   PageInfo;
  items:      Item[];
}

export interface Item {
  kind:    string;
  etag:    string;
  id:      ID;
  snippet: Snippet;
}

export interface ID {
  kind:       string;
  videoId?:   string;
  channelId?: string;
}

export interface Snippet {
  publishedAt:          Date;
  channelId:            string;
  title:                string;
  description:          string;
  thumbnails:           Thumbnails;
  channelTitle:         string;
  liveBroadcastContent: string;
  publishTime:          Date;
}

export interface Thumbnails {
  default: Default;
  medium:  Default;
  high:    Default;
}

export interface Default {
  url:     string;
  width?:  number;
  height?: number;
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}


const fetcher = (url: string) => fetch(url).then(res => res.json());
const API_YOUTUBE = process.env.NEXT_PUBLIC_URL_YOUTUBE_API_KEY
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_YOUTUBE}&channelId=UC5F8kSa6-dYluX4ZACxfJYA&part=snippet`

console.log(URL)

export default function Youtube() {
const {data, isLoading} = useSWR<Item | undefined>(URL, fetcher)

console.log(data)

  return (
    <div>Youtube</div>
  )
}
