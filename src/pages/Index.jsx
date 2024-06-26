import { Container, VStack, Heading, Text, Box, Button } from "@chakra-ui/react";
import { FaBook, FaMicroscope, FaLeaf } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Year 11 Preliminary Biology
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to your study resource for Year 11 Preliminary Biology. Explore the topics and deepen your understanding.
        </Text>
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
          <Button leftIcon={<FaBook />} colorScheme="teal" variant="solid" width="100%" mb={4}>
            Introduction to Biology
          </Button>
          <Button leftIcon={<FaMicroscope />} colorScheme="teal" variant="solid" width="100%" mb={4}>
            Cell Structure and Function
          </Button>
          <Button leftIcon={<FaLeaf />} colorScheme="teal" variant="solid" width="100%">
            Plant Biology
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;