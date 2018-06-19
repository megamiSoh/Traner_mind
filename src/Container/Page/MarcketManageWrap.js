import React, { Component } from "react";
import {
  ManageSearchBox,
  ManageList,
  TotalManageList
} from "../../Components/Ui";
import { Container, Row } from "reactstrap";
class MarcketManageWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MarketList: [
        {
          name: "가방짐1",
          use: true,
          id: 0,
          createDate: "2017.12.23",
          notUseDate: "-17"
        },
        {
          name: "가방짐2",
          use: false,
          id: 1,
          createDate: "2017.12.23",
          notUseDate: "-16"
        },
        {
          name: "가방짐3",
          use: true,
          id: 2,
          createDate: "2017.12.23",
          notUseDate: "-15"
        },
        {
          name: "가방짐4",
          use: false,
          id: 3,
          createDate: "2017.12.23",
          notUseDate: "-14"
        },
        {
          name: "가방짐5",
          use: false,
          id: 4,
          createDate: "2017.12.23",
          notUseDate: "-13"
        },
        {
          name: "가방짐6",
          use: false,
          id: 5,
          createDate: "2017.12.23",
          notUseDate: "-12"
        }
      ]
    };
  }
  render() {
    // const { MarcketList } = this.state;
    return (
      <Container>
        <span className="Alltitle">상점관리</span>
        <ManageSearchBox />
        <div className="marketManageWrap">
          <TotalManageList />
          <Row>
            {/* <Col> */}
            {this.state.MarketList.map((item, key) => {
              return (
                <ManageList
                  name={item.name}
                  use={item.use}
                  id={item.id}
                  createDate={item.createDate}
                  notUseDate={item.notUseDate}
                  key={key}
                />
              );
            })}
            {/* </Col> */}
          </Row>
        </div>
      </Container>
    );
  }
}
export default MarcketManageWrap;
