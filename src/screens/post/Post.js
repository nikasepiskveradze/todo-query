import React from "react";
import usePost from "../../queries/posts/usePost";
import { useHistory, useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";

const Post = (props) => {
  const { postId } = useParams();
  const history = useHistory();
  const postQuery = usePost(Number(postId));

  if (postQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container mt-3 w-50">
      <h1>{postQuery.data?.title}</h1>
      <div>{postQuery.data?.body}</div>

      <button className="mt-3 btn btn-primary" onClick={() => history.goBack()}>
        Back
      </button>
    </div>
  );
};

export default Post;
