import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const BCalendar = ({ props }) => (
  <div>
    <BigCalendar
      events={[]}
      timeslots={4}
      defaultDate={new Date()}
      views={["month"]}
    />
  </div>
);

export default BCalendar;
