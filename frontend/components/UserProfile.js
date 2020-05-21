
import React from "react";
import { Card } from "antd";
const dummy = {
    nickname: "Guest",
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedIn: false
  };
const UserProfile = () =>{
    return(
        <Card
        actions={[
          <div key="twit">
            짹잭
            <br />
            {dummy.Post.length}
          </div>,
          <div key="followings">
            팔로잉
            <br />
            {dummy.Followings.length}
          </div>,
          <div key="followers">
            팔로워
            <br />
            {dummy.Followers.length}
          </div>
        ]}
       >
        <Card.Meta
          avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
          title={dummy.nickname}
        ></Card.Meta>
       </Card>
    );
}


export default UserProfile;