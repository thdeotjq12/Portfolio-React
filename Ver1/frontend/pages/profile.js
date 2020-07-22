import React from "react";
import { Form,  Button, Input, Card, Icon , List } from "antd";
import NicknameEditForm from '../components/NicknameEditForm';
const Profile = () => {
  return (
    <div>
      <NicknameEditForm />
      <List 
        style ={{ marginBottom : '20px'}}  
        grid={{ gutter :4, xs:2, md:3}}
        header={<div>팔로잉 목록</div>}
        size ="small"
        loadMore={<Button style={{width: '100%'}}>더 보기</Button>}
        bordered
        dataSource={['제로초','바보','노드버드오피셜']}
        renderItem={item => (
          <List.Item style ={{ marginTop :'20px'}}>
            <Card actions={[<Icon key="stop" type="stop"></Icon>]}> <Card.Meta description={item}></Card.Meta> </Card>
          </List.Item>
        )}
      >
     </List>
     <List 
        style ={{ marginBottom : '20px'}}  
        grid={{ gutter :4, xs:2, md:3}}
        header={<div>팔로워 목록</div>}
        loadMore={<Button style={{width: '100%'}}>더 보기</Button>}
        bordered
        dataSource={['제로초','바보','노드버드오피셜']}
        renderItem={item => (
          <List.Item style ={{ marginTop :'20px'}}>
            {/* 배열안에 jsx 쓸때는 key를 꼭 넣어주자( []:반복문을 의미, 넣어줘야 인식됨) */}
            <Card actions={[<Icon key="stop" type="stop"></Icon>]}> <Card.Meta description={item}></Card.Meta> </Card>
          </List.Item>
        )}>
     </List>
    </div>
  );
};
export default Profile;
