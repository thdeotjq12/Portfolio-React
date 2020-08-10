import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../components/PostCard';
const Hashtag = ({tag}) => {
    console.log("해쉬태그 페이지 tag:", tag);
    const dispatch = useDispatch();
    const { mainPosts } = useSelector(state => state.post);

    return(
        <div>
            {mainPosts ? mainPosts.map(c => (
                <PostCard key={+c.createdAt} post={c}></PostCard> 
            )): null} 
        </div>// 강의에서는(6.3 18:49) ? 처리 안해줘도 됨, 나는 map undefined 에러, 왜 ?
    );
};
Hashtag.propTypes = {
    tag: PropTypes.string.isRequired, 
}

Hashtag.getInitialProps = async (context) => {
    const tag = context.query.tag;
    console.log('hashtag props on hastag.js' , context.query.tag, context); // 서버에서 라우팅받은 정보가 넘어오는지 확인, _app.js에서 또 추가해줌
    context.store.dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: tag,
    })
    return { tag };
};
export default Hashtag;