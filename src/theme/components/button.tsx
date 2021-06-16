export const ButtonStyles = {
  baseStyle: {
    fontWeight: "normal",
    borderRadius: "base",
  },
  sizes: {
    sm: {
      fontSize: 13,
      px: 4,
      py: 3
    },
    md: {
      fontSize: 13,
      px: 4,
      py: 3,
    }
  },
  variants: {
    solid:{
      bg: "primary.700",
      color: "gray.700",
      _hover: {
        bg: "primary.600",
      }
    },
    outline: {
      border: "1px solid",
      borderColor: "primary.700",
      color: "gray.700",
      _hover: {
        bg: "primary.100"
      },
    },
    ghost: {
      bg: "transparent",
      color: "link.100",
      _hover: {
        bg: "gray.10"
      }
    },
    secondary: {
      bg: "secondary.400",
      color: "gray.10",
      _hover: {
        bg: "secondary.500"
      }
    },
    secondary_outline: {
      border: "1px solid",
      borderColor: "secondary.700",
      color: "gray.700",
      _hover: {
        bg: "secondary.100"
      },
    },
    danger: {
      bg: "danger.300",
      color: "gray.10",
      _hover: {
        bg: "danger.200"
      }
    },
    danger_outline: {
      border: "1px solid",
      borderColor: "danger.300",
      color: "gray.700",
      _hover: {
        bg: "danger.100"
      },
    },
  }
}
