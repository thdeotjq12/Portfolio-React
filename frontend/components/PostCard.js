import React from 'react';
import { Card , Icon, Button, Avatar} from 'antd';
import PropTypes from 'prop-types';


const PostCard = ( { post}) => {
  return (
    <Card
    key={+post.createdAt}
    cover={post.img && <img alt="example" src={post.img}></img>}
    actions={[
      <Icon type="retweet" key="retweet"></Icon>,
      <Icon type="heart" key="heart"></Icon>,
      <Icon type="message" key="message"></Icon>,
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