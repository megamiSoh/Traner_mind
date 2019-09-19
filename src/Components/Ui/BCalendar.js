import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import Table from "./Table";
// import events from "react-big-calendar/events";
import "react-big-calendar/lib/css/react-big-calendar.css";
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

// function Test() {
//   return <div>hello</div>;
// }
// const customDayPropGetter = date => {
//   if (date.getDate() === 7 || date.getDate() === 15)
//     return {
//       className: "special-day",
//       style: {
//         border: "solid 3px " + (date.getDate() === 7 ? "#faa" : "#afa")
//       }
//     };
//   else return {};
// };

// const customSlotPropGetter = date => {
//   if (date.getDate() === 7 || date.getDate() === 15)
//     return {
//       className: "special-day"
//     };
//   else return {};
// };

class BCalendar extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        <BigCalendar
          selectable
          events={this.props.events}
          views={{
            month: true,
            week: false
          }}
          defaultDate={new Date()}
          toolbar={false}
          onSelectEvent={(e, name) => {
            this.props.handleOverEvent(e, name);
          }}
          onDoubleClickEvent={e => this.props.handleEvent(e)}
          onSelectSlot={slotInfo =>
            alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )
          }
          // eventPropGetter={handleOverEvent => {
          //   return { className: "hello" };
          // }}
        />
      </div>
    );
  }
}

export default BCalendar;
