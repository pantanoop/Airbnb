"use client";

import "./Footer.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">Inspiration for future getaways</h2>

        <div className="footer__categories">
          <span className="active">Popular</span>
          <span>Arts & culture</span>
          <span>Beach</span>
          <span>Mountains</span>
          <span>Outdoors</span>
          <span>Things to do</span>
        </div>

        <hr className="footer__divider" />

        <div className="footer__locations">
          <div>
            <p className="location__name">North Myrtle Beach</p>
            <p className="location__type">Flat rentals</p>
          </div>
          <div>
            <p className="location__name">Nice</p>
            <p className="location__type">Flat rentals</p>
          </div>
          <div>
            <p className="location__name">Portland</p>
            <p className="location__type">Villa rentals</p>
          </div>
          <div>
            <p className="location__name">Minneapolis</p>
            <p className="location__type">Monthly rentals</p>
          </div>
          <div>
            <p className="location__name">Daytona Beach</p>
            <p className="location__type">House rentals</p>
          </div>
          <div>
            <p className="location__name">Florida Keys</p>
            <p className="location__type">Monthly rentals</p>
          </div>
          <div>
            <p className="location__name">Nashville</p>
            <p className="location__type">Holiday rentals</p>
          </div>
          <div>
            <p className="location__name">Barcelona</p>
            <p className="location__type">Monthly rentals</p>
          </div>
          <div>
            <p className="location__name">Charlotte</p>
            <p className="location__type">House rentals</p>
          </div>
          <div>
            <p className="location__name">San Juan</p>
            <p className="location__type">Villa rentals</p>
          </div>
          <div>
            <p className="location__name">Sacramento</p>
            <p className="location__type">Apartment rentals</p>
          </div>
          <div>
            <p className="location__name">Barcelona</p>
            <p className="location__type">Monthly rentals</p>
          </div>
          <div>
            <p className="location__name">Charlotte</p>
            <p className="location__type">House rentals</p>
          </div>
          <div>
            <p className="location__name">San Juan</p>
            <p className="location__type">Villa rentals</p>
          </div>
          <div>
            <p className="location__name">Sacramento</p>
            <p className="location__type">Apartment rentals</p>
          </div>
          <div>
            <p className="location__name">Charlotte</p>
            <p className="location__type">House rentals</p>
          </div>
          <div>
            <p className="location__name">San Juan</p>
            <p className="location__type">Villa rentals</p>
          </div>

          <div>
            <p className="location__name">
              Show more <ExpandMoreIcon fontSize="small" />
            </p>
          </div>
        </div>

        <div className="footer__columns">
          <div className="footer__col">
            <h4>Support</h4>
            <ul>
              <li>Help Centre</li>
              <li>Get help with a safety issue</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Hosting</h4>
            <ul>
              <li>Airbnb your home</li>
              <li>Airbnb your experience</li>
              <li>Airbnb your service</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
              <li>Join a free hosting class</li>
              <li>Find a co-host</li>
              <li>Refer a host</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Airbnb</h4>
            <ul>
              <li>2025 Summer Release</li>
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer__divider_social" />
      <div className="footer__bottom">
        <div className="footer__bottom_left">
          <span>© 2026 Airbnb, Inc.</span>
          <span className="dot">·</span>
          <a href="#">Privacy</a>
          <span className="dot">·</span>
          <a href="#">Terms</a>
          <span className="dot">·</span>
          <a href="#">Company details</a>
        </div>

        <div className="footer__bottom_right">
          <div className="footer__language">
            <LanguageIcon sx={{ fontSize: 18 }} />
            <span>English (IN)</span>
          </div>
          <div className="footer__currency">
            <span>₹ INR</span>
          </div>
          <div className="footer__socials">
            <FacebookIcon sx={{ fontSize: 20 }} />
            <XIcon sx={{ fontSize: 18 }} />
            <InstagramIcon sx={{ fontSize: 20 }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
