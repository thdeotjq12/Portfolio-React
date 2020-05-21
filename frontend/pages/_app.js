// root , 모든 페이지의 레이아웃 역할
import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import PropTypes from "prop-types";
import reducer from "../reducers"; 
import { Provider } from 'react-redux'; // 리덕스 스테이트를 제공해줌(컴포넌트)
import withRedux from 'next-redux-wrapper'
import { createStore} from 'redux';

const Portfolio = ({ Component, store }) => {
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
      </Head>
      <AppLayout>
        <Component></Component>
      </AppLayout>
   </Provider>
  );
};

Portfolio.propTypes = {
  Component: PropTypes.elementType, // JSX 에 들어가는 모든것(문자열,컴포넌트,태그,숫자 등)
  store: PropTypes.object,
};

export default withRedux((initialState, options) => {
  const store = createStore(reducer, initialState);
  // 여기에 store 커스터마이징
  return store;
})(Portfolio);// 컴포넌트를 감싸줌(고차 컴포넌트- 기존컴포넌트 확장)
