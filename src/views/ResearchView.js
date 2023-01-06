import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import BeAsyncComponent from '../components/BeAsyncComponent'
import GiveParams from "../components/GiveParams";
import LoadingSpinner from '../components/Spinner'
import promiseWrapper from "../utils/usePromise";

const promise = new Promise((resolve, reject) => {
  if(Math.random > 0.5)
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
        </div>
        <Routes>
          <Route path="suspense" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BeAsyncComponent tester = {tester} />
            </Suspense>} />
          <Route path="useurl/:number" element={
            <GiveParams />
          } />
        </Routes>
      <div>
        
      </div>
    </div>
  )
}

export default ResearchView;