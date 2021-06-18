function variantFilled(props: Record<string, any>){
  return{
    field: {
      bg: "gray.50",
      border: "1px solid",
      borderColor: "gray.100",
      color: "gray.700",
      _hover: {
        bg: "gray.75"
      },
      _invalid: {
        borderColor: "danger.300"
      },
      _focus: {
        bg: "transparent",
        borderColor: "secondary.700"
      }
    },
  }
}

export const SelectStyles = {
  variants: {
    filled: variantFilled
  }
}
