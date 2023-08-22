import React from "react";

import "../../styles/subpages/services.css";

export default function Services() {
  return (
    <div className="pageContent">
      <div className="services-title">Services</div>
      <div className="services-content">
        <div className="services-ctnr">
          <div className="services-section">
            <h1>Haircuts</h1>
            <div className="prices">
              <div>Women - $45</div>
              <div>Men - $35</div>
              <div>Children - $25</div>
            </div>
          </div>
          <div className="services-section">
            <h1>Coloring</h1>
            <div className="prices">
              <div>Roots Touch Up - $85+</div>
              <div>Enlightner Retouch - $135+</div>
              <div>Ombre - $225+</div>
              <div>Balayage - $225+</div>
              <div>Partial Highlights - $85+</div>
            </div>
          </div>
          <div className="services-section">
            <h1>Full Highlights</h1>
            <div className="prices">
              <div>Short - $95+</div>
              <div>Medium - $145+</div>
              <div>Long - $175+</div>
              <div>Extra Color or Bleach - $18</div>
              <div>Hair Bonder Treatment - $45</div>
              <div>Color Remover - $140</div>
              <div>Frosting Cap - $75</div>
            </div>
          </div>
          <div className="services-section">
            <h1>Perm</h1>
            <div className="prices">
              <div>Short - $135</div>
              <div>Medium - $175</div>
              <div>Long - $225</div>
              <div>Extra Long - $265</div>
              <div>Extra Perm Solution - $25</div>
            </div>
          </div>
        </div>
      </div>

      <div className="disclaimer">
        Prices may very depending on availability, services, and other factors
      </div>
    </div>
  );
}
