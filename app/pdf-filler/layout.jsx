import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

export default function layout({ children }) {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
}
