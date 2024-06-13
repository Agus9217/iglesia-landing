import { Container } from "@chakra-ui/react";
import { Hero } from "./components";

export default function HomePage() {
  return (
    <Container
      maxW={'1920px'}
      px={{ base: '0.5rem', md: '2rem' }}
      position={'relative'}
      top={'5rem'}
      borderWidth={'thin'}
      borderColor={'cyan'}
    >
      <Hero />
    </Container>
  );
}
