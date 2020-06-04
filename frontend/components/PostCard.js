import React, {useState, useCallback, useEffect} from 'react';
import { Card , Icon, Button, Avatar, Input, List, Form, Comment} from 'antd';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const PostCard = ( { post}) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { me }= useSelector(state => state.user);
  const { commentAdded, isAddingComment }= useSelector(state => state.post);
  const dispath = useDispatch();
  const onToggleComment = useCallback(() => {
    // 댓글창이 펼쳐져 있으면 닫고 펼치는 동작
    setCommentFormOpened(prev =>!prev);
  }, []);
  const onSubmitComment = useCallback((e) =>{
    e.preventDefault();
    if(!me){
      return alert('로그인이 필요합니다.');
    }
    dispath({
      type:ADD_COMMENT_REQUEST,
      data:{
        postId: post.id,
      },
    });
  }, [me && me.id]); // 객체확인 , 객체를 넣지말고 객체의 값을 넣자
  const onChangeCommentText = useCallback((e) =>{
    setCommentText(e.target.value);
  },[]);
  useEffect(()=>{
    setCommentText('');
  },[commentAdded ===true]);
  return (
    <div>
    <Card
    key={+post.createdAt}
    cover={post.img && <img alt="example" src={post.img}></img>}
    actions={[
      <Icon type="retweet" key="retweet"></Icon>,
      <Icon type="heart" key="heart"></Icon>,
      <Icon type="message" key="message" onClick={onToggleComment}></Icon>,
      <Icon type="ellipsis" key="ellipsis"></Icon>
    ]}
    extra={<Button>팔로우</Button>}
  >
    <Card.Meta
      avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
      title={post.User.nickname}
      description={post.content}
    ></Card.Meta>
  </Card>
  {commentFormOpened && (
    <>
      <Form onSubmit={onSubmitComment}>
        <Form.Item>
          <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText}></Input.TextArea>
        </Form.Item> 
        <Button type="primary" htmlType="submit" loading={isAddingComment}>삐약</Button>
      </Form>
      <List 
        header ={`${post.Comments ? post.Comments.length : 0} 댓글`}
        itemLayout="horizontal"
        dataSource={post.Comments || []}
        renderItem={(item => (
        <li>
          <Comment 
           author={item.User.nickname}
           avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
           content={item.content}

          >

          </Comment>
        </li>
      ))}     
      > 
        
      </List>
    </>
  )}
  </div>
  )
}
PostCard.propTypes = {
  post : PropTypes.shape({
   User : PropTypes.object,
   content : PropTypes.string,
   img : PropTypes.string,
   createdAt : PropTypes.object,
  })
}

export default PostCard;