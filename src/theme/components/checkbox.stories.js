import { Checkbox, VStack } from "@chakra-ui/react";

export const States = () => (
  <VStack>
    <Checkbox colorScheme="secondary"/>
    <Checkbox colorScheme="secondary" isIndeterminate/>
    <Checkbox colorScheme="secondary" isChecked/>
    <Checkbox colorScheme="secondary" isDisabled/>
    <Checkbox colorScheme="secondary" isInvalid/>
  </VStack>
)

export const Size = () => (
  <VStack>
    <Checkbox size="sm" colorScheme="secondary"/>
    <Checkbox size="md" colorScheme="secondary"/>
    <Checkbox size="lg" colorScheme="secondary"/>
  </VStack>
)

export const WithText = () => (
  <Checkbox textColor="gray.700" colorScheme="secondary">Checkbox</Checkbox>
)

const CheckboxStory = {
  title: "Form/Atom/Checkbox",
  component: Checkbox
}

export default CheckboxStory