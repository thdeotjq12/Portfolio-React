import React, { useState, useCallback } from "react";
import Link from "next/link";
import { Input, Button, Form } from "antd";
import { useDispatch, useSelector} from 'react-redux';
import { userInput } from "../pages/signup"; // 커스텀 훅 재사용
import { loginRequestAction, LOG_IN_REQUEST } from "../reducers/user";
import styled from 'styled-components';

const LoginError = styled.div`
  color: red;
`;
const LoginForm = () => {
  const [id, onChangeId] = userInput("");
  const [password, onChangePassword] = userInput("");
  const { isLoggingIn, logInErrorReason} = useSelector(state => state.user)
  const dispatch = useDispatch();
  const onSubmitForm = useCallback(e => {
      e.preventDefault();
      dispatch({
        type:LOG_IN_REQUEST,
        data: {
          userId: id,
          password,
        },
      });
    }, [id, password]);
  return (
    <Form onSubmit={onSubmitForm} style={{ padding :'10px'}}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required></Input>
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        ></Input>
      </div>
      <LoginError>{logInErrorReason}</LoginError>
      <div style={{ marginTop:'10px'}}>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
