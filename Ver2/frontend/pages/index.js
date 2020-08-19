import React , {useEffect, useCallback, useRef} from "react";
import PostForm from "../containers/PostForm";
import PostCard from "../containers/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";


const Home = () => {
  const { me } = useSelector(state => state.user);
  const { mainPosts, hasMorePost } = useSelector(state => state.post);
  const dispatch = useDispatch();
  const countRef = useRef([]);//요청보냈던 id 기록(프론트 쓰로틀링 구현 - 반복요청 방지)
  const onScroll = useCallback(() =>{
    //window.scrollY:현재위치, clientHeight: 스크롤바의 높이(현재화면), scrollHeight: 맨위에서 맨아래까지의 높이
    // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)
    if(window.scrollY +  document.documentElement.clientHeight > document.documentElement.scrollHeight -300){
      if(hasMorePost){ // 더 불러올 게시글이 있을때 요청(스크롤 할때마다 요청하는 것을 방지)
        const lastId = mainPosts[mainPosts.length -1].id // 마지막게시글 기준으로 다음게시글 불러옴(게시글 보고있는데 새 게시글이 추가되면, 밀려서 불러오게되서 마지막 게시글을 기준으로 계산해서 불러오기) 
        if(!countRef.current.includes(lastId)){
          dispatch({
            type: LOAD_MAIN_POSTS_REQUEST,
            lastId,
          });
          countRef.current.push(lastId); // 요청보낼때마다 countRef 에 lastId가 담겨진다
        }
        
      }
    }
  }, [mainPosts.length, hasMorePost]);
  useEffect( ()=>{
    window.addEventListener('scroll', onScroll);
    return () =>{ // 이벤트 사용하고 나서 꼭 정리해주자
      window.removeEventListener('scroll', onScroll);
    }
  }, [mainPosts.length]);

  return (
      <div>
       {me && <PostForm></PostForm> }
       {mainPosts.map(c => {
         return (
           <PostCard key={c.id} post={c}></PostCard>
         );
       })}
      </div>

  );
};
// context 는 _app.js 에서 pageProps = await Component.getInitialProps(ctx); 의 ctx 임, context안에는 store 있고,
// store안에 리덕스 함수들이 있음
Home.getInitialProps = async (context) => {
  // console.log(Object.keys(context));
  // 1. SSR: 이렇게 디스패치를 여기서 해줌, 2. _app.js 에 withReduxSaga 추가(next 용 리덕스 사가)
  context.store.dispatch({
    type: LOAD_MAIN_POSTS_REQUEST
  })
}
export default Home;
