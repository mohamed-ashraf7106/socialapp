import "./Post.css";
export default function Post(props) {
  function handleLike(e) {
    e.target.classList.toggle("activeLike");
  }
  function handleShare(e) {
    e.target.classList.add("shared");
  }
  let likess = props.likes;
  if (props.likes > 1000) {
    likess = `${(props.likes / 1000).toFixed(2)}k`;
  }
  return (
    <div className="bg-zinc-900 p-2 flex flex-col mt-2 ml-auto mr-auto max-w-3xl gap-2">
      <div className="flex gap-2 h-16 items-center">
        <img
          className="rounded-full"
          src={require(`../assets/posts/${props.pic}`)}
          alt=""
        />
        <h3>{props.un}</h3>
      </div>
      <div className="text-sm md:text-xl">{props.content}</div>
      <div style={{ zIndex: 1 }} className="flex justify-between pl-5 pr-5">
        <div onClick={(e) => handleLike(e)} className="flex flex-col">
          <i
            style={{ zIndex: -1 }}
            className="fa-solid fa-thumbs-up activitybaricon"
          ></i>
          <p style={{ zIndex: -1 }}>{likess}</p>
        </div>
        <i
          onClick={(e) => {
            handleShare(e);
          }}
          className="fa-solid fa-share activitybaricon"
        ></i>
      </div>
    </div>
  );
}
