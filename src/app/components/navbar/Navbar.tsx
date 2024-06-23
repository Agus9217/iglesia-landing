'use client'

import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavbarDesktop } from './NavbarDesktop'
import { NavbarMobile } from './NavbarMobile'
import { useMotionValueEvent, useScroll } from 'framer-motion'

export const Navbar = () => {
  const [change, setChange] = useState(0)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => {
    setChange(latest)
  })

  const display = useBreakpointValue(
    {
      base: 'none',
      md: 'flex'
    }
  )

  return (
    <Flex
      as={'header'}
      backdropFilter={`blur(8px) ${change >= 60 ? 'brightness(60%)' : ''}`}
      position={'fixed'}
      w={'100%'}
      minH={'60px'}
      alignItems={'center'}
      justifyContent={'space-between'}
      px={{ base: 2, md: 8 }}
      fontSize={{ base: 'md', md: 'lg' }}
      color={change >= 60 ? 'white' : 'black'}
      zIndex={1000}
      shadow={'base'}
    >
      <Box
        maxW={{ base: '140px', md: '300px' }}
      >
        <Text
          fontWeight={'bold'}
        >
          Iglesia Cristiana en <Text as={'span'} color={change >= 60 ? 'yellow.400' : 'blue.500'}>Barrio Nuevo</Text>
        </Text>
      </Box>
      <NavbarDesktop display={display} />
      <NavbarMobile display={display} change={change} />
    </Flex>
  )
}

