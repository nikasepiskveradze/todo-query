import React from "react";
import usePosts from "../../queries/posts/usePosts";
import { Link, useHistory } from "react-router-dom";
import useDeletePost from "../../queries/posts/useDeletePost";

const Posts = (props) => {
  const history = useHistory();
  const postsQuery = usePosts();
  const deletePost = useDeletePost();

  const handleRedirect = (postId) => {
    history.push(`/${postId}`);
  };

  const handleRedirectToEdit = (postId) => {
    history.push(`/edit-post/${postId}`);
  };

  if (postsQuery.isLoading) {
    return "Loading...";
  }

  return (
    <>
      <Link to="/new-post">New post</Link>

      <div className="postWrapper">
        {postsQuery.data.map((post) => (
          <div key={post.id} className="postItem">
            {post.title}

            <div>
              <button onClick={() => handleRedirectToEdit(post.id)}>
                Edit
              </button>
              <button onClick={() => deletePost.mutate(post.id)}>Delete</button>

              <button onClick={() => handleRedirect(post.id)}>
                Go to Full page
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
