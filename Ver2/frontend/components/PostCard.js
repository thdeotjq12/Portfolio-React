import React, {useState, useCallback, useEffect} from 'react';
import { Card , Icon, Button, Avatar, Input, List, Form, Comment, Popover} from 'antd';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import { ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST, UNLIKE_POST_REQUEST, LIKE_POST_REQUEST, RETWEET_REQUEST, REMOVE_POST_REQUEST } from '../reducers/post';
import PostImages from './PostImages';
import PostCardContent from './PostCardContent';
import Link from 'next/link';
import { FOLLOW_USER_REQUEST, UNFOLLOW_USER_REQUEST } from '../reducers/user';
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
  const onRetweet = useCallback( ()=> {
    if(!me){
      return alert('로그인이 필요합니다.');
    }
    return dispath({
      type: RETWEET_REQUEST,
      data: post.id,
    })
  }, [me && me.id , post && post.id]);
  const onFollow = useCallback( userId => () =>{ 
    dispath({
      type: FOLLOW_USER_REQUEST,
      data: userId,
    });
  }, []);
  const onUnfollow = useCallback( userId => () => {
    dispath({
      type: UNFOLLOW_USER_REQUEST,
      data: userId,
    });
  }, []);
  const onRemovePost = useCallback( userId => ()=>{
    dispath({
      type: REMOVE_POST_REQUEST,
      data: userId,
    });
  });
  return (
    <div>
    <Card
      key={+post.createdAt}
      cover={post.Images[0] && <PostImages images={post.Images}></PostImages>}
      actions={[
        <Icon type="retweet" key="retweet" onClick={onRetweet}></Icon>,
        <Icon type="heart" key="heart" theme={liked ? 'twoTone' : 'outlined'} twoToneColor="#eb2f96" onClick={onToggleLike}></Icon>,
        <Icon type="message" key="message" onClick={onToggleComment}></Icon>,
        <Popover
          key="ellipsis"
          content={(
            <Button.Group>
              {me && post.UserId === me.id
                ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger" onClick={onRemovePost(post.id)}>삭제</Button>
                  </>
                )
                : <Button>신고</Button>}
            </Button.Group>
          )}
        >
            <Icon type="ellipsis" />
        </Popover>,
      ]}
      title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
      extra={!me || post.User.id === me.id ? null // 로그인안했을때, 자기 게시글일땐 안보임
        : me.Followings && me.Followings.find(v => v.id === post.User.id) // 로그인 후 남의게시글 목록 볼때 작성자가 내 팔로잉 목록에 들어있을떄 (팔로잉중)
        ? <Button onClick={onUnfollow(post.User.id)}>팔로우 취소</Button>
        : <Button onClick={onFollow(post.User.id)}>팔로우</Button>
      }
    >
    {post.RetweetId && post.Retweet ? (
     <Card
        cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images}></PostImages>}
     >
        <Card.Meta
          avatar={
            <Link href={{ pathname: '/user', query: { id: post.Retweet.User.id } }} as={`/user/${post.Retweet.User.id}`}> 
              <a><Avatar>{post.Retweet.User.nickname[0]}</Avatar></a> 
            </Link>
          } // <a> 태그를 윗줄로 올리면 무한 GET 에러남 , 이유 모름....
          title={post.Retweet.User.nickname}
          description={<PostCardContent postData={post.Retweet.content}></PostCardContent>} 
        ></Card.Meta>
      </Card> )
      :(
        <Card.Meta
            avatar={<Link href={{ 
            pathname: '/user', 
            query: { id: post.User.id } }} as={`/user/${post.User.id}`}> 
              <a><Avatar>{post.User.nickname[0]}</Avatar></a> 
            </Link>
          } // <a> 태그를 윗줄로 올리면 무한 GET 에러남 , 이유 모름....
          title={post.User.nickname}
          description={<PostCardContent postData={post.content}></PostCardContent>} 
        ></Card.Meta>
      )}
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