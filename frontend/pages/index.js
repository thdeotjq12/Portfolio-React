import React , {useEffect} from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useDispatch } from "react-redux";
import { LOG_IN } from '../reducers/user';
const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts : [{
    User: {
      id:1,
      nickname: '제로초',
    },
    content:'첫번째 게시글',
    img:'https://www.google.com/imgres?imgurl=http%3A%2F%2Fnewsimg.hankookilbo.com%2F2019%2F04%2F29%2F201904291390027161_3.jpg&imgrefurl=https%3A%2F%2Fwww.hankookilbo.com%2FNews%2FRead%2F201904291390027161&tbnid=NpMi5nVF1QK1MM&vet=12ahUKEwjR1LT9oPfoAhUEUJQKHa2LAhMQMygBegUIARD-Ag..i&docid=k3mACyoxPXAFMM&w=680&h=448&q=%EA%B3%A0%EC%96%91%EC%9D%B4&ved=2ahUKEwjR1LT9oPfoAhUEUJQKHa2LAhMQMygBegUIARD-Ag'
  }]
};
const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch({
      type: LOG_IN,
      data: {
        nickname :'대섭'
      },
    });
  }, []);
  return (
      <div>
       {dummy.isLoggedIn && <PostForm></PostForm> }

       {dummy.mainPosts.map(c => {
         return (
           <PostCard key={c} post={c}></PostCard>
         );
       })}
      </div>

  );
};
export default Home;
