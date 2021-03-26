import { useQuery, useQueryClient } from "react-query";
import * as queries from "../../constants/queries";
import * as postsService from "../../services/postsService";

// Option: initialData, ეს ოფშენი იმისთვისაა, რო თუ უკვე ჩამოფეჩილი პოსტებიდან თუ კონკრეტული პოსტის რაღაც ნაწილი ჩამოფეჩილია
// მაგიტომაცაა, რომ "/" ების გვერდიდან გამოსვლისას Loading არ ჩანს, ქეშიდან იღებს ინიციალიზაციისთვის, თუმცა რესპონსი რო დაბრუნდება შეცვლის ორიგინალი დატითს
// ეს ძაან თესლი ფიჩერია იმენა

// Enable ოფშენი იმისთვისა რო ავტომატურად არ გაიგზავნოს ქოლი მანამ postId თრუ არ იქნება
// ახალი პოსტის შექმნის screenზე ყოველთვის false იქნება, ამიტომ ქოლი არ გაიგზავნება
// editing ის დროს postId გვექნება და გაიგზავნება ქოლი რო ინფუთებში ავსახოთ
// თუმცა აქაც იგივე პრინციპი მუშაობს, ინფუთებში ჯერ ინიციალიზებული დატა ჩაისმევა თუკი არსებობს

const usePost = (postId) => {
  const queryClient = useQueryClient();

  return useQuery(
    [queries.POSTS, postId],
    () => postsService.fetchPost(postId),
    {
      enabled: !!postId,

      initialData: () => {
        return queryClient
          .getQueryData(queries.POSTS)
          ?.find((post) => post.id === postId);
      },
    }
  );
};

export default usePost;
