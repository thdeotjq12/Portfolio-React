import React, { useCallback, useState, useEffect } from 'react';
import { Input, Form, Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST} from '../reducers/post';
const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
  const onsubmitForm = useCallback((e)=>{
    e.preventDefault(); // 이걸 안하면 새 페이지로 넘어감(싱글폼 들은 꼭 작성)
    dispatch({
      type: ADD_POST_REQUEST,
      data:{
        text,
      },
    });
  },[]);
  const onChangeText= useCallback((e)=>{
    setText(e.target.value);
  },[]);
  // 게시글 작성될때 작성폼 초기화
  useEffect(()=>{
    setText('')
  },[postAdded === true]);
    return (
        <Form style={{ margin: '10px 0 20 px' }} encType="multipart/form-data" onSubmit={onsubmitForm}>
        <Input.TextArea
          maxLength={140}
          placeholder="어떤 신기한 일이 있었나요?"
          value={text}
          onChange={onChangeText}
        ></Input.TextArea>
        <div>
          <Button>이미지 업로드</Button>
          <Button
            type="primary"
            style={{ float: "right" }}
            htmlType="submit"
            loading={isAddingPost}
          >
            짹짹
          </Button>
        </div>
        <div>
          {imagePaths.map((v) => {
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