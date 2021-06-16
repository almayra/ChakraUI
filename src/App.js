import './App.css';
import { Checkbox, VStack, HStack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <HStack>
        <VStack>
          <Checkbox colorScheme="secondary"/>
          <Checkbox colorScheme="secondary" isIndeterminate/>
          <Checkbox colorScheme="secondary" isChecked/>
          <Checkbox colorScheme="secondary" isDisabled/>
          <Checkbox colorScheme="secondary" isInvalid/>
        </VStack>
        <VStack>
          <Checkbox size="sm" colorScheme="secondary"/>
          <Checkbox size="md" colorScheme="secondary"/>
          <Checkbox size="lg" colorScheme="secondary"/>
        </VStack>
        <VStack>
          <Checkbox textColor="gray.700" colorScheme="secondary">Checkbox</Checkbox>
        </VStack>
      </HStack>
    </div>
  );
}

export default App;
