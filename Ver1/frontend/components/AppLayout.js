import React, { useEffect } from "react";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import LoginForm from "../components/LoginForm";
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_USER_REQUEST } from "../reducers/user";

const AppLayout = ({ children }) => {
  const {  me } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(!me){
      dispatch({
        type: LOAD_USER_REQUEST,
      });
    }
  }, []);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search
            enterButton
            style={{ verticalAlign: "middle" }}
          ></Input.Search>
        </Menu.Item>
      </Menu>
      {/* <Link href="/Signup">
        <a>
          <Button>회원가입</Button>
        </a>
      </Link> */}
      <Row gutter={8}>
        {/* xs=작은화면일때, md=큰 화면일때 비율(24가 최대) */}
        <Col xs={24} md={6}>
          {me ? <UserProfile/>
          : (
            <LoginForm></LoginForm>
          )}
        </Col>
        <Col xs={24} md={6}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          3 
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node // 랜더링 될 수 있는 컴포넌트들
};

export default AppLayout;
