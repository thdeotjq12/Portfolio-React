import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Input, Form, Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE} from '../reducers/post';
const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
  const imageInput = useRef();
  const onsubmitForm = useCallback((e)=>{
    e.preventDefault(); // 이걸 안하면 새 페이지로 넘어감(싱글폼 들은 꼭 작성)
    if(!text || !text.trim()){
      return alert('게시글을 작성해주세요!');
    }
    const formData = new FormData(); // 게시글 최종적으로 올리는 용도, 필요는 없지만 라우터에서 upload.none 을 보여주기 위함(폼데이터 컨트롤)
    imagePaths.forEach((i)=>{
      formData.append('image', i); // req.body.image
    })
    formData.append('content', text); 
    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  },[text, imagePaths]);
  const onChangeText= useCallback((e)=>{
    setText(e.target.value);
  },[]);
  // 게시글 작성될때 작성폼 초기화
  useEffect(()=>{
    setText('')
  },[postAdded === true]);

  const onChangeImages = useCallback((e)=>{
    console.log(e.target.files);
    // multipart/form-data 이미지나 파일, 동영상등을 서버로 보낼때 사용 
    // multipart/form-data는 submit 시 서버로 데이터 전송 >>> 바로 보내지 않고 ajax로 보냄(spa 유지 위함) new FormData 이것도 ajax의 객체
    const imageFormData = new FormData(); // 폼에서 타입을 encType="multipart/form-data" 했을때 브라우저에서 FormData 객채를 제공.
    [].forEach.call(e.target.files, (f)=>{ // 그 FormData 객체안에 이미지파일을 각각 넣어줘야함
      imageFormData.append( 'image', f); // 게시글 같이 보내지 않고 이미지만 미리 보냄(같이 보내면 효율이 좋지 않음)
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    })
  }, []);

  const onClickImageUpload =useCallback( () =>{
    imageInput.current.click(); // 이미지업로드 버튼을 눌렀을때 그위의 input 을 누름 효과
  }, [imageInput.current]);
  const onRemoveImage = useCallback( index => () => { // 괄호가 있는 함수는 한번더 괄호를 붙여줘야함(고차함수)
    dispatch({
      type: REMOVE_IMAGE,
      index,
    })
  });
    return (
        <Form style={{ margin: '10px 0 20 px' }} encType="multipart/form-data" onSubmit={onsubmitForm}>
        <Input.TextArea
          maxLength={140}
          placeholder="어떤 신기한 일이 있었나요?"
          value={text}
          onChange={onChangeText}
        ></Input.TextArea>
        <div>
          <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages}></input>
          <Button onClick={onClickImageUpload}>이미지 업로드</Button>
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
          {imagePaths.map((v,i) => {
            return (
              <div key={v} style={{ display: "inline-block" }}>
                <img
                  src={`http://localhost:3065/${v}`}
                  style={{ width: "200px" }}
                  alt={v}
                ></img>
                <div>
                  <Button onClick={onRemoveImage(i)}>제거</Button>
                </div>
              </div>
            );
          })}
        </div>
      </Form>
    )
}

export default PostForm;