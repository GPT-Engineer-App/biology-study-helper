import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Cells = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Cells as the Basis of Life
        </Heading>
        <Text fontSize="lg" textAlign="center">
          This section covers the fundamental concepts of cells as the basic unit of life. Explore the structure, function, and importance of cells in living organisms.
        </Text>
      </VStack>
    </Container>
  );
};

export default Cells;