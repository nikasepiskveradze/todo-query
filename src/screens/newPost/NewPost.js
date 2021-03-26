import React from "react";
import { useParams } from "react-router-dom";
import usePost from "../../queries/posts/usePost";
import useNewPostForm from "./useNewPostForm";
import Spinner from "../../components/spinner/Spinner";

const NewPost = (props) => {
  const { postId } = useParams();
  const postQuery = usePost(Number(postId));
  const { values, handleChange, handleSubmit } = useNewPostForm(postQuery);

  if (postQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container mt-3 w-50 p-3 card">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <input
            type="body"
            className="form-control"
            id="body"
            name="body"
            value={values.body}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
