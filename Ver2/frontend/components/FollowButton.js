import React, { memo } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const FollowButton = memo(({ post, onUnfollow, onFollow }) => {
  const { me } = useSelector(state => state.user);
  return !me || post.User.id === me.id // 로그인안했을때, 자기 게시글일땐 안보임
    ? null 
    : me.Followings && me.Followings.find(v => v.id === post.User.id) // 로그인 후 남의게시글 목록 볼때 작성자가 내 팔로잉 목록에 들어있을떄 (팔로잉중)
      ? <Button onClick={onUnfollow(post.User.id)}>언팔로우</Button>
      : <Button onClick={onFollow(post.User.id)}>팔로우</Button>;
});

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
  onUnfollow: PropTypes.func.isRequired,
  onFollow: PropTypes.func.isRequired,
};

export default FollowButton;