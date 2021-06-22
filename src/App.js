import './App.css';
import { VStack, Badge } from "@chakra-ui/react";
import { BiImageAdd } from "react-icons/bi";

function App() {
  return (
    <VStack>
      <Badge colorScheme="red" padding="8px" borderRadius="4px" border="1px" borderColor="#FF7875">Default</Badge>
    </VStack>
  );
}

export default App;
