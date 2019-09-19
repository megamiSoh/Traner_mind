import React from "react";
import { DeleteBtn } from "./Btn";
const EmployeeTable = ({
  companyPositionTitle,
  nameTitle,
  emailTitle,
  contactTitle,
  deleteTitle,
  adminTitle,
  show,
  employeeList,
  deleteBtn
}) => (
  <table className="employeeTableWrap">
    <thead>
      <tr>
        <th>{companyPositionTitle}</th>
        <th>{nameTitle}</th>
        <th>{emailTitle}</th>
        <th>{contactTitle}</th>
        <th>{adminTitle}</th>
        <th>{deleteTitle}</th>
      </tr>
    </thead>
    <tbody>
      <tr className={show ? "hidden" : "block"}>
        <td colSpan="7">직원을 추가해 주세요.</td>
      </tr>
      {employeeList.map((item, key) => {
        return (
          <tr key={key} className={show ? "block" : "hidden"}>
            <td>{item.companyPosition}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>
            <td>createDate}</td>
            <td>
              <DeleteBtn
                // data-id={i}
                btn={"삭제"}
                outline={true}
                onClick={deleteBtn.bind(this, key)}
              />
            </td>
            {/* <td>adminCheck}</td> */}
          </tr>
        );
      })}
    </tbody>
  </table>
);
export default EmployeeTable;
