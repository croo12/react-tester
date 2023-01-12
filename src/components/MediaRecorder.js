import { useRef, useState } from "react";
import VerticalList from "./VideoList";

const MediaRecorderExample = () => {
  const vidRef = useRef();
  const videoStream = useRef(null);
  const isRecording = useRef(false);

  const videoRecorder = useRef(null);
  const recordedVideoURL = useRef(null);
  const videoBLOB = useRef(null);
  const [videoData, setData] = useState([]);

  /* WEB API의 Navigator 인터페이스

    navigator 인터페이스의 구성 => https://developer.mozilla.org/ko/docs/Web/API/Navigator 참조

    navigator.mediaDevices => ondevicechange 이벤트 달 수 있음 아마 기기가 바뀌면 발동하는 함수일 듯
    => mediaDevices는 MediaStream이라는 객체를 준다고 한다
    
    MediaStream이란 누구인가?

    => prototype의 뚜껑을 따보니 이 녀석 안에서 여러가지 함수를 발견할 수 있었다
    {
      enumerateDevices
      getDisplayMedia
      getSupportedConstraints
      getUserMedia
      ondevicechange => 그냥 열었을 때는 null
      setCaptureHandleConfig
      Symbol(Symbol.toStringTag)
      그리고 생성자
    }

    MediaStream 소개서 
    0개 이상의 MediaStreamTrack 객체로 구성되어 있다.
    

    navigator.mediaDevices.getUserMedia( Object obj ) 
    =>  내 장치의 미디어를 가져오는 함수
      객체 안에 넣은 값에 따라 오디오, 비디오, 마이크에 접근 가능
      오디오 혹은 비디오 중 하나는 반드시 요청해야함

    navigator.mediaDevices.getDisplayMedia();
    => 이름이 재미있어 보여서 찍어봤는데 화면공유 요청 됨
      근데 취소 눌러도 징하게 계속 요청함

  */
  console.log(navigator.mediaDevices);
  // console.log(navigator.mediaDevices.getDisplayMedia());
  navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: {
        width: 360,
        height: 240,
      },
    })
    .then((stream) => {
      vidRef.current.srcObject = stream;
      vidRef.current.onloadedmetadata = () => {
        vidRef.current.play();
      };
      videoStream.current = stream;
    })
    .catch((err) => {
      console.log(`<b>에러 발생</b> \n 에러 : ${err}`);
    });

  const clickHandler = () => {
    isRecording.current = !isRecording.current;

    if (navigator.mediaDevices.getUserMedia) {
      if (isRecording.current === true) {
        console.log(`recording start`);

        videoRecorder.current = new MediaRecorder(videoStream.current, {
          mimeType: `video/webm; codecs=vp9`,
        });

        //호호이
        videoRecorder.current.ondataavailable = (e) => {
          if (e.data && e.data?.size > 0) {
            console.log(e);
            setData(videoData.concat(e.data));
          }
        };

        //정지를 누르셨나요?
        videoRecorder.current.onstop = () => {
          videoBLOB.current = new Blob(videoData, { type: "video/webm" });
          recordedVideoURL.current = window.URL.createObjectURL(
            videoBLOB.current
          );

          console.log(recordedVideoURL.current);
          sendAvi(videoBLOB.current);
          console.log(`video capture end`);
        };

        //녹화 ㄱ
        videoRecorder.current.start();
      } else if (videoRecorder.current) {
        //정지
        videoRecorder.current.stop();
        videoRecorder.current = null;
      }
    }
  };

  const sendAvi = (blob) => {
    let filename = `${new Date().toString()}.avi`;
    const file = new File([blob], filename);

    let formData = new FormData();
    formData.append(`fileName`, filename);
    formData.append(`file`, file);

    //비동기 통신으로 폼데이터 날리기
    const datas = formData.entries();
    for (const dta of datas) {
      console.log(dta);
    }
    //==============================
  };

  return (
    <div>
      <div>
        <video className="screen" ref={vidRef} />
        {videoData.length && <VerticalList items={videoData} />}
      </div>
      <button onClick={clickHandler}>
        {" "}
        {isRecording.current ? "녹화중지" : "녹화하기"}{" "}
      </button>
    </div>
  );
};

export default MediaRecorderExample;
