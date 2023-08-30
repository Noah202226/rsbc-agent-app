import Footer from "./components/Root/Footer";
import Navbar from "./components/Root/Navbar";
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
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
