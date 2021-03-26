import React from "react";
import usePost from "../../queries/posts/usePost";
import { useParams } from "react-router-dom";

const Post = (props) => {
  const { postId } = useParams();
  const postQuery = usePost(Number(postId));

  if (postQuery.isLoading) {
    return "Loading...";
  }

  return (
    <div className="concretePost">
      <h1>{postQuery.data.title}</h1>
      <div>{postQuery.data.body}</div>
    </div>
  );
};

export default Post;
