"use client";

import { Container } from "@mui/material";
import Footer from "./components/Root/Footer";
import Navbar from "./components/Root/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "RSBC Agent Application",
  description: "RSBC Agent Application",
  keywords: ["Agent application", "Loan appliaction", "Pdf form Filler"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className} style={{ padding: "1rem" }}>
        <AuthContextProvider>
          <Navbar />
          <Container maxWidth="xl">{children}</Container>
        </AuthContextProvider>

        <Footer />
      </body>
    </html>
  );
}
