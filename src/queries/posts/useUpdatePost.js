import { useMutation, useQueryClient } from "react-query";
import * as postsService from "../../services/postsService";
import * as queries from "../../constants/queries";

const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation(postsService.updatePost, {
    onSuccess: async (post) => {
      queryClient.setQueryData([queries.POSTS, post.id], post);

      if (queryClient.getQueryData(queries.POSTS)) {
        queryClient.setQueryData(queries.POSTS, (posts) =>
          posts.map((item) => (item.id === post.id ? post : item))
        );
      } else {
        await queryClient.invalidateQueries(queries.POSTS);
      }
    },
  });
};

export default useUpdatePost;
