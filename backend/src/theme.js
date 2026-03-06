// frontend/src/theme.js
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0B0F1A",
      paper: "rgba(255,255,255,0.06)",
    },
    primary: { main: "#C026D3" },
    text: { primary: "#EDEFF6", secondary: "rgba(237,239,246,0.70)" },
    divider: "rgba(255,255,255,0.10)",
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial",
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});