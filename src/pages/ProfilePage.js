import { posts } from "../data/postsjson";
import Post from "../components/Post";
export default function Profile() {
  let myposts = posts.filter((post) => {
    return post.un === "Mohamed Ashraf";
  });
  let postsjsx = [];
  for (let i = 0; i < myposts.length; i++) {
    postsjsx.push(
      <Post
        key={i}
        un={myposts[i].un}
        pic={myposts[i].pic}
        content={myposts[i].content}
        likes={myposts[i].likes}
      />
    );
  }
  return (
    <div className="pl-5 pr-5">
      <div className="flex gap-2 pl-5 pr-5 max-w-3xl ml-auto mr-auto bg-slate-700 p-4 items-center">
        <img className="rounded-full w-20 md:w-24" src={require("../assets/header/profile.png")} />
        <h1 className="text-sm md:text-2xl">Mohamed Ashraf</h1>
        <h3 className="ml-auto">
          Born : 7/1/06
        </h3>
      </div>
      <div className="flex flex-col">{postsjsx}</div>
    </div>
  );
}
