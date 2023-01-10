import { useEffect, useRef, useState } from "react";

const VideoBox = (props) => {
  const [blob, setBlob] = useState(props.item);
  const veemo = useRef(null);

  console.log(blob);

  useEffect(() => {
    if(veemo.current) {
      try{
        veemo.current.srcObject = blob
      }catch(err){
        veemo.current.src = URL.createObjectURL(blob)
      }
    }
  })

  const clickHandler = (e) => {
    veemo.current.play();
  }

  return (
    <video ref={veemo} onClick={clickHandler}>
    </video>
  )
}

export default VideoBox;