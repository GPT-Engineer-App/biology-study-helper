import { Container, VStack, Heading, Text, Box, Button } from "@chakra-ui/react";
import { FaMicroscope, FaTree, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Index = () => {
  const navigate = useNavigate(); // Initialize useNavigate

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
          
          <Button leftIcon={<FaMicroscope />} colorScheme="teal" variant="solid" width="100%" mb={4} onClick={() => navigate('/cells')}>
            Cells as the Basis of Life
          </Button>
          <Button leftIcon={<FaTree />} colorScheme="teal" variant="solid" width="100%" mb={4}>
            Organisation of Living Things
          </Button>
          
          <Button leftIcon={<FaGlobe />} colorScheme="teal" variant="solid" width="100%">
            Ecosystem Dynamics
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;