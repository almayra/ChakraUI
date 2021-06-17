import './App.css';
import { 
  Input, 
  VStack, 
  FormControl,
  FormErrorMessage,
  FormHelperText,   
} from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <VStack spacing={6}>
        <FormControl>
            <Input placeholder="Enter your email" variant="filled"/>
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl isDisabled>
            <Input placeholder="Enter your email" variant="filled"/>
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl isInvalid>
            <Input placeholder="Enter your email" variant="filled"/>
          <FormErrorMessage>Your email is invalid.</FormErrorMessage>
        </FormControl>
      </VStack>
    </div>
  );
}

export default App;
