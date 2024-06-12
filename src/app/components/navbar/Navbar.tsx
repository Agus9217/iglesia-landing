'use client'

import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { NavbarDesktop } from './NavbarDesktop'
import { NavbarMobile } from './NavbarMobile'

export const Navbar = () => {

  const display = useBreakpointValue(
    {
      base: 'none',
      md: 'flex'
    }
  )

  return (
    <Flex
      as={'header'}
      backdropFilter={'blur(8px)'}
      position={'fixed'}
      borderWidth={'thin'}
      borderColor={'cyan'}
      w={'100%'}
      minH={'60px'}
      alignItems={'center'}
      justifyContent={'space-between'}
      px={{ base: 2, md: 8 }}
      fontSize={{ base: 'md', md: 'lg' }}
      zIndex={1000}
    >
      <Box
        maxW={{ base: '140px', md: '300px' }}
        borderWidth={'thin'}
        borderColor={'red'}
      >
        <Text
          fontWeight={'bold'}
        >
          Iglesia Cristiana en <Text as={'span'} color={'blue.500'}>Barrio Nuevo</Text>
        </Text>
      </Box>
      <NavbarDesktop display={display} />
      <NavbarMobile display={display} />
    </Flex>
  )
}

