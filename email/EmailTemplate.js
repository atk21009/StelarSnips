const services = {
  Women_Haircut: "Women Haircut",
  Men_Haircut: "Men Haircut",
  Children_Haircut: "Children",
  Root_Touch_Up: "Roots Touch Up",
  Enlightner_Retouch: "Enlightner Retouch",
  Ombre: "Ombre",
  Balayage: "Balayage",
  Partial_Highlights: "Partial Highlights",
  Short_Hightlight: "Short Highlight",
  Medium_Highlight: "Medium Highlight",
  Long_Highlight: "Long",
  Xtra_Color_Bleach: "Extra Color or Bleach",
  Hair_Bonder: "Hair Bonder Treatment",
  Color_Remover: "Color Remover",
  Frost_Cap: "Frosting Cap",
  Short_Perm: "Short Perm",
  Medium_Perm: "Medium Perm",
  Long_Perm: "Long Perm",
  Xtra_Long_Perm: "Extra Long Perm",
  Xtra_Perm: "Extra Perm Solution",
};

module.exports = (data) => {
  const allServices = data.services;
  const serv = Object.keys(allServices).forEach(function (key, index) {
    return `<p>${services[key]}</p>`;
  });

  return `
  <html>
  <head>
    <title>Appointment Scheduled</title>
  </head>
  <body style="color: #61849e;">
    <div>
      <img
        src="cid:logo"
        alt="logo"
        width="100%"
      />
    </div>
   
      <h1 style="width: 100%; text-align: center; padding: 10px; font-weight: 300; border-bottom: 1px solid #61849e; ">Appointment Scheduled</h1>

      <p style="margin: 20px; width: 100%; text-align: center; margin: 0;">
        Hello ${data.firstname} ${data.lastname} your appointment is scheduled for today at Stelar Snips. Your
        appointment will be ready in 15 minutes.
      </p>

      <p style="width: 100%; text-align: center; margin: 0;">Location - ${data.location}</p>
      <p style="width: 100%; text-align: center; margin: 0;">Number of Customers - ${data.customers}</p>
      <h2 style="width: 100%; text-align: center; margin-bottom: 5px;">Services</h2>

      ${serv}
    
  </body>
</html>

  `;
};
