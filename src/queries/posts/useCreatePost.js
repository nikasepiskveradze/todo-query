import { useMutation, useQueryClient } from "react-query";
import * as postsService from "../../services/postsService";
import * as queries from "../../constants/queries";

// მუტაციის დროს 4 სხვადასხვა მომენტი გვაქვს, 4ვეს გამოყენება არაა სავალდებულო,
// onSuccess ის დროს რეალურად უკვე რესპონსი ბრუნდება და მაგ დროს შეგვიძლია შეცვალოთ რეალური დატა

// თუ Optimistic update გავკეთებ ეს კოდი უფრო მარტივდება

const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation(postsService.createPost, {
    onSuccess: async (post) => {
      if (queryClient.getQueryData(queries.POSTS)) {
        return queryClient.setQueryData(queries.POSTS, (posts) => [
          post,
          ...posts,
        ]);
      } else {
        await queryClient.invalidateQueries(queries.POSTS);
      }
    },
  });
};

export default useCreatePost;
