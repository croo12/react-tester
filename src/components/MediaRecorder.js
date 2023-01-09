import { useRef } from "react"

const MediaRecorderExample = () => {
  const vidRef = useRef();
  const videoStream = useRef(null);
  const isRecording = useRef(false);

  const videoRecorder = useRef(null)
  const recordedVideoURL = useRef(null)
  const videoBLOB = useRef(null)
  const videoData = useRef([])

  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      width: 360,
      height: 240,
    },
  }).then((stream) => {
    vidRef.current.srcObject = stream;
    vidRef.current.onloadedmetadata = () => {
      vidRef.current.play();
    }
    videoStream.current = stream;
  }).catch(err => {
    console.log(`<b>에러 발생</b> \n 에러 : ${err}`);
  })

  const clickHandler = () => {
    isRecording.current = !isRecording.current

    if(navigator.mediaDevices.getUserMedia){
      if(isRecording.current === true){

        console.log(`recording start`);
        
        videoRecorder.current = new MediaRecorder(videoStream.current, { mimeType: `video/webm; codecs=vp9` })
        
        //호호이
        videoRecorder.current.ondataavailable = (e) => {
          if(e.data && e.data?.size > 0){
            console.log(e);
            videoData.current = videoData.current.concat(e.data);
          }
        }

        //정지를 누르셨나요?
        videoRecorder.current.onstop = () => {
          
          videoBLOB.current = new Blob(videoData.current, {type:"video/webm"})
          recordedVideoURL.current = window.URL.createObjectURL(videoBLOB.current)
          
          sendAvi(videoBLOB.current);
          console.log(`video capture end`);
        }
        
        //녹화 ㄱ
        videoRecorder.current.start();
      
      }else if(videoRecorder.current){
        
        //정지
        videoRecorder.current.stop()
        videoRecorder.current = null;
      }
    }
  }

  const sendAvi = (blob) => {
    let filename = `${new Date().toString()}.avi`
    const file = new File([blob], filename);

    let formData = new FormData();
    formData.append(`fileName`, filename);
    formData.append(`file`, file);

    //비동기 통신으로 폼데이터 날리기
    const datas = formData.entries();
    for (const dta of datas){
      console.log(dta);
    }
    //==============================
  }

  return (
    <div>
      <div>
        <video className="screen"
          ref={vidRef}
        />
      </div>
      <button onClick={clickHandler}> {isRecording.current ? '녹화중지':'녹화하기'} </button>
    </div>
  )
}

export default MediaRecorderExample;