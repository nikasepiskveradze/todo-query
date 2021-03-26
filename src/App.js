import { Switch, Route } from "react-router-dom";
import Posts from "./screens/posts/Posts";
import Post from "./screens/post/Post";
import NewPost from "./screens/newPost/NewPost";

const App = () => {
  return (
    <Switch>
      <Route path="/new-post" component={NewPost} exact />
      <Route path="/edit-post/:postId" component={NewPost} exact />
      <Route path="/:postId" component={Post} exact />
      <Route path="/" component={Posts} exact />
    </Switch>
  );
};

export default App;
