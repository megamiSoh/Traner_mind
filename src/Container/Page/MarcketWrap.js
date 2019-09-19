import React, { Component } from "react";
import {
  MarcketCreateInfoFirst,
  MarcketCreateInfoSecond,
  Remark,
  EmployeeTable,
  NormalBtn,
  ShowModal,
  RegstBtn,
  GrayBtn,
  EmployeeRegist,
  DeleteBtn
} from "../../Components/Ui";
// import cuid from "cuid";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as postListActions from "../../Modules/postList";
import * as btnAction from "../../Modules/btnAction";
import { Container } from "reactstrap";
import { ShopInfo, CeoList } from "../../Modules/Models/ShopInfo";
let InitialState = {
  ...new ShopInfo(),
  CeoList: new CeoList()
};
class MarcketWrap extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      show: false,
      children: [],
      employeeRegist: [],
      activeTab: 1,
      numChildren: 2,
      shopInfo: [...InitialState]
    };
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  handleSubmit = async e => {
    const { postListActions } = this.props;
    await postListActions.postList("marcketCreate", this.state.shopInfo);
    try {
      console.log(this.state.shopInfo);
    } catch (e) {
      console.log(e);
    }
  };
  inpoInputValue = e => {
    this.setState({
      shopInfo: {
        ...this.state.shopInfo,
        [e.target.name]: e.target.value
      }
    });
  };
  inpoSecInputValue = e => {
    this.setState({
      shopInfo: {
        ...this.state.shopInfo,

        [e.target.name]: e.target.value
      }
    });
  };
  AreaValue = e => {
    this.setState({
      shopInfo: {
        ...this.state.shopInfo,

        [e.target.name]: e.target.value
      }
    });
  };
  inputValue = data => {
    this.setState({
      shopInfo: {
        ...this.state.shopInfo,
        CeoList: {
          [`ceoList${data.id}`]: [{ ...data }]
        }
      }
    });
  };
  onAddChild = () => {
    if (this.state.numChildren < 6) {
      this.setState({
        numChildren: this.state.numChildren + 1
      });

      for (var i = 1; i < this.state.numChildren; i += 1) {
        this.setState({
          children: this.state.children.concat(
            <EmployeeRegist
              // key={cuid()}
              // id={cuid()}
              // title={`직원${i}`}
              employeeId={"E-mail"}
              employeeName={"직원명"}
              employeeContact={"연락처"}
              btnTitle={"등록"}
              companyPosition={"직급"}
              adminCheck={"관리자 권한"}
              inputValue={this.inputValue}
              deletebtn={
                <DeleteBtn
                  data-id={i}
                  btn={"삭제"}
                  outline={true}
                  onClick={this.onRemoveChild.bind(this, i)}
                />
              }
            />
          )
        });
      }
    } else {
      return;
    }
  };

  showToggle = () => {
    this.props.btnAction.btnAction();
  };
  showNAdd = () => {
    // this.setState({
    //   employeeRegist: []
    // });
    this.showToggle();
    this.onAddChild();
  };
  onRemoveChild = (index, target) => {
    let removeArr = [...this.state.children];
    let i = removeArr.findIndex(i => {
      return i.props.id === index;
    });
    let idIndex = this.state.children[i];
    let arrResult = removeArr.filter(item => {
      return item !== idIndex;
    });
    let valueResult = this.state.employeeRegist.filter(item => {
      if (idIndex) {
        return item !== this.state.employeeRegist[i];
      } else {
        return item !== this.state.employeeRegist[index];
      }
    });
    this.setState({
      employeeRegist: valueResult,
      children: arrResult,
      numChildren:
        this.state.numChildren > 0
          ? this.state.numChildren - 1
          : this.state.numChildren
    });
    if (this.state.employeeRegist.length <= 1) {
      this.setState({
        show: false
      });
    }
  };
  show = () => {
    this.setState({
      show: true
    });
  };
  inputValue = data => {
    this.setState({
      employeeRegist: [
        ...this.state.employeeRegist.filter(i => {
          return i.id !== data.id;
        }),
        { ...data }
      ]
    });
  };
  employeeregist = e => {
    this.showToggle();
    this.show();
  };
  render() {
    return (
      <Container className="MCreate">
        <span className="Alltitle">상점 생성</span>
        <div className="MCreateWrap">
          <div className="MCreateLeft">
            <MarcketCreateInfoFirst
              inpoInputValue={this.inpoInputValue}
              typeMarcket={"marcket"}
              typeContact={"contact"}
              typeCorporateNum={"corporateNum"}
              typeBusiness={"BusinessType"}
              typeBank={"bank"}
              typeFranchise={"franchise"}
              typeCorporIndi={"CorporOrIndi"}
              defaultValue={"individual"}
              numValue={this.infoNumValue}
            />
          </div>
          <div className="MCreateRight">
            <div className="secondInfo">
              <MarcketCreateInfoSecond
                inpoInputValue={this.inpoSecInputValue}
                typeAccountNum={"account"}
                typeRoute={"route"}
              />

              <Remark
                title={"특이사항"}
                inputValue={this.inpoInputValue}
                typeTextArea={"textArea"}
              />
            </div>
          </div>
        </div>
        <span className="Alltitle ">
          상점 직원 <GrayBtn btn={"직원 추가"} onClick={this.showNAdd} />
        </span>
        <div>
          <EmployeeTable
            companyPositionTitle={"직급"}
            nameTitle={"직원명"}
            emailTitle={"이메일"}
            contactTitle={"연락처"}
            adminTitle={"권한"}
            deleteTitle={"삭제"}
            show={this.state.show}
            employeeList={this.state.employeeRegist}
            deleteBtn={this.onRemoveChild}
          />
          <div className="btnWrap">
            <RegstBtn btn={"등록하기"} onClick={this.handleSubmit} />
          </div>
        </div>
        <ShowModal
          isOpen={this.props.show}
          toggle={this.showToggle}
          modalTitle={"직원등록"}
          btn={<GrayBtn btn={"등록"} onClick={this.employeeregist} />}
          addBtn={
            <NormalBtn
              outline={true}
              btn={"직원추가"}
              onClick={this.onAddChild}
            />
          }
          contents={
            // <EmployeeRegist
            //   employeeId={"E-mail"}
            //   employeeName={"직원명"}
            //   employeeContact={"연락처"}
            //   btnTitle={"등록"}
            //   companyPosition={"직급"}
            //   adminCheck={"관리자 권한"}
            //   deletebtn={<DeleteBtn btn={"삭제"} outline={true} />}
            // />
            this.state.children
          }
        />
      </Container>
    );
  }
}

// export default MarcketWrap;
export default connect(
  state => ({
    data: state.postList.get("data"),
    err: state.postList.get("err"),
    show: state.btn.get("show"),
    // pending: state.getList.get("pending"),
    CreateMarcket: state.postList.get("CreateMarcket")
  }),
  dispatch => ({
    postListActions: bindActionCreators(postListActions, dispatch),
    btnAction: bindActionCreators(btnAction, dispatch)
  })
)(MarcketWrap);
