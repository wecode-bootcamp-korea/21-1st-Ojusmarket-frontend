import React from 'react';
import './DetailInfo.scss';

class DetailInfo extends React.Component {
  render() {
    return (
      <img
        className="info-image"
        alt="상품정보"
        // src="https://oasis.co.kr:9888/view/se/?imagePath=2021/4/12/se_202112c8dd2a-6a40-4f68-862f-b9ee699b20fa.jpg"
        src="images/ingredient/유기농블루베리.png"
      />
    );
  }
}
export default DetailInfo;