import React, {useState, useCallback, useEffect} from 'react';
import { Card , Icon, Button, Avatar, Input, List, Form, Comment} from 'antd';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import { ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST, UNLIKE_POST_REQUEST, LIKE_POST_REQUEST } from '../reducers/post';
import PostImages from './PostImages';
import Link from 'next/link';
const PostCard = ( { post}) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { me }= useSelector(state => state.user);
  const { commentAdded, isAddingComment }= useSelector(state => state.post);
  const dispath = useDispatch();
  const liked = me && post.Likers && post.Likers.find(v => v.id === me.id);
  const onToggleComment = useCallback(() => {
    // 댓글창이 펼쳐져 있으면 닫고 펼치는 동작
    setCommentFormOpened(prev =>!prev);
    if(!commentFormOpened){ // 댓글창이 닫혀있는 경우
      dispath({
        type: LOAD_COMMENTS_REQUEST,
        data: post.id,
      })
    }
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
        content: commentText,
      },
    });
  }, [me && me.id, commentText]); // 객체확인 , 객체를 넣지말고 객체의 값을 넣자
  const onChangeCommentText = useCallback((e) =>{
    setCommentText(e.target.value);
  },[]);
  useEffect(()=>{
    setCommentText('');
  },[commentAdded ===true]);

  const onToggleLike = useCallback( () =>{
    if(!me){
      return alert('로그인이 필요합니다!');
    }
    if(liked){  // Likers : 좋아요 누른 사람들 배열로 들어있음
      dispath({
        type: UNLIKE_POST_REQUEST,
        data: post.id,
      })
    }else{ // 좋아요 안 누른 상태
      dispath({
        type: LIKE_POST_REQUEST,
        data: post.id,
      })
    }
  }, [me && me.id, post && post.id, liked])
  return (
    <div>
    <Card
    key={+post.createdAt}
    cover={post.Images[0] && <PostImages images={post.Images}></PostImages>}
    actions={[
      <Icon type="retweet" key="retweet"></Icon>,
      <Icon type="heart" key="heart" theme={liked ? 'twoTone' : 'outlined'} twoToneColor="#eb2f96" onClick={onToggleLike}></Icon>,
      <Icon type="message" key="message" onClick={onToggleComment}></Icon>,
      <Icon type="ellipsis" key="ellipsis"></Icon>
    ]}
    extra={<Button>팔로우</Button>}
  >
    <Card.Meta
      avatar={<Link href={{ 
        pathname: '/user', 
        query: { id: post.User.id } }} as={`/user/${post.User.id}`}> 
        <a><Avatar>{post.User.nickname[0]}</Avatar></a> 
        </Link>
      } // <a> 태그를 윗줄로 올리면 무한 GET 에러남 , 이유 모름....
      title={post.User.nickname}
      description={(
      <div>
        {post.content.split(/(#[^\s]+)/g).map((v)=>{
          if(v.match(/#[^\s]+/)){
            return (
              <Link
              href={{ pathname: '/hashtag', query: { tag: v.slice(1) }}} as={`/hashtag/${v.slice}`}
              key={v}
            >
              <a>{v}</a>
            </Link>
            );
          }
          return v;
      })}
      </div>
      )} // 게시물의 해쉬태그에 링크 걸어줘야함 (a tag로 하면 리액트 오류남, next의 Link tag 사용)
    ></Card.Meta>
  </Card>
  {commentFormOpened && (
        <>
          <Form onSubmit={onSubmitComment}>
            <Form.Item>
              <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isAddingComment}>삐약</Button>
          </Form>
          <List
            header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={(<Link href={{ 
                    pathname: '/user', 
                    query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                    <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                    </Link>
                  )}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </div>
  );
};
PostCard.propTypes = {
  post : PropTypes.shape({
   User : PropTypes.object,
   content : PropTypes.string,
   img : PropTypes.string,
   createdAt : PropTypes.object,
  }).isRequired,
}

export default PostCard;