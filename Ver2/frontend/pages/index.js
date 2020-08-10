import React , {useEffect} from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";


const Home = () => {
  const { me } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  const dispatch = useDispatch();
  const onScroll = () =>{
    //window.scrollY:현재위치, clientHeight: 스크롤바의 높이(현재화면), scrollHeight: 맨위에서 맨아래까지의 높이
    console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)
    if(window.scrollY +  document.documentElement.clientHeight > document.documentElement.scrollHeight -300){
      dispatch({
        type: LOAD_MAIN_POSTS_REQUEST,
        lastId: mainPosts[mainPosts.length -1].id // 마지막게시글 기준으로 다음게시글 불러옴(게시글 보고있는데 새 게시글이 추가되면, 밀려서 불러오게되서 마지막 게시글을 기준으로 계산해서 불러오기) 
      })
    }
  }
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
           <PostCard key={c} post={c}></PostCard>
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
