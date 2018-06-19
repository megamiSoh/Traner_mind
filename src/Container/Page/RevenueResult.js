import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../../Constants/routes";
import { MainWrap } from "../../Components/PageLayout";
import { SearchBox } from "../../Components/Ui";
import { Container } from "reactstrap";
class RevenueResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null,
      revenueGymList: [
        {
          gymList: [
            { name: "회원권", revenue: 100000000 },
            { name: "PT", revenue: 10000000 },
            { name: "필라테스", revenue: 1000000 },
            { name: "골프", revenue: 100000 },
            { name: "운동복", revenue: 10000 },
            { name: "락커", revenue: 1000 },
            { name: "위약금", revenue: 100 },
            { name: "기타", revenue: 10 }
          ],
          gymCancelList: [
            { name: "회원권", revenue: 200000000 },
            { name: "PT", revenue: 20000000 },
            { name: "필라테스", revenue: 2000000 },
            { name: "골프", revenue: 200000 },
            { name: "운동복", revenue: 20000 },
            { name: "락커", revenue: 2000 },
            { name: "위약금", revenue: 200 },
            { name: "기타", revenue: 20 }
          ]
        }
      ],
      revenueList: [
        {
          cardList: [
            { name: "롯데카드", revenue: 100000000 },
            { name: "신한카드", revenue: 10000000 },
            { name: "하나카드", revenue: 1000000 },
            { name: "삼성카드", revenue: 100000 },
            { name: "외환카드", revenue: 10000 },
            { name: "비씨카드", revenue: 1000 },
            { name: "농협카드", revenue: 100 },
            { name: "기업카드", revenue: 10 }
          ],
          cardCancelList: [
            { name: "롯데카드", revenue: 200000000 },
            { name: "신한카드", revenue: 20000000 },
            { name: "하나카드", revenue: 2000000 },
            { name: "삼성카드", revenue: 200000 },
            { name: "외환카드", revenue: 20000 },
            { name: "비씨카드", revenue: 2000 },
            { name: "농협카드", revenue: 200 },
            { name: "기업카드", revenue: 20 }
          ]
        }
      ]
    };
  }
  handleSelect(day) {
    // this.setState({ selectedDay: day });
    console.log(day);
  }
  handleSelectEnd(day) {
    console.log(day);
  }
  render() {
    return (
      <Container>
        <span className="Alltitle">매출통계</span>
        <SearchBox
          onStartDay={this.handleSelect}
          onEndDay={this.handleSelectEnd}
        />
        <div className="revenuWrap">
          <MainWrap
            cardRevenue={this.state.revenueList}
            gymRevenue={this.state.revenueGymList}
          />
        </div>
        <div className="btnWrap">
          <NavLink className="backBtn" to={routes.MARCKETMANAGE}>
            돌아가기
          </NavLink>
        </div>
      </Container>
    );
  }
}
export default RevenueResult;
