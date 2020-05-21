import React, { useState, useCallback } from "react";
import Link from "next/link";
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from "antd";
import { userInput } from "../pages/signup"; // 커스텀 훅 재사용
const LoginForm = () => {
  const [id, onChangeId] = userInput("");
  const [password, onChangePassword] = userInput("");
  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      console.log({ id, password });
    },
    [id, password]
  );
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
      <div style={{ marginTop:'10px'}}>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/Signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
