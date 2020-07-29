// root , 모든 페이지의 레이아웃 역할
import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import PropTypes from "prop-types";
import reducer from "../reducers"; 
import { Provider } from 'react-redux'; // 리덕스 스테이트를 제공해줌(컴포넌트)
import createSagaMiddleware from 'redux-saga';
import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware, compose} from 'redux';
import rootSaga from "../sagas";

const Portfolio = ({ Component, store, pageProps }) => {
  return (
    // Provider 가 최상위 컴포넌트이기 때문에 자식 컴포넌트들이 스토어에 접근할 수 있음
    // 스토어는 state, action, reducer 가 합쳐진 것
   <Provider store={store}>
      <Head>
        <title>PortFolio</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.11/antd.css"
        ></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.11/antd.js"></script>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <AppLayout>
        <Component {...pageProps}></Component>
      </AppLayout>
   </Provider>
  );
};

Portfolio.propTypes = {
  Component: PropTypes.elementType.isRequired, // JSX 에 들어가는 모든것(문자열,컴포넌트,태그,숫자 등)
  store: PropTypes.object.isRequired, // isRequired : 필수값( 반드시 props가 존재, 없으면 경고 )
  pageProps : PropTypes.object.isRequired,
};

Portfolio.getInitialProps = async(context) =>{
  console.log(context);
  const { ctx, Component } = context;
  let pageProps = {};
  if(Component.getInitialProps){
    pageProps = await Component.getInitialProps(ctx);  // 라이프사이클: 1. server에서 라우팅, 2. page에서 getInit, 3. 여기로 전달(ctx)
  }
  return { pageProps };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  // 보안상 아래 부분은 실 배포용인지 개발용인지 구분
  const enhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(...middlewares),) : compose(applyMiddleware(...middlewares), !options.isServer && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f, ) 
  const store = createStore(reducer, initialState, enhancer);
  // 여기에 store 커스터마이징
  sagaMiddleware.run(rootSaga);
  return store;
}

export default withRedux(configureStore)(Portfolio);// 컴포넌트를 감싸줌(고차 컴포넌트- 기존컴포넌트 확장)
