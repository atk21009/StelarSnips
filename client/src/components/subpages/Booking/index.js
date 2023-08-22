import React, { Component } from "react";

import BookingForm from "./BookingForm";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

class Booking extends Component {
  render() {
    return (
      <div>
        <BookingForm onSubmit={this.props.submit} />
      </div>
    );
  }
}

export default connect(null, actions)(Booking);
