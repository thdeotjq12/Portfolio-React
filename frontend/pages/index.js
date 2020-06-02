import React , {useEffect} from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction, logoutRequestAction, SIGN_UP_REQUEST } from '../reducers/user';

const Home = () => {
  const dispatch = useDispatch();
  const {user , isLoggedIn} = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  console.log(user)
  useEffect(()=> {
    dispatch({
      type: SIGN_UP_REQUEST,
    });
  }, []);
  return (
      <div>
        {user ? <div>로그인 했습니다 : { user.nickname }</div> : <div>로그아웃 했습니다.</div> }
       {isLoggedIn && <PostForm></PostForm> }
       {mainPosts.map(c => {
         return (
           <PostCard key={c} post={c}></PostCard>
         );
       })}
      </div>

  );
};
export default Home;
