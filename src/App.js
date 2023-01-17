import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainView from "./views/MainView";
import ResearchView from "./views/ResearchView";
import NotFound from "./components/404NotFound";
import axios from "./utils/useAxios";
import RootLayout from "./views/RootLayout";
import { Suspense } from "react";
import FormContents from "./components/FormContents";
import GiveParams from "./components/GiveParams";
import LoadingSpinner from "./components/Spinner";
import BeAsyncComponent from "./components/BeAsyncComponent";
import ReduxTester from "./components/ReduxTester";
import ModalPortal from "./components/ModalPortal";
import MediaRecorderExample from "./components/MediaRecorder";
import promiseWrapper from "./utils/usePromise";
import TryWebRTC from "./components/TryWebRTC";

const promise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) setTimeout(() => resolve(), 3000);
  else setTimeout(() => reject(), 3000);
});

const App = () => {
  const SERVICE_KEY = `ZTtKubVuJZfzhs9b3lE5UyGgNOLnYntrwHq5Jj%2Fvn34HkYYBFinQz%2Bj6DMUbYQVsSbglrtkIw6wtyWmH%2BYBvKg%3D%3D`;
  const test = `http://apis.data.go.kr/1611000/nsdi/EstateBrkpgService/attr/getEBOfficeInfo?serviceKey=${SERVICE_KEY}&numOfRows=10&pageNo=1`;

  axios.get(test).then((res) => console.log(res));

  const tester = promiseWrapper(promise);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<MainView />}></Route>
        <Route path="/research/*" element={<ResearchView />}>
          <Route
            path="suspense"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <BeAsyncComponent tester={tester} />
              </Suspense>
            }
          ></Route>
          <Route path="useurl/:number" element={<GiveParams />} />
          <Route path="reduxtest" element={<ReduxTester />} />
          <Route path="portal" element={<ModalPortal />} />
          <Route path="input" element={<FormContents />}></Route>
          <Route
            path="mediaRecorder"
            element={<MediaRecorderExample />}
          ></Route>
          <Route path="webrtc" element={<TryWebRTC />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
