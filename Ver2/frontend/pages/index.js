import React , {useEffect} from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";


const Home = () => {
  const { me } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  const dispatch = useDispatch();

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
