import { Link, Outlet } from "react-router-dom";

const ResearchView = () => {
  return (
    <div>
      <h1> 이곳은 연구실입니다. </h1>
      <p>컴포넌트를 마구마구 만들거나 실험해봅시다</p>
      <br />
      <div className="mini-nav">
        <Link to={""}>| 연구실 메인 |</Link>
        <Link to={"suspense"}>| 서스펜스 써 봄 |</Link>
        <Link to={"useurl/6"}>| 파라미터 받기 |</Link>
        <Link to={"reduxtest"}>| 리덕스 넣어보기 |</Link>
        <Link to={"portal"}>| 포탈 사용하기 |</Link>
        <Link to={"input"}>| Input 컴포넌트 |</Link>
        <Link to={"mediaRecorder"}>| 미디어레코더 |</Link>
        <Link to={"webrtc"}>| 웹RTC 테스트 |</Link>
      </div>
      <Outlet />
      <div></div>
    </div>
  );
};

export default ResearchView;
