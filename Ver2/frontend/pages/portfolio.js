import React, { useState, useEffect } from "react";
import { LinkOutlined, GithubOutlined } from '@ant-design/icons';
import Projects from "../components/Projects"
import styled from 'styled-components'; // 새로고침하면 간헐적 적용안됨 버전 5 > 4로 낮춰서 임시해결

//참고 사이트 https://vowed21.github.io/portfolio/

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;
const Back = styled.div`
    // background: #99CC99;
    background: #fff;
`;
const BackText = styled.div`
    text-align: center;
    width: 100%;
`
const H1 = styled.div`
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`
const P = styled.div`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const IntroImg = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(
      /background.png
    );
    display: flex;
    align-items: center;
    height: 100vh;
    color: #fff;
    font-size: 3rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,.9);
    background-position: right bottom ${props => props.px}px;
`
/// 헤더부분
const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: transparent;
    color: #fff;
`
// 메뉴부분
const MenuitemWrap = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: center;
`
const Menuitem = styled.div`
    font-size: 22px;
    font-weight: 400;
    color: #ddd;
    margin: 0 20px;
    cursor: pointer;
`
const MenuitemSelected = styled.div`
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    margin: 0 20px;
    cursor: pointer;
`
//내용부분
const Mainsub = styled.div`
    display: block; 
`
const MainsubWarp = styled.div`
    max-width: 1080px;
    margin: auto;
    padding-left: 4%;
    padding-right: 4%;
`
const Maintitle = styled.div`
    text-align: center;
    font-size: 4rem;
    margin: 0;
    padding: 60px 0;
    display: block;

    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`
const Divider = styled.div`
    margin: 100px 0;
`
//AboutME 부분
const MainAboutMe = styled.div`
    padding-bottom: 60px;
    text-align: center;
    background-image: url(
      /pastel_back.jpg
    );
    background-position: 50%;
    background-size: cover;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
`
const AboutMeText = styled.p`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
`
//Contact 부분
const MainContact = styled.div`
    padding-bottom: 100px;
    background-color: #262626;
    color: #fff;
    text-align: center;
    font-size: 24px;
    display: block;
`
const ContactTitle = styled.div`
    text-align: center;
    font-size: 4rem;
    margin: 0;
    padding: 60px 0;
    display: block;
    font-weight: bold;
`
const ContactText = styled.div`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #fff;
    text-align: center;
    font-size: 24px;
`


