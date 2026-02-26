"use client";

import React from "react";
import HomeCard from "../homecard/HomeCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./HomeSection.css";

const homesData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    location: "Sahibzada Ajit Singh Nagar",
    type: "Room",
    price: "2,922",
    rating: "4.98",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    location: "Sahibzada Ajit Singh Nagar",
    type: "Room",
    price: "3,766",
    rating: "4.94",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    location: "Sahibzada Ajit Singh Nagar",
    type: "Room",
    price: "2,338",
    rating: "4.83",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    location: "Zirakpur",
    type: "Flat",
    price: "3,104",
    rating: "4.87",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    location: "Sahibzada Ajit Singh Nagar",
    type: "Home",
    price: "12,417",
    rating: "5.0",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    location: "Sahibzada Ajit Singh Nagar",
    type: "Home",
    price: "8,689",
    rating: "4.97",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    location: "Mohali",
    type: "Bungalow",
    price: "4,563",
    rating: "4.97",
  },
];

export default function HomeSection() {
  return (
    <section className="home_section">
      <div className="home_section_header">
        <h2 className="home_section_title">
          Popular homes in Sahibzada Ajit Singh Nagar
          <ArrowForwardIosIcon sx={{ fontSize: 14, ml: 1.5 }} />
        </h2>

        <div className="home_section_nav">
          <button className="nav_circle_btn">
            <ChevronLeftIcon fontSize="small" />
          </button>
          <button className="nav_circle_btn">
            <ChevronRightIcon fontSize="small" />
          </button>
        </div>
      </div>

      <div className="home_grid">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </section>
  );
}
