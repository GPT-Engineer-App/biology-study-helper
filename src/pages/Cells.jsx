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
        <Heading as="h2" size="lg" textAlign="center">
          IQ1: What distinguishes one cell from another?
        </Heading>
        <Text fontSize="md" textAlign="center">
          This section will delve into the unique characteristics that differentiate various types of cells.
        </Text>
        <Heading as="h2" size="lg" textAlign="center">
          IQ2: How do cells coordinate activities within their internal environment and the external environment?
        </Heading>
        <Text fontSize="md" textAlign="center">
          This section will explore the mechanisms cells use to manage and coordinate their internal processes and interactions with the external environment.
        </Text>
      </VStack>
    </Container>
  );
};

export default Cells;