import React from "react";
import { useHistory, useParams } from "react-router-dom";
import usePost from "../../queries/posts/usePost";
import { useState } from "react";
import useCreatePost from "../../queries/posts/useCreatePost";
import useUpdatePost from "../../queries/posts/useUpdatePost";
import { useEffect } from "react";

const NewPost = (props) => {
  const history = useHistory();
  const { postId } = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const postQuery = usePost(Number(postId));
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();

  // Populate data into inputs
  useEffect(() => {
    if (postQuery.data) {
      setTitle(postQuery.data.title);
      setBody(postQuery.data.body);
    }
  }, [postQuery.data]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const post = { title, body };

    if (!Number(postId)) {
      createPost.mutate(post);
    } else {
      updatePost.mutate({ id: postId, ...post });
    }

    history.push("/");
  };

  if (postQuery.isLoading) {
    return "Loading...";
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Title
        <input
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div>
        Body
        <input
          name="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPost;
