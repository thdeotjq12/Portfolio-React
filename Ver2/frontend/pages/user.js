import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import { Card, Avatar } from 'antd';
import { LOAD_USER_REQUEST } from '../reducers/user';

const User = ({id}) => {
    
    const dispatch = useDispatch();
    const { mainPosts } = useSelector(state => state.post);
    const { userInfo } = useSelector(state => state.user);
    useEffect( ()=> {
        dispatch({
            type: LOAD_USER_REQUEST,
            data: id,
        })
        dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            data: id,
        })
    }, []);
    return(
        <div>
            {userInfo ? 
            <Card
            actions={[
                <div key="twit">짹짹<br></br>{userInfo.Post}</div>,
                <div key="following">팔로잉<br></br>{userInfo.Followings}</div>,
                <div key="follower">팔로워<br></br>{userInfo.Followers}</div>,
              ]}
            >
                <Card.Meta
                 avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                 title={userInfo.nickname}
                ></Card.Meta>
            </Card>
            : null}
            {mainPosts.map(c=>( 
                <PostCard key={+c.createdAt} post={c}></PostCard>
            ))}
        </div>
    );
};
User.propTypes = {
    id: PropTypes.number.isRequired, // 2. 이러면 컴포넌트의 props에도 전달이 가능함 : 서버>getInitialProps> User.props 
}

User.getInitialProps = async (context) => {
    console.log('hashtag props on user.js' , context.query.id); // 서버에서 라우팅받은 정보가 넘어오는지 확인, _app.js에서 또 추가해줌
    return { id: parseInt(context.query.id, 10) } // 1. 이러면 컴포넌트의 props에도 전달이 가능함 : 서버>getInitialProps> User.props 
};
export default User;