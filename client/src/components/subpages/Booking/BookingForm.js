import React from "react";

import "../../../styles/subpages/booking.css";
import { Field, reduxForm } from "redux-form";

import validateEmails from "../../../utils/validateEmails";
import _ from "lodash";
import BookingField from "./BookingField";
import BookingFields from "./BookingFields";

const services = [
  {
    type: "Haircut",
    label: [
      { label: "Women", value: "Women_Haircut" },
      { label: "Men", value: "Men_Haircut" },
      { label: "Children", value: "Children_Haircut" },
    ],
  },
  {
    type: "Coloring",
    label: [
      { label: "Roots Touch Up", value: "Root_Touch_Up" },
      { label: "Enlightner Retouch", value: "Enlightner_Retouch" },
      { label: "Ombre", value: "Ombre" },
      { label: "Balayage", value: "Balayage" },
      { label: "Partial Highlights", value: "Partial_Highlights" },
    ],
  },
  {
    type: "Full Highlights",
    label: [
      { label: "Short", value: "Short_Hightlight" },
      { label: "Medium", value: "Medium_Highlight" },
      { label: "Long", value: "Long_Highlight" },
      { label: "Extra Color or Bleach", value: "Xtra_Color_Bleach" },
      { label: "Hair Bonder Treatment", value: "Hair_Bonder" },
      { label: "Color Remover", value: "Color_Remover" },
      { label: "Frosting Cap", value: "Frost_Cap" },
    ],
  },
  {
    type: "Perm",
    label: [
      { label: "Short", value: "Short_Perm" },
      { label: "Medium", value: "Medium_Perm" },
      { label: "Long", value: "Long_Perm" },
      { label: "Extra Long", value: "Xtra_Long_Perm" },
      { label: "Extra Perm Solution", value: "Xtra_Perm" },
    ],
  },
];

const Booking = (props) => {
  const { handleSubmit } = props;
  function renderContent() {
    return services.map((element) => {
      return (
        <div key={element.type + "1"} className="sections">
          <h2 key={element.type}>{element.type}</h2>
          {renderCheckBox(element.label)}
        </div>
      );
    });
  }

  function renderCheckBox(elements) {
    return elements.map((e) => {
      return (
        <div key={e.value + "2"}>
          <Field
            className="styled-checkbox"
            type="checkbox"
            id={e.value}
            value="haircutMen"
            key={e.value + "0"}
            name={e.value}
            component="input"
          />
          <label htmlFor={e.value} key={e.value + "1"}>
            {e.label}
          </label>
        </div>
      );
    });
  }

  function renderFields() {
    return _.map(BookingFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={BookingField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  function dropdownVal(e) {
    var element = document.getElementById(e.target.id);
    if (e.target.value === "") {
      element.classList.add("error-dropdown");
    } else if (element.classList.contains("error-dropdown")) {
      element.classList.remove("error-dropdown");
    }
  }

  return (
    <div className="pageContent">
      <div className="booking-ctnr">
        <div className="form-ctnr">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Book An Appointment</h1>
            {renderFields()}
            <label htmlFor="location" className="labels">
              Choose Location
            </label>
            <div className="custom-select" id="location">
              <Field
                component="select"
                className="select"
                name="location"
                id="loc"
                onChange={dropdownVal}
                required
              >
                <option value="">Location</option>
                <option>Sossaman Rd & Pecos Rd</option>
                <option>Riggs Rd & Ellsworth Rd</option>
                <option>Hunt Hwy & Gary Rd</option>
              </Field>
            </div>
            <label htmlFor="customers" className="labels">
              Number of Customers
            </label>
            <div className="custom-select" id="customers">
              <Field
                component="select"
                className="select"
                name="Customers"
                onChange={dropdownVal}
                id="cust"
                required
              >
                <option value="">Customers</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Field>
            </div>
            <div className="booking-selection">
              <div className="selections">{renderContent()}</div>
            </div>
            <button className="services-submit">Book Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

function validate(values) {
  const errors = {};
  errors.email = validateEmails(values.email || "");

  _.each(BookingFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "BookingForm",
})(Booking);
