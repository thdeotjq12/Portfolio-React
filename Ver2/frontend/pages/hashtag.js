import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../components/PostCard';
const Hashtag = ({tag}) => {
    console.log("해쉬태그 페이지 tag:", tag);
    const dispatch = useDispatch();
    const { mainPosts, hasMorePost } = useSelector(state => state.post);
    const onScroll = useCallback(() =>{
        //window.scrollY:현재위치, clientHeight: 스크롤바의 높이(현재화면), scrollHeight: 맨위에서 맨아래까지의 높이
        // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)
        if(window.scrollY +  document.documentElement.clientHeight > document.documentElement.scrollHeight -300){
          if(hasMorePost){ // 더 불러올 게시글이 있을때 요청(스크롤 할때마다 요청하는 것을 방지)
            dispatch({
              type: LOAD_HASHTAG_POSTS_REQUEST,
              lastId: mainPosts.length > 0 && mainPosts[mainPosts.length -1].id, // 마지막게시글 기준으로 다음게시글 불러옴(게시글 보고있는데 새 게시글이 추가되면, 밀려서 불러오게되서 마지막 게시글을 기준으로 계산해서 불러오기) 
              data: tag,
            })
          }
        }
    }, [mainPosts.length, hasMorePost]);
    useEffect( ()=>{
        window.addEventListener('scroll', onScroll);
        return () =>{ // 이벤트 사용하고 나서 꼭 정리해주자
          window.removeEventListener('scroll', onScroll);
        }
    }, [mainPosts.length]);
    return(
        <div>
            {mainPosts ? mainPosts.map(c => (
                <PostCard key={c.id} post={c}></PostCard> 
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