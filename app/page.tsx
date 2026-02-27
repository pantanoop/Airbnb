"use client";
import HomeSection from "@/components/HomeSection/HomeSection";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          backgroundColor: "white",
        }}
      >
        <Navbar />
      </Box>

      <HomeSection />
      <Footer />
    </>
  );
}
