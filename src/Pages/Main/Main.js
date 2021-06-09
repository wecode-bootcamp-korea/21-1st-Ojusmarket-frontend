import React from 'react';
import Header from '../../Component/HeaderComponent/Header';
import Food from './Food/Food';
import Recipe from './Recipe/Recipe';
import Footer from '../../Component/FooterComponent/Footer';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      isChangeTap: 0,
      isTransform: 0,
      isTransition: '1s ease-in-out',
    };
  }

  nextBtn = () => {
    if (this.state.isTransform > -500) {
      this.setState({
        isTransform: this.state.isTransform - 100,
        isTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        isTransform: 0,
        isTransition: '0s',
      });
    }
  };

  prevBtn = () => {
    if (this.state.isTransform < 0) {
      this.setState({
        isTransform: this.state.isTransform + 100,
        isTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        isTransform: -500,
        isTransition: '0s',
      });
    }
  };

  handleTap = id => {
    this.setState({
      isChangeTap: id,
    });
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.isTransform > -500) {
        this.setState({
          isTransform: this.state.isTransform - 100,
          isTransition: '1s ease-in-out',
        });
      } else {
        this.setState({
          isTransform: 0,
          isTransition: '0s',
        });
      }
    }, 4000);
  }

  render() {
    const count = this.state.isTransform;
    const tab = {
      0: <Food />,
      1: <Recipe />,
    };
    return (
      <>
        <Header />
        <div className="main">
          <div className="image-slider">
            <ul
              className="image-box"
              style={{
                transform: `translateX(${count}vw)`,
                transition: `${this.state.isTransition}`,
              }}
            >
              <li>
                <img
                  className="slide1"
                  alt="슬라이드 이미지"
                  src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_sIHL.jpg"
                />
              </li>
              <li>
                <img
                  className="slide2"
                  alt="슬라이드 이미지"
                  src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_6EiX.jpg"
                />
              </li>
              <li>
                <img
                  className="slide3"
                  alt="슬라이드 이미지"
                  src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_i3vL.jpg"
                />
              </li>
              <li>
                <img
                  className="slide4"
                  alt="슬라이드 이미지"
                  src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_i3vL.jpg"
                />
              </li>
              <li>
                <img
                  className="slide5"
                  alt="슬라이드 이미지"
                  src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_kgYf.jpg"
                />
              </li>
              <li>
                <img
                  className="slide1"
                  alt="슬라이드 이미지"
                  src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_sIHL.jpg"
                />
              </li>
            </ul>
            <div className="image-side-btn">
              <button onClick={this.prevBtn}>
                <i class="fas fa-chevron-left"></i>
              </button>
              <button onClick={this.nextBtn}>
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
            {/* <div className="nav-dot">
              <div>
                <button className="btn01" onCLick={this.handleBtn}></button>
              </div>
              <div>
                <button className="btn02" onCLick={this.handleBtn}></button>
              </div>
              <div>
                <button className="btn03" onCLick={this.handleBtn}></button>
              </div>
              <div>
                <button className="btn04" onCLick={this.handleBtn}></button>
              </div>
              <div>
                <button className="btn05" onCLick={this.handleBtn}></button>
              </div>
            </div> */}
          </div>
          <div>
            <div className="product-container">
              <div className="product-selection">
                <div>
                  <button onClick={() => this.handleTap(0)}>주문도하고</button>
                </div>
                <div>
                  <button onClick={() => this.handleTap(1)}>요리도 하고</button>
                </div>
              </div>
            </div>
            <div>{tab[this.state.isChangeTap]}</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
