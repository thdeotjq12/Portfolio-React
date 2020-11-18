import React, { useState, useEffect } from "react";
import { LinkOutlined, GithubOutlined } from '@ant-design/icons';
import Link from "next/link";
// import IMG from '../src/images/portfolio/test.png';
// import IMG2 from '../public/asset/test.png';
// import IMG from '../src/images/portfolio/test.PNG';

// import IMG2 from '../images/portfolio/test.png'
import styled from 'styled-components'; // 새로고침하면 적용안되던거 버전 5 > 4로 낮춰서 해결됨

//styled-components 사용이유

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
      https://f1.codingworldnews.com/2019/06/h82daa54gc.png      
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
const ProjectItem = styled.div`
    display: flex;
    line-height: 1.5;
`
const ProjectLeftWrap = styled.div`
    margin-right: 30px;
    display: block;
`

const ProjectRightWrap = styled.div`
    flex-grow: 1;
    display: block;
`
const ProjectImg = styled.img`
    flex-shrink: 1;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 24px;
    border: 1px solid #ddd;
    src: url(${props => props.src});
    // src : url(
    //   https://f1.codingworldnews.com/2019/06/h82daa54gc.png 
    //   );
    alt="통전열융착기 이미지"
`
const ProjectTitle = styled.div`
    display: flex;
    margin: 8px 0;
    align-items: center;
`
const ProjectTitleText = styled.div`
    font-size: 28px;
    margin: 0;
    font-weight: 700;
    line-height: 1.2;
`
const ProjectSubTitle = styled.p`
    color: #606dbb;
    font-weight: 700;
    margin: 0;
`

const ProjectText = styled.div`
    color: #222;
    font-size: 17px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const ProjectTags = styled.p`
    color: #009688;
    margin-bottom: 30px;
    font-size: 15px;
    font-weight: 600;
    font-style: italic;
`
const ProjectLink = styled.div`
    display: flex;
    align-items: center;
`
const ProjectLinkIcon = styled.i`

`
const ProjectLinkHref = styled.a`
    color: #1e88e5;
    font-weight: 700;
    text-decoration: none;
    padding: 2px 0;
    font-size: 18px;
    margin: 4px 0;
    border-bottom: 1px dotted #ccc;
`
const Divider = styled.div`
    margin: 100px 0;
