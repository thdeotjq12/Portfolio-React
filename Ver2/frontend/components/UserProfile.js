
import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';
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
          <Link href="/profile" key="twit" prefetch><a><div>짹짹<br></br>{me.Posts ? me.Posts.length : 0 }</div></a></Link>,
          <Link href="/profile" key="following" prefetch><a><div>팔로잉<br></br>{me.Followings ? me.Followings.length : 0}</div></a></Link>,
          <Link href="/profile" key="follower" prefetch><a><div>팔로워<br></br>{me.Followers ? me.Followers.length : 0}</div></a></Link>,
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