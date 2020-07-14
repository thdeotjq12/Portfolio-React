
import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";

const UserProfile = () =>{
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();
  //자식컴포넌트에 props 로 전달하기위해 사용
  const onLogout = useCallback(()=>{
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, [])
    return(
        <Card
        actions={[
          
        ]}
       >
        <Card.Meta
          avatar={<Avatar>{me.nickname[0]}</Avatar>}
          title={me.nickname}
        ></Card.Meta>
        <Button onClick={onLogout}>로그아웃</Button>
       </Card>
    );
}


export default UserProfile;