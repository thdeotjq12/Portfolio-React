import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => {
  return (
    <div>
      {postData.split(/(#[^\s]+)/g).map((v) => {
        if (v.match(/#[^\s]+/)) {
          return (
            <Link
              href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }}
              as={`/hashtag/${v.slice(1)}`}
              key={v}
            >
              <a>{v}</a>
            </Link>
          );
        }
        return v;
      })}
    </div> // 게시물의 해쉬태그에 링크 걸어줘야함 (a tag로 하면 리액트 오류남, next의 Link tag 사용)
  );
};

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;