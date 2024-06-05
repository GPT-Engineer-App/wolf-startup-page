import { Container, Text, VStack, Heading, Button, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          Welcome to GoWolf
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Empowering your business with cutting-edge technology solutions.
        </Text>
        <Image src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MTc2MjUzNzV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="GoWolf Technology" borderRadius="md" />
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
