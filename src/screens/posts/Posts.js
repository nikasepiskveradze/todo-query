import React from "react";
import usePosts from "../../queries/posts/usePosts";
import { Link, useHistory } from "react-router-dom";
import useDeletePost from "../../queries/posts/useDeletePost";
import Spinner from "../../components/spinner/Spinner";

const Posts = (props) => {
  const history = useHistory();
  const postsQuery = usePosts();
  const deletePost = useDeletePost();

  if (postsQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <Link to="/new-post" className="btn btn-success ml-3 mb-3 mt-3">
        New post
      </Link>
      <div className="mx-auto row row-cols-1 row-cols-md-3 g-4">
        {postsQuery.data.map((post) => (
          <div className="col mb-4" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>

              <button
                className="btn btn-primary mb-3"
                onClick={() => history.push(`/${post.id}`)}
              >
                Go to Full page
              </button>

              <button
                className="btn btn-success mb-3"
                onClick={() => history.push(`/edit-post/${post.id}`)}
              >
                Edit
              </button>

              <button
                onClick={() => deletePost.mutate(post.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
