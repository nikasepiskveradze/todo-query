import { useQuery } from "react-query";
import * as queries from "../../constants/queries";
import * as postsService from "../../services/postsService";

const usePosts = () => {
  return useQuery(queries.POSTS, postsService.fetchPosts);
};

export default usePosts;
