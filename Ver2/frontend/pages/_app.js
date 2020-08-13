// root , 모든 페이지의 레이아웃 역할
import React from "react";
import AppLayout from "../components/AppLayout";
import PropTypes from "prop-types";
import reducer from "../reducers"; 
import { Provider } from 'react-redux'; // 리덕스 스테이트를 제공해줌(컴포넌트)
import createSagaMiddleware from 'redux-saga';
import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware, compose} from 'redux';
import rootSaga from "../sagas";
import { LOAD_USER_REQUEST } from "../reducers/user";
import axios from "axios";
import Helmet from 'react-helmet';
import { Container } from 'next/app'; // _document.js 에서 renderpage 랜더링 할 수 있게 해줌 (검색엔진에서 head 부분 노출시켜줌)
const Portfolio = ({ Component, store, pageProps }) => {
  return (
    // Provider 가 최상위 컴포넌트이기 때문에 자식 컴포넌트들이 스토어에 접근할 수 있음
    // 스토어는 state, action, reducer 가 합쳐진 것
    <Container>
     <Provider store={store}>
      <Helmet
        title="DSS PortFolio"
        htmlAttributes={{ lang: 'ko'}}
        meta={[{
          charSet:'UTF-8',
        },{
          name:'viewport', 
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
        }, {
          'http-equiv': 'X-UA-Compatible', content: 'IE=edge',
        }, {
          name: 'description', content: 'DSS PortFolio',
        }, {
          name: 'og:title', content: 'NodeBird',
        }, {
          name: 'og:description', content: 'DSS PortFolio',
        }, {
          property: 'og:type', content: 'website',
        }]}
        link={[{
          rel: 'shortcut icon', href: '/favicon.ico',
        }, {
          rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.11/antd.css',
        }, {
          rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
        }, {
          rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
        }]}
      >
      </Helmet>
        <AppLayout>
          <Component {...pageProps}></Component>
        </AppLayout>
    </Provider>
   </Container>
  );
};

Portfolio.propTypes = {
  Component: PropTypes.elementType.isRequired, // JSX 에 들어가는 모든것(문자열,컴포넌트,태그,숫자 등)
  store: PropTypes.object.isRequired, // isRequired : 필수값( 반드시 props가 존재, 없으면 경고 )
  pageProps : PropTypes.object.isRequired,
};

Portfolio.getInitialProps = async (context) =>{
  console.log(context);
  const { ctx, Component } = context;
  let pageProps = {};
  const state = ctx.store.getState();// AppLayout 부분 SSR구조변경 
  // 리덕스 사가 호출순서 대로 코딩할 것.
  const cookie = ctx.isServer ? ctx.req.headers.cookie : '';// 클라이언트>서버 구조일땐 브라우저가 쿠키를 같이 넣어줬었는데(withCridentials:true),
  if(ctx.isServer && cookie){ // 서버일때(SSR)와 아닐때가 있기때문에 분기처리 해줌
    axios.defaults.headers.Cookie = cookie; // SSR은 직접 쿠키를 넣어줘야함
  }
  if(!state.user.me){ // AppLayout 에서 !me 일때 디스패치 해줬던 것 - 스토어에서 me 정보를 가져오기
    ctx.store.dispatch({
      type: LOAD_USER_REQUEST,
    })
  }
  if(Component.getInitialProps){
    pageProps = await Component.getInitialProps(ctx);  // 라이프사이클: 1. server에서 라우팅, 2. page에서 getInit, 3. 여기로 전달(ctx)
  }
  return { pageProps };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware , (store)=>(next)=>(action)=>{ //리덕스 사가 에러 찾는법 - 커스텀 미들웨어
    // console.log(action);
    next(action);
  }];
  // 보안상 아래 부분은 실 배포용인지 개발용인지 구분
  const enhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(...middlewares),) : compose(applyMiddleware(...middlewares), !options.isServer && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f, ) 
  const store = createStore(reducer, initialState, enhancer);
  // 여기에 store 커스터마이징
  store.sagaTask = sagaMiddleware.run(rootSaga); //SSR 추가
  return store;
}

export default withRedux(configureStore)(withReduxSaga(Portfolio));// 컴포넌트를 감싸줌(고차 컴포넌트- 기존컴포넌트 확장)
