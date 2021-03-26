import { useMutation, useQueryClient } from "react-query";
import * as postsService from "../../services/postsService";
import * as queries from "../../constants/queries";

// გაშლილად მიწერია ახლა onSuccess ში ლოგიკები, თორე ისე უფრო მარტივადაც შეიძლება დაწერა

const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation(postsService.deletePost, {
    onSuccess: async (post, postId) => {
      const previousPosts = queryClient.getQueryData(queries.POSTS);

      const nextPosts = previousPosts.filter((item) => item.id !== postId);

      queryClient.setQueryData(queries.POSTS, nextPosts);
      // await queryClient.invalidateQueries(queries.POSTS);
    },
  });
};

export default useDeletePost;
