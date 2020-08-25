import React, { useEffect, useCallback } from "react";
import { Form,  Button, Input, Card, Icon , List } from "antd";
import { useSelector , useDispatch} from 'react-redux';
import NicknameEditForm from '../containers/NicknameEditForm'; // 폼은 state가 빈번하게 변하므로 분리를 해주자
import PostCard from '../containers/PostCard';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, UNFOLLOW_USER_REQUEST, REMOVE_FOLLOWER_REQUEST } from "../reducers/user";
import { LOAD_USER_POSTS_REQUEST } from "../reducers/post";
import FollowList from '../components/FollowList';
const Profile = () => {
  const dispatch = useDispatch();
  const { followerList, followingList, hasMoreFollower, hasMoreFollowing } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  
  const onUnfollow = useCallback(userId => () => {
    dispatch({
      type: UNFOLLOW_USER_REQUEST,
      data: userId,
    })
  },[])
  const onRemoveFollower = useCallback(userId => () => {
    dispatch({
      type: REMOVE_FOLLOWER_REQUEST,
      data: userId,
    })
  },[])
  const loadMoreFollowings = useCallback( ()=>{
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
      offset: followingList.length, // (더보기 기능:3개씩) 기본값 limit = 3(처음 데이터 개수) > 3개씩 늘어남
    })
  },[ followingList.length])
  const loadMoreFollowers = useCallback( ()=>{
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
      offset: followerList.length,
    })
  },[followerList.length])
  return (
    <div>
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" 
      data={followingList}
      hasMore={hasMoreFollowing} 
      onClickMore={loadMoreFollowings}
      onClickStop={onUnfollow}
      ></FollowList>
      <FollowList header="팔로워 목록" 
      data={FollowList}
      hasMore={hasMoreFollower} 
      onClickMore={loadMoreFollowers}
      onClickStop={onRemoveFollower}
      ></FollowList>
      <div>
        {mainPosts ? mainPosts.map(c => (
            <PostCard key={+c.createdAt} post={c}></PostCard> 
        )): null} 
      </div> 
    </div>
  );
};

Profile.getInitialProps= async (context)=>{
  const state = context.store.getState();
  context.store.dispatch({
    type: LOAD_FOLLOWERS_REQUEST,
    data: state.user.me && state.user.me.id,
  });
  context.store.dispatch({
    type: LOAD_FOLLOWINGS_REQUEST,
    data: state.user.me && state.user.me.id,
  });
  context.store.dispatch({
    type: LOAD_USER_POSTS_REQUEST,
    data: state.user.me && state.user.me.id,
  });
}

export default Profile;
