import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minH="100vh" bg="gray.50">
      <VStack
        minH="100vh"
        justify="center"
        gap={6}
        px={6}
      >
        <Heading size="2xl">
          Projeto Origem
        </Heading>

        <Text fontSize="lg" color="gray.600">
          Nossa plataforma está começando.
        </Text>

        <Button colorPalette="blue" size="lg">
          Começar
        </Button>
      </VStack>
    </Box>
  );
}