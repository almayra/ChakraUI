import React from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import { AiOutlineFolder } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

export const Variants = () => (
  <Grid>
    <Button variant="solid" colorScheme="primary">Solid</Button>
    <Button variant="outline" colorScheme="primary">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </Grid>
)

export const Size = () => (
  <Grid>
    <Button colorScheme="primary" size="sm">Small</Button>
    <Button colorScheme="primary" size="md">Medium</Button>
    <Button colorScheme="primary" size="lg">Large</Button>
  </Grid>
)

export const Disable = () => (
  <Grid>
    <Button colorScheme="primary">Rest</Button>
    <Button colorScheme="primary" disabled>Rest</Button>
  </Grid>
)

export const WithIcon = () => (
  <Grid>
    <Button leftIcon={<AiOutlineFolder/>}>Prepend</Button>
    <Button rightIcon={<BiChevronDown/>}>Append</Button>
    <Button leftIcon={<AiOutlineFolder/>} rightIcon={<BiChevronDown/>}>Both</Button>
  </Grid>
)

const ButtonStory = {
  title: "Atom/Button",
  component: Button
}

export default ButtonStory