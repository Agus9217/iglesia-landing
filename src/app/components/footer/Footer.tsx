import { Box, Divider, ListItem, Stack, UnorderedList, Link, Flex, IconButton, Text, Button } from '@chakra-ui/react'
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import { navItem } from '../navbar/nav-item'

export const Footer = () => {

  const date = new Date(Date.now()).getFullYear()

  return (
    <Box
      my={'3rem'}
    >
      <Divider />
      <Stack
        my={'2rem'}
      >
        <Flex
          as={'nav'}
          mt={'2rem'}
          justifyContent={'center'}
          direction={'column'}
          alignItems={'center'}
          gap={8}
        >
          <UnorderedList
            styleType={'none'}
            m={0}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={{ base: 'column', md: 'row' }}
            gap={{ base: 4, md: 20 }}
          >
            {
              navItem.map(({ label }) => (
                <ListItem key={label}>
                  <Link>
                    {label}
                  </Link>
                </ListItem>
              ))
            }
          </UnorderedList>
          <Flex
            gap={2}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <IconButton
              as={Link}
              icon={<IoLogoInstagram size={30} />}
              aria-label={'Link instagram'}
              href={'https://www.instagram.com/iglesia_barrionuevo/'}
              variant={'ghost'}
              target='_blank'
            />
            <IconButton
              as={Link}
              icon={<IoLogoFacebook size={30} />}
              variant={'ghost'}
              aria-label={'Link facebook'}
              href={'https://www.facebook.com/profile.php?id=100086545342176'}
              target='_blank'
            />
          </Flex>
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Text
              textAlign={'center'}
            >
              &copy; {date} Iglesia Cristiana en Barrio Nuevo. Todos los derechos reservados
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  )
}

