import React, { useEffect, useState } from "react";
import { findNearest, orderByDistance } from "geolib";

import "../../styles/subpages/location.css";

export default function Location() {
  const [loc, setLoc] = useState([]);

  const locations = [
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.2631026358326!2d-111.58551762459092!3d33.1809676734975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872a4ebbac0953e7%3A0xe358cdd4af9f43e8!2sFreddy's%20Frozen%20Custard%20%26%20Steakburgers!5e0!3m2!1sen!2sus!4v1691107378576!5m2!1sen!2sus",
      pos: [33.17957, -111.58247],
      cross: "Hunt Hwy & Gary Rd",
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.728298335509!2d-111.63776552458894!3d33.22121857348117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872a4da6b96f02b3%3A0x55b3086befa1e14e!2s20760%20E%20Riggs%20Rd%2C%20Queen%20Creek%2C%20AZ%2085142!5e0!3m2!1sen!2sus!4v1691107593328!5m2!1sen!2sus",
      pos: [33.22097, -111.63608],
      cross: "Riggs Rd & Ellsworth Rd",
    },

    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.3762139265846!2d-111.65851022458503!3d33.308978673445885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872bad80545e50cf%3A0xa4c83f367906092f!2sPhoenix-Mesa%20Gateway%20Airport!5e0!3m2!1sen!2sus!4v1691107618361!5m2!1sen!2sus",
      pos: [33.309, -111.6559],
      cross: "Sossaman Rd & Pecos Rd",
    },
  ];

  useEffect(() => {
    var flag = loc[1];
    if (!flag) {
      getLocation();
    } else {
      nearest(loc);
    }
  });

  function getLocation() {
    if (navigator.geolocation) {
      var pos = navigator.geolocation.getCurrentPosition(showPosition);
    }
    return pos;
  }
  async function showPosition(position) {
    const currentLoc = {
      latitude: await position.coords.latitude,
      longitude: await position.coords.longitude,
    };

    setLoc([currentLoc, true]);
  }

  async function nearest(currentLoc) {
    const longLat = [];

    locations.forEach((element) => {
      longLat.push({ latitude: element.pos[0], longitude: element.pos[1] });
    });

    const resNear = findNearest(currentLoc[0], longLat);
    const order = orderByDistance(currentLoc[0], longLat);
    display(resNear, order);
  }

  function display(resNear, order) {
    document.getElementById("loc").innerHTML = "";
    order.forEach((element) => {
      container(
        locations.filter(
          (e) =>
            (e.pos[0] === element.latitude) & (e.pos[1] === element.longitude)
        )
      );
    });

    var current = locations.filter(
      (e) => (e.pos[0] === resNear.latitude) & (e.pos[1] === resNear.longitude)
    );
    console.log(current[0].src);
    document.getElementById("location").src = current[0].src;
  }

  function container(e) {
    const ctnr = document.createElement("div");
    ctnr.className = "locationContainers";

    const title = document.createElement("h3");
    title.innerHTML = e[0].cross;
    title.onclick = () => switchMap(e[0]);
    ctnr.append(title);

    const desc = document.createElement("p");
    desc.innerHTML =
      "<span>Monday - Thursday:</span> 9AM - 7PM <br /><span>Friday & Saturday:</span> 9AM - 7PM <br /><span>Sunday:</span> Closed";

    ctnr.append(desc);

    document.getElementById("loc").append(ctnr);
  }

  function switchMap(e) {
    document.getElementById("location").src = e.src;
  }

  return (
    <div className="pageContent">
      <div className="titleCtnr">Locations</div>
      <div className="locationCtnr">
        <div>
          <div id="loc"></div>
        </div>
        <div className="frameCtnr">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1669.6445882323023!2d-111.58476626032714!3d33.180283502671294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872a4ebbac0953e7%3A0xe358cdd4af9f43e8!2sFreddy's%20Frozen%20Custard%20%26%20Steakburgers!5e0!3m2!1sen!2sus!4v1691107770959!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            id="location"
            title="location iframe"
          ></iframe>
        </div>
      </div>
      <div className="btm-desc">
        <a href="/booking" className="btm-desc-btn">
          Book An Appointment
        </a>
        <p>
          View our multiple locations around the valley. All of our stores open
          at 9am and closes at 7pm. Visit one of our multiple valley locations
          and stop in for an appointment. Book an appointment online or stop by
          for a walk in appointment.
        </p>
      </div>
    </div>
  );
}
