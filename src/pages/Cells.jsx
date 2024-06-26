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
        <Heading as="h3" size="md" textAlign="center">
          Summary Notes
        </Heading>
        <Text fontSize="md" textAlign="center">
          - Investigate different cellular structures, including but not limited to:
        </Text>
        <Text fontSize="md" textAlign="center">
          - Examining a variety of prokaryotic and eukaryotic cells (ACSBL032, ACSBL048)
        </Text>
        <Text fontSize="md" textAlign="center">
          - Describe a range of technologies that are used to determine a cell’s structure and function
        </Text>
        <Text fontSize="md" textAlign="center">
          - Investigate a variety of prokaryotic and eukaryotic cell structures, including but not limited to:
        </Text>
        <Text fontSize="md" textAlign="center">
          - Drawing scaled diagrams of a variety of cells (ACSBL035)
        </Text>
        <Text fontSize="md" textAlign="center">
          - Comparing and contrasting different cell organelles and arrangements
        </Text>
        <Text fontSize="md" textAlign="center">
          - Modelling the structure and function of the fluid mosaic model of the cell membrane (ACSBL045)
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