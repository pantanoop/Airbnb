"use client";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import "./HomeCard.css";

export default function HomeCard() {
  return (
    <div className="home_card">
      <div className="card_img_wrapper">
        <img src="/maldives.jpg" alt="florida" className="card_img" />

        <div className="guest_fav_badge">Guest favourite</div>

        <button className="heart_icon_btn">
          <FavoriteBorderIcon sx={{ color: "white", fontSize: 24 }} />
        </button>
      </div>

      <div className="card_content">
        <div className="card_row">
          <span className="card_location_text">Beach in Florida</span>
        </div>
        <div className="card_price_text">
          <strong>₹100</strong> for 2 nights
          {"  "}
          <StarIcon sx={{ fontSize: 14, mr: 0.5 }} />
          <span>4.5</span>
        </div>
      </div>
    </div>
  );
}