const Portfolio = () => {
  const [stlBack, setstlBack] = useState(0); // 스크롤에 따른 스타일 제어(배경)
  const [stlMenu, setstlMenu] = useState(0); // 스크롤에 따른 스타일 제어(메뉴)
  const awaitWindow = typeof window !== "undefined"; // nextjs 사전 렌더링 시 자바스크립트 객체인 window가 없어 에러방지
  const [scrollY, setScrollY] = useState(awaitWindow  && window.scrollY); 
  
  //스크롤 이벤트
  const onScroll = (e)=>{
    // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)

    // setstlBack(awaitWindow  && (window.scrollY < 11 && window.scrollY!==0) ?  window.scrollY+100 : window.scrollY );
    setstlBack(awaitWindow  &&  window.scrollY  );
    setstlMenu(awaitWindow  &&  window.scrollY < 650 ? (window.scrollY !== 0 ? window.scrollY +100 : 0) : 750 );
  }
  useEffect( ()=>{
    awaitWindow  && window.addEventListener('scroll', onScroll);
    return ()=>{
      awaitWindow  && window.removeEventListener('scroll', onScroll);
    };
  }, [awaitWindow  && window.scrollY])

  const MenuClick = (X, Y) =>{

    awaitWindow && window.scrollTo(X, Y);
  }

  return (
        <Back>
          <IntroImg style={{backgroundPosition:  `right bottom -${stlBack}px` }}>
            <BackText>
              <H1>
                Developer
                <br/>
                송대섭
              </H1>
              <P>#React #NextJS #Javascript #AWS #NodeJS #Express</P>
            </BackText>

          </IntroImg>
          <Header style={{backgroundColor: `rgba(0, 0, 0, 0.${stlMenu})` }}>
            <MenuitemWrap>
              <Menuitem onClick={()=> MenuClick(0, 0)}>Intro</Menuitem>
              <Menuitem onClick={()=> MenuClick(0, 1000)}>Projects</Menuitem>
              <Menuitem onClick={()=> MenuClick(0, 3000)}>AboutMe</Menuitem>
              <Menuitem onClick={()=> MenuClick(0, 3000)}>Contact</Menuitem>
            </MenuitemWrap>
          </Header>
          <Mainsub>
            <MainsubWarp>
              <Maintitle>PROJECTS</Maintitle>
              <Projects 
                title={"에어그로멧 삽입기"} 
                subTitle={"UI/소스코드 100% 개발"} 
                text={"(주)케이엔씨 에서 개발. C#으로 오퍼레이터분들이 PC(터치 모니터)를 통해 설비를 제어할 수 있는 응용프로그램을 개발함. 구멍이 있는 고무링을 UTP 케이블에 삽입 하기위한 설비."} 
                tags={"#Visual Studio 2017 C#"} 
                imgURL={"/airg.png"} 
                linkURL={""} 
                linkText={""} 
                linkURLGit={""}
                linkTextGit={""}
              >   
              </Projects>
              <Divider></Divider>
              <Projects 
                title={"통전열융착기"} 
                subTitle={"UI/소스코드 100% 개발"} 
                text={"(주)케이엔씨 에서 개발. 마찬가지로 오퍼레이터를 위한 자동화설비 PC응용프로그램. 쓰레드를 이용해 양방향으로 나눠서 동시작업이 가능하며 Serial(Modbus protocol)방식의 온도센서 활용, (주)아진엑스택 메인보드를 사용해 서보모터를 제어하였다."} 
                tags={"#Visual Studio 2017 C# #Ajinextek Library"} 
                imgURL={"/hitpush.png"} 
                linkURL={""} 
                linkText={""} 
                linkURLGit={""}
                linkTextGit={""}
              >   
              </Projects>
              <Divider></Divider>
              <Projects 
                title={"급여박사 - iOS,Android 앱"} 
                subTitle={"디자인(아이콘 이미지 등)을 제외한 React Native 100%, API는 기존 Restful API 서버 유지보수만"} 
                text={"(주)라인페이롤서비스 에서 개발. 기업만을 대상으로한 어플리케이션. 주 목적은 GPS, Bluetooth를 이용한 간편한 출퇴근 이며, 당사의 경리, 인사관리 PC응용프로그램과 연동되어 연차신청, 급여대장 등의 기능이 있음."} 
                tags={"#iOS #Android #React Native #Restful API"} 
                imgURL={"/drpay.jpg"} 
                linkURL={"https://play.google.com/store/apps/details?id=com.infra.drpayapp&hl=ko"} 
                linkText={"구글 PlayStore"} 
                linkURLGit={""}
                linkTextGit={""}
              >   
              </Projects>
              <Divider></Divider>
              <Projects 
                title={"SNS 클론 코딩"} 
                subTitle={"React 100% 개발, 온라인 강의 참고"} 
                text={"Fullstack/Web 개발경험을 위해 만든 사이트. SNS를 참고하여 만들었고 회원가입, 글쓰기, 팔로우등의 기능이 있다. React를 제대로 활용하기 위한 라이브러리들이 다수 사용되었으며, 추가 기능, 디자인에 대한 고민을 비롯해 적용할 수 있는 다른 기술들에 대해 학습중."} 
                tags={"#React #NodeJS #Next #Redux(saga) #Styled-components #Express #Sequelize(mysql) #AWS EC2 등"} 
                imgURL={"/sns.jpg"} 
                linkURL={"https://studydss.kro.kr/"} 
                linkText={"사이트로 이동"} 
                linkURLGit={"https://github.com/thdeotjq12/Portfolio-React"}
                linkTextGit={"Git 주소로 이동"}
              >   
              </Projects>
            </MainsubWarp>
          </Mainsub>
          <MainAboutMe>
            <MainsubWarp>
              <Maintitle style={{color:"#fff"}}>AboutMe</Maintitle>
              <AboutMeText>프론트엔드 개발자</AboutMeText>
              <AboutMeText>풀스택 지향, 공부중</AboutMeText>
              <AboutMeText>새로운 기술에 관심있음</AboutMeText>
              <AboutMeText>현재 구직중</AboutMeText>
              <AboutMeText>최근 취미는 운동</AboutMeText>
            </MainsubWarp>
          </MainAboutMe>
          <MainContact>
            <MainsubWarp>
              <ContactTitle>Contact</ContactTitle>
              <ContactText>thdeotjq12@naver.com</ContactText>
            </MainsubWarp>
          </MainContact>
        </Back>

  );
};
export default Portfolio;
