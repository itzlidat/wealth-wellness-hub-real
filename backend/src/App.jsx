import { Card, Box } from "@mui/material";

const glassCardSx = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.10)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  borderRadius: 3,
};

export default function App() {
  return (
    <Box>
      <Card sx={glassCardSx}>...</Card>
    </Box>
  );
}