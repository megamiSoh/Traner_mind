import React from "react";
import { Input, Label } from "reactstrap";
import { NormalBtn } from "./Btn";
// const INITIALSTATE = {
//   email: '',
//   companyPosition:'',
//   name: '',
//   contact: '',
// }
// function handleChange(e){
// this.setState({
//   INITIALSTATE: {
//   [e.target.name] : e.target.value
//   }
// })
// }
class EmployeeRegist extends React.Component {
  state = {
    email: "",
    companyPosition: "",
    name: "",
    contact: "",
    id: ""
  };
  handleChange = e => {
    // for(let i in this.state) {
    //   if(this.state[i].id ===event.target.id)
    // }
    this.setState(
      {
        [e.target.name]: e.target.value,
        id: this.props.id
      },
      () => {
        this.props.inputValue(this.state);
      }
    );
    console.log(this.state);
  };
  render() {
    const {
      employeeId,
      employeeName,
      employeeContact,
      companyPosition,
      adminCheck,
      deletebtn,

      // emailValue,
      // positionValue,
      // employeeNameValue,
      // employeeContactValue,
      inputValue
    } = this.props;
    return (
      <div>
        <div className="employeeRegsitWrap">
          <p>
            <Label>
              {employeeId}
              <NormalBtn btn={"신규검증"} />
            </Label>
            <span>
              <Input
                onChange={this.handleChange}
                value={this.state.email}
                name={"email"}
              />
            </span>
          </p>
          <p>
            <Label>{companyPosition}</Label>
            <span>
              <Input onChange={this.handleChange} name={"companyposition"} />
            </span>
          </p>
          <p>
            <Label>{employeeName}</Label>
            <span>
              <Input onChange={this.handleChange} name={"name"} />
            </span>
          </p>
          <p>
            <Label>{employeeContact}</Label>
            <span>
              <Input onChange={this.handleChange} name={"contact"} />
            </span>
          </p>
          <p className="checkboxStyle">
            <Label>{adminCheck}</Label>
            <span className="checkStyle">
              <input type="checkbox" />
            </span>
          </p>
          <p className="lastBox">{deletebtn}</p>
        </div>
      </div>
    );
  }
}
// const EmployeeRegist = ({
//   employeeId,
//   employeeName,
//   employeeContact,
//   companyPosition,
//   adminCheck,
//   deletebtn,
//   emailValue,
//   positionValue,
//   employeeNameValue,
//   employeeContactValue,
//   inputValue,
//   ...INITIALSTATE
// }) => (
//   <div>
//     <div className="employeeRegsitWrap">
//       <p>
//         <Label>
//           {employeeId}
//           <NormalBtn btn={"신규검증"} />
//         </Label>
//         <span>
//           <Input onChange={this.handleChange} name={"email"} />
//         </span>
//       </p>
//       <p>
//         <Label>{companyPosition}</Label>
//         <span>
//           <Input onChange={this.handleChange} name={"companyposition"} />
//         </span>
//       </p>
//       <p>
//         <Label>{employeeName}</Label>
//         <span>
//           <Input onChange={this.handleChange} name={"name"} />
//         </span>
//       </p>
//       <p>
//         <Label>{employeeContact}</Label>
//         <span>
//           <Input onChange={this.handleChange} name={"contact"} />
//         </span>
//       </p>
//       <p className="checkboxStyle">
//         <Label>{adminCheck}</Label>
//         <span className="checkStyle">
//           <input type="checkbox" />
//         </span>
//       </p>
//       <p className="lastBox">{deletebtn}</p>
//     </div>
//   </div>
// );

export default EmployeeRegist;
