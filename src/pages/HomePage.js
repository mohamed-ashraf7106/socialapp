import { posts } from "../data/postsjson"
import Post from "../components/Post"
let postsjsx = [];
for (let i = 0; i < posts.length; i++) {
  postsjsx.push(<Post key={i} un={posts[i].un} pic={posts[i].pic} content={posts[i].content} likes={posts[i].likes}/>)
}
export default function HomePage() {
  return(
    <div className="flex flex-col pl-5 pr-5">
      {postsjsx}
    </div>
  )
}