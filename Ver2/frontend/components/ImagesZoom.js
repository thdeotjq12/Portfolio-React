import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import Slick from 'react-slick';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
// header 안에들어있는 h1이란 의미, &은 사스나 레스 에서 자기자신 가르키는 태그(여기선 h1은 자식), 
const Header = styled.header`
  height: 44;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;  

  & h1{
    margin: 0;
    fontSize: 17px;
    color: #333;
    line-height: 44px;
  }
`;


const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;
// 스타일 이미 적용되있는 앤티디 컴포넌트도 스타일 적용 가능
const CloseBtn = styled(Icon)` 
 position: absolute;
 right: 0;
 top: 0;
 padding: 15;
 line-height: 14px;
 cursor: pointer;
`;
// div 스타일을 자식으로 넣은 경우
const Indicator = styled.div`
  text-align: center;
  & > div {
    width: 75;
    height: 30;
    line-height: 30px;
    borderRadius: 15;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;
const ImgWrapper = styled.div`
padding: 32px;
text-align: center;
& img{
  margin: 0 auto; 
  max-height: 750px;
}
`;
const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // 몇번째 이미지를 보고있는지

  return (
    <Overlay>
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn/>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0} // 처음 보여줄 이미지 
            afterChange={slide => setCurrentSlide(slide)} // 슬라이드 할때마다 index 변경
            infinite={false} // 무한 슬라이드 1~4 > 4~1
            arrows
            slidesToShow={1} // 한번에 1장만 보여줌
            slidesToScroll={1} // 한번에 1장만 슬라이드
          >
            {images.map((v) => {
              return (
                <ImgWrapper>
                  <img src={`http://localhost:3065/${v.src}`}/>
                </ImgWrapper>
              );
            })}
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1} / {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;