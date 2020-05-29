
import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () =>{
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  //자식컴포넌트에 props 로 전달하기위해 사용
  const onLogout = useCallback(()=>{
    dispatch(logoutAction);
  }, [])
    return(
        <Card
        actions={[
          <div key="twit">
            짹잭
            <br />
            {user.Post.length}
          </div>,
          <div key="followings">
            팔로잉
            <br />
            {user.Followings.length}
          </div>,
          <div key="followers">
            팔로워
            <br />
            {user.Followers.length}
          </div>
        ]}
       >
        <Card.Meta
          avatar={<Avatar>{user.nickname[0]}</Avatar>}
          title={user.nickname}
        ></Card.Meta>
        <Button onClick={onLogout}>로그아웃</Button>
       </Card>
    );
}


export default UserProfile;