import React from "react";
import { NormalBtn } from "./Btn";
const Table = ({ revenueList, openMemo }) => (
  <div className="tableWrap">
    <table>
      <thead>
        <tr>
          <th rowSpan={2}>결제일자</th>
          <th rowSpan={2}>취소일자</th>
          <th rowSpan={2}>카드사</th>
          <th rowSpan={2}>
            매출합계<br />(금액/건수)
          </th>
          <th rowSpan={2}>
            승인합계<br />(금액/건수)
          </th>
          <th rowSpan={1} colSpan={2}>
            승인취소
          </th>
          <th rowSpan={2}>승인번호</th>
          <th rowSpan={2}>회원명</th>
          <th rowSpan={2}>상품종류</th>
          <th rowSpan={2}>상품명</th>
          <th rowSpan={2}>개월/횟수</th>
          <th rowSpan={2}>승인자</th>
          <th rowSpan={2}>취소자</th>
          <th className="last" rowSpan={2} />
        </tr>
        <tr>
          <th>
            취소합계<br />(금액/건수)
          </th>
          <th>
            당일취소<br />(금액/건수)
          </th>
        </tr>
      </thead>
      <tbody>
        {revenueList.map((item, key) => {
          return (
            <tr key={key}>
              <td>{item.PayDate}</td>
              <td>{item.CancelDate}</td>
              <td>{item.Card}</td>
              <td>{item.RevenueAll}</td>
              <td>{item.ApprovalAll}</td>
              <td>{item.CancelAll}</td>
              <td>{item.TodayCancel}</td>
              <td>{item.ApprovalNum}</td>
              <td>{item.Name}</td>
              <td>{item.ProductName}</td>
              <td>{item.KindProduct}</td>
              <td>{item.MonthCount}</td>
              <td>{item.ApprovalName}</td>
              <td>{item.CancelName}</td>
              <td className="last">
                <NormalBtn onClick={openMemo} btn={"메모보기"} />
              </td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={3}>합계</td>
          <td>
            {revenueList
              .map((item, key) => {
                return item.RevenueAll;
              })
              .map(x => parseInt(x.replace(/,/g, ""), 10))
              .reduce((a, b) => a + b)}원
          </td>
          <td>
            {revenueList
              .map((item, key) => {
                return item.ApprovalAll;
              })
              .map(x => parseInt(x.replace(/,/g, ""), 10))
              .reduce((a, b) => a + b)}원
          </td>
          <td>
            {revenueList
              .map((item, key) => {
                return item.CancelAll;
              })
              .map(x => parseInt(x.replace(/,/g, ""), 10))
              .reduce((a, b) => a + b)}원
          </td>
          <td>
            {revenueList
              .map((item, key) => {
                return item.TodayCancel;
              })
              .map(x => parseInt(x.replace(/,/g, ""), 10))
              .reduce((a, b) => a + b)}원
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td className="last" />
        </tr>
      </tbody>
    </table>
  </div>
);
export default Table;
