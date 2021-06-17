import React from 'react';
import { GET_PURCHASE_API } from '../../Utill/config';
import CheckCart from './CheckCart';
import './Purchase.scss';

class Purchase extends React.Component {
  constructor() {
    super();
    this.state = {
      orderName: '',
      orderAddress: '',
      orderPrice: 0,
      isViewCart: false,
      productId: '',
    };
  }

  handlePayment = () => {
    fetch('http://10.58.6.166:8000/orders/payment', {
      method: 'POST',
      body: JSON.stringify({
        ingredient_id: this.state.productId,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          this.props.history.push('/Payment');
        }
      });
  };

  handleCart = () => {
    this.setState({
      isViewCart: !this.state.isViewCart,
    });
  };

  componentDidMount() {
    fetch(`${GET_PURCHASE_API}`, {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6M30.Xd67BvcRiSNVJgAugHUg92lBMAdXkIekFx8icNdTJaQ',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          orderName: data.payment[0].name,
          orderAddress: data.payment[0].address,
          orderPrice: data.payment[0].price,
        });
      });
  }

  render() {
    const { isViewCart, orderAddress, orderPrice, orderName } = this.state;
    return (
      <div className="purchase">
        <div className="purchase-container">
          <div className="purchase-header">
            <span className="purchase-header__name">주문결제</span>
            <div>
              <span>01 장바구니</span>
              <span>&gt; 02 배송정보</span>
              <span className="location">&gt; 03 주문결제</span>
              <span>&gt; 04 주문완료</span>
            </div>
          </div>
          <div className="cart-check">
            <div className="header-line">
              주문 상품
              <button onClick={this.handleCart}>
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>
            {isViewCart && <CheckCart />}
          </div>
          <div className="receipt-container">
            <div className="info-container">
              <div className="header-line">배송안내</div>
              <div className="shipping-info">
                <p>꼭 확인하세요</p>
                <ul>
                  <li>
                    신규 회원 가입선물은 첫 구매 3만원 이상 결제시 드립니다.
                  </li>
                  <li>
                    구매 후 품절로 인하여 카드 취소/환불/입금등이 필요한 경우,
                    고객님의 불편을 최소화 하기 위해 결제금액의 5%를 포인트로
                    보상해 드리고 있습니다. (품절로 인한 포인트 환불 시 5%추가
                    보상지급) 적립 추가 5%+환불금액은 마이페이지에서
                    확인가능합니다.
                  </li>
                  <li>
                    포인트 보상 대신 결제 부분 취소를 원하시는 경우 1:1
                    고객센터에 메모 남겨주시면 24시간 이내에 취소하여
                    드리겠습니다. (핸드폰 결제 또는 안심결제시는 제외)
                  </li>
                  <li>
                    [결제완료] 단계에서는 마이페이지를 통해 직접 취소하실 수
                    있습니다.
                  </li>
                  <li>
                    [상품준비중] 단계에서는 고객센터로 취소문의주시기 바랍니다.
                  </li>
                  <li>
                    [포장완료] 단계에서는 냉장 보관소로 이동이 되어 주문취소나
                    변경이 불가능 합니다.
                  </li>
                </ul>
              </div>
            </div>
            <div className="receipt">
              <div className="header-line">배송지</div>
              <div className="delivery-style">
                <p>오져스배송</p>
              </div>
              <div className="order-info">
                <p>{orderName}</p>
                <p>{orderAddress}</p>
              </div>
              <div className="header-line">최종 결제금액</div>
              <div className="total-price">
                <div>
                  <span>상품금액</span>
                  <span className="price">
                    {Math.floor(orderPrice).toLocaleString()}
                    <b>원</b>
                  </span>
                </div>
                <div className="delivery-price">
                  <span>총 배송비</span>
                  <span className="price">
                    &#43;3,000<b>원</b>
                  </span>
                </div>
                <div className="total">
                  <span>총 주문금액</span>
                  <span className="price">
                    {(Math.floor(orderPrice) + 3000).toLocaleString()}
                    <b>원</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="purchase-submit">
            <button onClick={this.handlePayment}>결제하기</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Purchase;