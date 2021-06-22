const parts = ["table", "thead", "tbody", "tr", "th", "td", "caption"]

const baseStyle = {
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full",
  },
  th: {
    bg: "gray.25",
    fontFamily: "Noto Sans, sans-serif",
    fontWeight: "500",
    textTransform: "capitalize",
    letterSpacing: "normal",
    textAlign: "start",
  },
  td: {
    fontFamily: "Noto Sans, sans-serif",
    fontSize: 13,
    fontWeight: "normal",
  },
  caption: {
    mt: 4,
    fontFamily: "Noto Sans, sans-serif",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "medium",
  },
}

export default {
  parts,
  baseStyle,
}