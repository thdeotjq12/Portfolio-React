import React, { useState, useCallback, useEffect } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { SIGN_UP_REQUEST , isSigningUp } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import Router from 'next/router';
// Coustom hook 훅에 기능을 추가해서 새로 만듬 ( 중복방지 등 )
// useState(hook) 는 커스텀 훅 제외한 곳에서 사용하지 않기
export const userInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

////////////////////////////////

const Signup = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwrodError, setpasswordError] = useState(false);
  const [termError, setTermError] = useState(false);
  const dispatch = useDispatch()
  const { isSigningUp, me } = useSelector(state =>state.user)

  useEffect(()=>{
    if(me){
      alert('로그인 성공');
      Router.push('/');
    }
  },[me && me.id])
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log({
        id,
        nick,
        password,
        passwordCheck,
        term
      });
      if (password !== passwordCheck) {
        return setpasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
      return dispatch({
        type: SIGN_UP_REQUEST,
        data:{
        id,
        password,
        nick,
        },
      });
    }, [password, passwordCheck, term]
  );
  const onChangeId = e => {
    setId(e.target.value);
  };
  const onChangeNick = e => {
    setNick(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const onChangePasswordChk = useCallback(
    e => {
      setpasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );
  const onChangeTerm = useCallback(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input
            name="user-id"
            required
            value={id}
            onChange={onChangeId}
          ></Input>
        </div>

        <div>
          <label htmlFor="user-nick">닉네임</label>
          <Input
            name="user-nick"
            required
            value={nick}
            onChange={onChangeNick}
          ></Input>
        </div>
        <div>
          <label htmlFor="user-pass">비밀번호</label>
          <br />

          <Input
            name="user-pass"
            type="password"
            required
            value={password}
            onChange={onChangePassword}
          ></Input>
        </div>
        <div>
          <label htmlFor="user-pass-chk">비밀번호 체크</label>
          <br />

          <Input
            name="user-pass-chk"
            type="password"
            required
            value={passwordCheck}
            onChange={onChangePasswordChk}
          ></Input>
          {passwrodError && (
            <div style={{ color: "red" }}> 비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
            동의합니다.
          </Checkbox>
          {termError && (
            <div style={{ color: "red" }}> 약관에 동의 해주세요.</div>
          )}
        </div>
        <div>
          <div style={{ marginTop: 10 }}></div>
          <Button type="primary" htmlType="submit" loading={isSigningUp}>
            가입하기
          </Button>
        </div>
      </Form>
    </>
  );
};
export default Signup;
