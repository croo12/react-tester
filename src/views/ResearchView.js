import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import BeAsyncComponent from '../components/BeAsyncComponent'
import GiveParams from "../components/GiveParams";
import Input from "../UI/Input";
import ModalPortal from "../components/ModalPortal";
import ReduxTester from "../components/ReduxTester";
import LoadingSpinner from '../components/Spinner'
import promiseWrapper from "../utils/usePromise";
import MediaRecorderExample from "../components/MediaRecorder";
import CommonButton from "../UI/Button";

const promise = new Promise((resolve, reject) => {
  if(Math.random() > 0.5)
    setTimeout(() => resolve(), 3000);
  else
    setTimeout(() => reject(), 3000);
})

const ResearchView = () => {
  const tester = promiseWrapper(promise);

  return (
    <div>
      <h1> 이곳은 연구실입니다. </h1>
      <p>컴포넌트를 마구마구 만들거나 실험해봅시다</p>
      <br/>
        <div className="mini-nav">
          <Link to={""} >| 연구실 메인 |</Link>
          <Link to={"suspense"} >| 서스펜스 써 봄 |</Link>
          <Link to={"useurl/6"} >| 파라미터 받기 |</Link>
          <Link to={"reduxtest"} >| 리덕스 넣어보기 |</Link>
          <Link to={"portal"} >| 포탈 사용하기 |</Link>
          <Link to={"input"} >| Input 컴포넌트 |</Link>
          <Link to={"mediaRecorder"} >| 미디어레코더 |</Link>
        </div>
        <Routes>
          <Route path="suspense" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <BeAsyncComponent tester = {tester} />
              </Suspense>
            }>
          </Route>
          <Route path="useurl/:number" element={<GiveParams />} />
          <Route path="reduxtest" element={<ReduxTester />} />
          <Route path="portal" element={<ModalPortal />} />
          <Route path="input" element={<>
            <Input 
              label={"Test"} 
              id={"test"}
              isValid={true}
              type={"text"}
              placeholder={"테스트지롱"}
              onChange={() => {console.log("짜잔");}}
              onBlur={() => {console.log("떠나요");}}
              />
            <Input 
              label={"PwTest"} 
              id={"test2"}
              isValid={true}
              type={"password"}
              placeholder={"비밀번호 테스트"}
              onChange={() => {console.log("짜잔");}}
              onBlur={() => {console.log("떠나요");}}
              />
            <CommonButton onClick={() => console.log("클릭됨 ㅅㄱ")}>나는 버튼</CommonButton>
            </>
          }/>
          <Route path="mediaRecorder" element={ <MediaRecorderExample />} />
        </Routes>
      <div>
        
      </div>
    </div>
  )
}

export default ResearchView;