import { Switch, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {
  localStorage.setItem("name", JSON.stringify("Jorge"));
  JSON.parse(localStorage.getItem("name"));

  return (
    <>
      <Switch />
      <Text>Hola, soy un texto</Text>
      <Button colorScheme="blue" m={5}>
        Button
      </Button>
    </>
  );
}

export default App;
