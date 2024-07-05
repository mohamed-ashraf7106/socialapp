import { useState } from "react";
import "./shorts.css";
export default function Shorts() {
  let [current, setcurrent] = useState(4);
  function handlechangevideo(num) {
    if (current === 7 && num === 1) {
      setcurrent(1);
      return
    }
    if (current === 1 && num === -1) {
      setcurrent(7);
      return
    }
    setcurrent(current + num)
  }
  return (
    <div className="flex items-center pl-2 pr-2">
      <span className="skip"
        onClick={() => {
          handlechangevideo(1);
        }}
      >
        <i class="fa-solid fa-angle-left "></i>
      </span>
      <video
        autoPlay={true}
        muted
        style={{ height: "calc(100vh - 102px)" }}
        controls
        className=" mt-4 mb-4 ml-auto mr-auto"
        src={require(`../assets/videos/video-${current}.mp4`)}
        type="video/mp4"
      />
      <span
      className="skip"
        onClick={() => {
          handlechangevideo(-1);
        }}
      >
        <i class="fa-solid fa-angle-right"></i>
      </span>
    </div>
  );
}
