import React from 'react';
import './Delivery.scss';

class Delivery extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userPhone: '',
    };
  }
  render() {
    return (
      <div className="delivery">
        <div className="delivery-container">
          <div className="delivery-header">
            <span className="delivery-header__name">배송정보</span>
            <div>
              <span>01 장바구니</span>
              <span className="location">&gt; 02 배송정보</span>
              <span>&gt; 03 주문결제</span>
              <span>&gt; 04 주문완료</span>
            </div>
          </div>

          <div className="head-line">
            <span>&#42;주문자 정보</span>
          </div>
          <div className="user-info-container">
            <div>
              <label htmlFor="orderUserName">보내시는 분</label>
              <input id="orderUserName" name="orderUserName"></input>
            </div>
            <div>
              <label htmlFor="orderUserPhone">연락처</label>
              <input id="orderUserPhone" name="orderUserPhone"></input>
            </div>
          </div>

          <div className="head-line">
            <span>&#42;배송지 주소</span>
          </div>
          <div className="address">
            <div className="address-selection">
              <div>
                <label for="basic">
                  <input type="radio" id="basic" name="address" checked></input>
                  <span>기본 배송지</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" id="new" name="address"></input>
                  <span>직접입력</span>
                </label>
              </div>
            </div>
            <div className="address-info">
              <div className="user-info">
                <input></input>
                <input></input>
              </div>
              <div className="address-input">
                <div className="address-zip">
                  <input></input>
                  <button>주소찾기</button>
                </div>
                <div className="detailed-address">
                  <input></input>
                  <input></input>
                  <span>
                    배송을 위해 고객님의 주소가 맞는지 다시한번 확인해주세요
                  </span>
                </div>
              </div>
            </div>
            <div className="head-line">
              <span>&#42;배송방법 선택</span>
            </div>
            <div className="delivery-type">
              <label>
                <input type="radio" checked></input>
                <span>새벽배송 주문하기</span>
              </label>
            </div>
            <div className="head-line">
              <span>&#42;포장방법 선택</span>
            </div>
            <div className="choose-package">
              <div className="package-header">
                <span>
                  포장 하나도 자연에 가깝게! 풀무원생수를 얼려 아이스팩으로
                  사용합니다.
                </span>
              </div>
              <div className="package-option">
                <label>
                  <input type="radio" checked></input>
                  <span>최소포장 ( 생수와 포장재를 최소한으로 사용 )</span>
                </label>
                <label>
                  <input type="radio"></input>
                  <span>친환경 포장 (생수와 드라이아이스를 조금 사용)</span>
                </label>
                <label>
                  <input type="radio"></input>
                  <span>보냉재 더 추가 포장 (보냉재를 넉넉히 사용)</span>
                </label>
              </div>
            </div>
            <div className="package-recall">
              <h4>
                포장재 회수 요청
                <span>
                  &nbsp;(택배의 경우 택배사 사정으로 인하여 포장재를 회수하지
                  않습니다.)
                </span>
              </h4>
              <p>
                택배의 경우 택배사 사정으로 인하여 포장재를 회수하지 않습니다.
              </p>
              <div className="corona-notice">
                <div className="notice-header">
                  <div className="notice-image">
                    <i class="fas fa-bullhorn"></i>
                  </div>
                  <h5>알려드립니다.</h5>
                </div>
                <div className="notice-contents">
                  <p>
                    코로나 19 상황이 장기화됨에 따라 고객 여러분의 안전과 예방을
                    위해 재활용 박스 회수 서비스를 잠정 중단하게 되었으니
                    <br></br>
                    <br></br> 많은 양해 바랍니다.
                  </p>
                  <p>박스는 재활용이 가능하니 종이류로 배출하시면 됩니다.</p>
                </div>
              </div>
            </div>
            <div className="head-line">
              <span>&#42;배송 요청사항</span>
            </div>
            <div className="order-title">
              <div className="option-container">
                <span>배송메세지</span>
                <select>
                  <option>직접입력</option>
                  <option>배송 전, 연락바랍니다.</option>
                  <option>부재시, 전화 또는 문자 주세요.</option>
                  <option>부재시, 경비실에 맡겨주세요.</option>
                </select>
              </div>
              <div className="order-message">
                <input></input>
                <p>
                  매장에서 산지로 주문하는 경우 영수증번호와 주문시간을 입력해
                  주세요.
                </p>
              </div>
              <div className="submit">
                <button>주문서 작성 완료</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Delivery;
