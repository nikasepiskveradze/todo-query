import { useFormik } from "formik";
import useCreatePost from "../../queries/posts/useCreatePost";
import useUpdatePost from "../../queries/posts/useUpdatePost";
import { useHistory, useParams } from "react-router-dom";

const initialValues = {
  title: "",
  body: "",
};

const useNewPostForm = (postQuery) => {
  const { postId } = useParams();
  const history = useHistory();

  const createPost = useCreatePost();
  const updatePost = useUpdatePost();

  if (postQuery.data) {
    initialValues.title = postQuery.data.title;
    initialValues.body = postQuery.data.body;
  }

  return useFormik({
    enableReinitialize: true,

    initialValues: initialValues,

    onSubmit: (values) => {
      if (!Number(postId)) {
        createPost.mutate(values);
      } else {
        updatePost.mutate({ id: postId, ...values });
      }

      history.push("/");
    },
  });
};

export default useNewPostForm;
