import React from 'react';
import { Input, Form, Button } from "antd";
const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts : [{
      User: {
        id:1,
        nickname: '제로초',
      },
      content:'첫번째 게시글',
      img:'https://www.google.com/imgres?imgurl=http%3A%2F%2Fnewsimg.hankookilbo.com%2F2019%2F04%2F29%2F201904291390027161_3.jpg&imgrefurl=https%3A%2F%2Fwww.hankookilbo.com%2FNews%2FRead%2F201904291390027161&tbnid=NpMi5nVF1QK1MM&vet=12ahUKEwjR1LT9oPfoAhUEUJQKHa2LAhMQMygBegUIARD-Ag..i&docid=k3mACyoxPXAFMM&w=680&h=448&q=%EA%B3%A0%EC%96%91%EC%9D%B4&ved=2ahUKEwjR1LT9oPfoAhUEUJQKHa2LAhMQMygBegUIARD-Ag'
    }]
  };
  
const PostForm = () => {
    return (
        <Form style={{ margin: '10px 0 20 px' }} encType="multipart/form-data">
        <Input.TextArea
          maxLength={140}
          placeholder="어떤 신기한 일이 있었나요?"
        ></Input.TextArea>
        <div>
          <Button>이미지 업로드</Button>
          <Button
            type="primary"
            style={{ float: "right" }}
            htmlType="submit"
          >
            짹짹
          </Button>
        </div>
        <div>
          {dummy.imagePaths.map((v, i) => {
            return (
              <div key={v} style={{ display: "inline-block" }}>
                <img
                  src={"http://localhost:3065/"}
                  style={{ width: "200px" }}
                  alt={v}
                ></img>
                <div>
                  <Button>제거</Button>
                </div>
              </div>
            );
          })}
        </div>
      </Form>
    )
}

export default PostForm;