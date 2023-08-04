import React from "react";
import { Link } from "react-router-dom";

import "../styles/landingPage.css";

import Solan from "../imgs/solan.jpg";
import IconBlack from "../imgs/icon-black.png";
import IconWhite from "../imgs/icon-white.png";

export default function Landing() {
  return (
    <div className="pageContent">
      <script src="https://maps.google.com/maps/api/js?sensor=false"> </script>
      <div className="lp-content">
        <div className="lp-img-container">
          <img src={Solan} alt="Solan" className="solan-img" />
          <div className="title">
            <img src={IconBlack} alt="Logo" className="icon-black" />
            <img src={IconWhite} alt="Logo" className="icon-white" />
          </div>
          <div className="overlay">
            <div className="button">
              <Link href="/booking">Book An Appointment</Link>
            </div>
          </div>
        </div>
        <div className="lp-info-container">
          <div className="lp-info">
            <div className="lp-location-container">
              <div className="lp-location-title">Schedule An Appointment</div>
              <div className="lp-location">Fake Street & Real Street</div>
              <a
                className="lp-location-link"
                href="https://goo.gl/maps/izoXS4GL3Mq8SUjj8"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="lp-contact">
            <div className="lp-contact-header">Contact Us</div>
            <div className="lp-contact-content">
              <div className="lp-contact-info">
                <div className="lp-contact-cross">
                  Fake Street & Real Street
                </div>
                <div className="lp-contact-street">123 W Fake Street</div>
                <div className="lp-contact-city">
                  Queen Creek, Arizona 85142
                </div>
                <div className="lp-contact-phoneNum">(123) 456-7890</div>
                <div className="lp-contact-social">Socials</div>
                <div className="lp-contact-sched">
                  <div className="lp-sched-time">
                    <span>Monday - Thursday:</span> 9AM - 7PM
                  </div>
                  <div className="lp-sched-time">
                    <span>Friday & Saturday:</span> 9AM - 7PM
                  </div>
                  <div className="lp-sched-time">
                    <span>Sunday:</span> Closed
                  </div>
                </div>
              </div>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.7282973237775!2d-111.63937364456042!3d33.221218600000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872a4da6b96f02b3%3A0x55b3086befa1e14e!2s20760%20E%20Riggs%20Rd%2C%20Queen%20Creek%2C%20AZ%2085142!5e0!3m2!1sen!2sus!4v1690860723446!5m2!1sen!2sus"
                  width="400"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                ></iframe>
                The address listed is only referenced for demonstration purposes
                only and is an unoccupied building.
              </div>
            </div>
          </div>
          <div className="lp-review">
            <div className="lp-review-header">Customer Reviews</div>
            <div className="lp-reviews">
              <div className="lp-reviews-user">
                <div>Taylor Atkin</div>
                <span>7/31/2023</span>
              </div>
              <div className="lp-reviews-message">
                My first time coming here and it was great. Sue was amazing,
                loved her service. Definitely going back to her. I would
                recommend her to all my friends and family!
              </div>
            </div>
            <div className="lp-reviews">
              <div className="lp-reviews-user">
                <div>John Doe</div>
                <span>7/31/2023</span>
              </div>
              <div className="lp-reviews-message">
                My first time coming here and it was great. Sue was amazing,
                loved her service. Definitely going back to her. I would
                recommend her to all my friends and family!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
