import { Radio, VStack } from "@chakra-ui/react";

export const States = () => (
  <VStack>
    <Radio colorScheme="secondary"/>
    <Radio colorScheme="secondary" isDisabled/>
    <Radio colorScheme="secondary" isInvalid/>
  </VStack>
)

export const Size = () => (
  <VStack>
    <Radio size="sm" colorScheme="secondary"/>
    <Radio size="md" colorScheme="secondary"/>
    <Radio size="lg" colorScheme="secondary"/>
  </VStack>
)

export const WithText = () => (
  <Radio textColor="gray.700" colorScheme="secondary">Radio</Radio>
)

const RadioStory = {
  title: "Form/Atom/Radio",
  component: Radio
}

export default RadioStory