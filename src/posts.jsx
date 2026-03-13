import { use } from "react";
import Post from "./post";


export default function Posts({ fetchPost }) {
  const posts = use(fetchPost);

  return (  
    <div className="users">
      <h3>All Post Details : {posts.length}</h3>
      {
        posts.map(post => <Post post={post}></Post>)
      }
    </div>
  );
}
