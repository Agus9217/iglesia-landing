import { Box, Button, Card, CardBody, CardFooter, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import img from '../../assets/jovenes.jpg'
import img2 from '../../assets/reunio-zona.jpg'

export const Eventos = () => {
  return (
    <Box
      mt={'3rem'}
    >
      <Heading
        fontSize={{ base: '2xl', md: '4xl' }}
        py={{ base: 2, md: 8 }}
      >
        Proximos Eventos
      </Heading>
      <Stack
        alignItems={'center'}
        mt={'3rem'}
        spacing={6}
      >
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          w={{ base: '100%', md: '60%' }}
        >
          <Box
            as={Image}
            objectFit='cover'
            maxW={{ base: '100%', sm: '300px' }}
            src={img}
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Culto de jovenes</Heading>

              <Text py='3'>
                lorem ipsum dolor sit amet, consectet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='yellow'>
                Ver más
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          w={{ base: '100%', md: '60%' }}
        >
          <Box
            as={Image}
            objectFit='cover'
            maxW={{ base: '100%', sm: '300px' }}
            src={img2}
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Reuniones de zona</Heading>

              <Text py='3'>
                lorem ipsum dolor sit amet, consectet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='yellow'>
                Ver más
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Stack>
    </Box>
  )
}