`
//AboutME 부분
const MainAboutMe = styled.div`
    padding-bottom: 60px;
    text-align: center;
    background-image: url(
      https://mail.google.com/mail/u/0?ui=2&ik=4544cfb32b&attid=0.3&permmsgid=msg-a:r-4864628288181859791&th=175dc51522a5d847&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_VTKO9CXcTb4A3-XIaIDzLt1_X1paB_aQk08HyiZnIm2I6uvT_2n3_JaZBn4XRq1rUQBpQpvAG7nLwSkeustQAqkNC39c6BrZxvXXaQK1FeLJ3USh3pDoTxHQ&disp=emb&realattid=ii_khnnp3v41
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
  const awaitWindow = typeof window !== "undefined";
  const [scrollY, setScrollY] = useState(awaitWindow  && window.scrollY); 
  
  //스크롤 이벤트
  const onScroll = (e)=>{
    console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)

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
              <ProjectItem>
                <ProjectLeftWrap>
                  <ProjectImg src="https://mail.google.com/mail/u/0?ui=2&ik=4544cfb32b&attid=0.4&permmsgid=msg-a:r-4864628288181859791&th=175dc51522a5d847&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_e1L_tL8FORM3-_tN7eLEtydoRlbCAyOaZwTEHnWZl7RQcfApNAHzaGGlb3oV7wc5r3xy034ElUy0tgmeWwirQWRcC3PIXfTfGGSsMTXpB603UqEKYoDYMUq4&disp=emb&realattid=ii_khnnp3uv0" />
                </ProjectLeftWrap>
                <ProjectRightWrap>
                  <ProjectTitle>
                    <ProjectTitleText>에어그로멧 삽입기</ProjectTitleText>
                  </ProjectTitle>
                  <ProjectSubTitle>UI/소스코드 100% 개발</ProjectSubTitle>
                  <ProjectText>(주)케이엔씨 에서 개발. C#으로 오퍼레이터분들이 PC(터치 모니터)를 통해 설비를 제어할 수 있는
                    응용프로그램을 개발함. 구멍이 있는 고무링을 UTP 케이블에 삽입 하기위한 설비.
                  </ProjectText>
                  <ProjectTags>#Visual Studio 2017 C#</ProjectTags>
                  <ProjectLink>
                    {/* <GithubOutlined style={{fontSize:'20px' , marginRight:'8px'}} /> */}
                    {/* <ProjectLinkHref href="https://vowed21.github.io/portfolio/">에어그루멧 삽입기 git.</ProjectLinkHref> */}
                  </ProjectLink>
                </ProjectRightWrap>
              </ProjectItem>

              <Divider></Divider>

              <ProjectItem>
                <ProjectLeftWrap>
                  <ProjectImg src="https://mail.google.com/mail/u/0?ui=2&ik=4544cfb32b&attid=0.5&permmsgid=msg-a:r-4864628288181859791&th=175dc51522a5d847&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ81DyXlm0nHksXe48a8_lTpzus7Ll705lOgJIo51TYaoFKSozhKqeDmT39h-h9mX_KYerAMO6Kwlieau_8cxdVif4gYqmbjgdMZdNTbT3jcfY75kVhLYIIZZRQ&disp=emb&realattid=ii_khnnp3v92" />
                </ProjectLeftWrap>
                <ProjectRightWrap>
                  <ProjectTitle>
                    <ProjectTitleText>통전열융착기</ProjectTitleText>
                  </ProjectTitle>
                  <ProjectSubTitle>UI/소스코드 100% 개발</ProjectSubTitle>
                  <ProjectText>(주)케이엔씨 에서 개발. 마찬가지로 오퍼레이터를 위한 자동화설비 PC응용프로그램.
                    쓰레드를 이용해 양방향으로 나눠서 동시작업이 가능하며 Serial(Modbus protocol)방식의 온도센서 활용, (주)아진엑스택 메인보드를 사용해
                    서보모터를 제어하였다.
                  </ProjectText>
                  <ProjectTags>#Visual Studio 2017 C# #Ajinextek Library</ProjectTags>
                  <ProjectLink>
                    {/* <GithubOutlined style={{fontSize:'20px' , marginRight:'8px'}} /> */}
                    {/* <ProjectLinkHref href="https://vowed21.github.io/portfolio/">통전열융착기 git.</ProjectLinkHref> */}
                  </ProjectLink>
                </ProjectRightWrap>
              </ProjectItem>

              <Divider></Divider>

              <ProjectItem>
                <ProjectLeftWrap>
                  <ProjectImg src="https://mail.google.com/mail/u/0?ui=2&ik=4544cfb32b&attid=0.2&permmsgid=msg-a:r-4864628288181859791&th=175dc51522a5d847&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_cntMUH-0Ce2Uq4sJCB4ZE8HMQQw2mxbBQVisfOpQRS_mtvBILhykn6a_vzp_SfHM0cg1ael7whKYs0pl66t12r5I2T9iREkGcf3ZR-9oYyrTeLYGw4gxFMP4&disp=emb&realattid=ii_khnnp3vf3" />
                </ProjectLeftWrap>
                <ProjectRightWrap>
                  <ProjectTitle>
                    <ProjectTitleText>급여박사 - iOS,Android 앱</ProjectTitleText>
                  </ProjectTitle>
                  <ProjectSubTitle>디자인(아이콘 이미지 등)을 제외한 React Native 100%, API는 기존 Restful API 서버 유지보수만</ProjectSubTitle>
                  <ProjectText>(주)라인페이롤서비스 에서 개발. 기업만을 대상으로한 어플리케이션. 주 목적은 GPS, Bluetooth를 이용한 간편한 출퇴근 이며,
                    당사의 경리, 인사관리 PC응용프로그램과 연동되어 연차신청, 급여대장 등의 기능이 있음. 
                     
                  </ProjectText>
                  <ProjectTags>#iOS #Android #React Native #Restful API </ProjectTags>
                  <ProjectLink>
                    <LinkOutlined style={{fontSize:'20px' , marginRight:'8px'}} />
                    <ProjectLinkHref href="https://play.google.com/store/apps/details?id=com.infra.drpayapp&hl=ko">구글 PlayStore </ProjectLinkHref>
                  </ProjectLink>
                </ProjectRightWrap>
              </ProjectItem>

              <Divider></Divider>

              <ProjectItem>
                <ProjectLeftWrap>
                  <ProjectImg src="https://mail.google.com/mail/u/0?ui=2&ik=4544cfb32b&attid=0.1&permmsgid=msg-a:r-4864628288181859791&th=175dc51522a5d847&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_77QRksmkVOI8CCbcNOuFFWECN0RQEXqzcfrlV-ipsRrP6rEiARpB3VWAwbKoPPTPtc12obN80KG5iulrPp76XoTZXf_3_xhu0ZaMpxE8T4e8Q_Q9O9BfTNoE&disp=emb&realattid=ii_khnnp3vk4" />
                </ProjectLeftWrap>
                <ProjectRightWrap>
                  <ProjectTitle>
                    <ProjectTitleText>SNS 클론 코딩</ProjectTitleText>
                  </ProjectTitle>
                  <ProjectSubTitle>React 100% 개발, 온라인 강의 참고</ProjectSubTitle>
                  <ProjectText>Fullstack/Web 개발경험을 위해 만든 사이트. SNS를 참고하여 만들었고 
                    회원가입, 글쓰기, 팔로우등의 기능이 있다. React를 제대로 활용하기 위한 라이브러리들이 다수 사용되었으며,
                    추가 기능, 디자인에 대한 고민을 비롯해 적용할 수 있는 다른 기술들에 대해 학습중.
                  </ProjectText>
                  <ProjectTags>#React #NodeJS #Next #Redux(saga) #Styled-components #Express #Sequelize(mysql) #AWS EC2 등 
                  </ProjectTags>
                  <ProjectLink>
                    <GithubOutlined style={{fontSize:'20px' , marginRight:'8px'}} />
                    <ProjectLinkHref href="https://github.com/thdeotjq12/Portfolio-React">Git 주소로 이동</ProjectLinkHref>
                  </ProjectLink>
                  <ProjectLink>
                    <LinkOutlined style={{fontSize:'20px' , marginRight:'8px'}} />
                    <ProjectLinkHref href="https://studydss.kro.kr/">사이트로 이동</ProjectLinkHref>
                  </ProjectLink>
                </ProjectRightWrap>
              </ProjectItem>

            </MainsubWarp>
          </Mainsub>
          <MainAboutMe>
            <MainsubWarp>
              <Maintitle style={{color:"#fff"}}>AboutMe</Maintitle>
              <AboutMeText>프론트엔드 개발자</AboutMeText>
              <AboutMeText>풀스택 지향, 공부중</AboutMeText>
              <AboutMeText>새로운 기술에 관심있음</AboutMeText>
              <AboutMeText>현재 구직중</AboutMeText>
              <AboutMeText>취미는 헬스</AboutMeText>
            </MainsubWarp>
          </MainAboutMe>
          <MainContact>
            <MainsubWarp>
              <ContactTitle>Contact</ContactTitle>
              <ContactText>thdeotjq12@naver.com</ContactText>
            </MainsubWarp>
          </MainContact>
          {/* <Center>
            <SolutionOutlined type="user-type"  style={{ fontSize: '52px' }} onClick={Onc}>123</SolutionOutlined>
            <TwitterOutlined style={{ fontSize: '52px' }} onClick={Onc}  twoToneColor="#eb2f96"/>
          </Center> */}
        </Back>

  );
};
export default Portfolio;
