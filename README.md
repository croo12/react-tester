# 리액트 이것저것 해보기

마구마구 컴포넌트를 넣어봅시다.

## 정리

### WEB API의 Navigator 인터페이스

 [Navigator 인터페이스의 구성](https://developer.mozilla.org/ko/docs/Web/API/Navigator) 참조

    navigator.mediaDevices => ondevicechange 이벤트 달 수 있음 아마 기기가 바뀌면 발동하는 함수일 듯
    => mediaDevices는 MediaStream이라는 객체를 준다고 한다
    

<br>

[MediaStream 소개서](https://developer.mozilla.org/ko/docs/Web/API/Media_Capture_and_Streams_API) 
    
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

    0개 이상의 MediaStreamTrack 객체로 구성되어 있다.
    ㄴ MediaStreamTrack은 누구임
    ㄴㄴ 스트림 내의 단일 미디어 트랙이라고 한다. 이것저것 재밌는 일을 할 수 있어 보이지만 나중에 확인해보자
    
    getUserMedia로 생성한 놈은 로컬 다른 애들은 비로컬이라고 부른다고 한다. 
    유명한 해외파 MediaStream은 바로 WebRTC의 RTCPeerConnection이다.

    navigator.mediaDevices.getUserMedia( Object obj )
    =>  내 장치의 미디어를 가져오는 함수
      객체 안에 넣은 값에 따라 오디오, 비디오, 마이크에 접근 가능
      오디오 혹은 비디오 중 하나는 반드시 요청해야함

    navigator.mediaDevices.getDisplayMedia();
    => 이름이 재미있어 보여서 찍어봤는데 화면공유 요청 됨
      근데 취소 눌러도 징하게 계속 요청함

    이렇게 얻은 정보를 video 태그로 웹에 띄워봤다.

    로컬로 얻은 정보가 아니라 WEB RTC를 통해 넘어온 정보를 띄우면 그걸로 끝

## 아니 openvidu에 연결하기 절반 성공하기도 개어렵네

