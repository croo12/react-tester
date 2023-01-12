import "./App.css";
import { Route, Routes } from "react-router-dom";

import MainView from "./views/MainView";
import ResearchView from "./views/ResearchView";
import Header from "./components/Header";
import NotFound from "./components/404NotFound";
import axios from "./utils/useAxios";

const App = () => {
  const SERVICE_KEY = `ZTtKubVuJZfzhs9b3lE5UyGgNOLnYntrwHq5Jj%2Fvn34HkYYBFinQz%2Bj6DMUbYQVsSbglrtkIw6wtyWmH%2BYBvKg%3D%3D`;
  const test = `http://apis.data.go.kr/1611000/nsdi/EstateBrkpgService/attr/getEBOfficeInfo?serviceKey=${SERVICE_KEY}&numOfRows=10&pageNo=1`;

  axios.get(test).then((res) => console.log(res));
  // ({
  //   url: test,
  //   headers: {
  //     "Content-Type": `application/json`,
  //   },
  //   method: "GET",
  //   // params: {
  //   // ServiceKey: SERVICE_KEY,
  //   // format: "json",
  //   // sttusSeCode: 1,
  //   // ldCode: 11110,
  //   // bsnmCmpnm: 사업자 상호,
  //   // brkrNm: 중개업자명,
  //   // },
  // }).then((res) => {
  //   console.log(res);
  // });

  // var xhr = new XMLHttpRequest();
  // var url =
  //   "http://apis.data.go.kr/1611000/nsdi/EstateBrkpgService/attr/getEBOfficeInfo"; /*URL*/
  // var queryParams =
  //   "?" + encodeURIComponent("serviceKey") + "=" + SERVICE_KEY; /*Service Key*/
  // queryParams +=
  //   "&" + encodeURIComponent("ldCode") + "=" + encodeURIComponent("11110"); /**/
  // queryParams +=
  //   "&" +
  //   encodeURIComponent("bsnmCmpnm") +
  //   "=" +
  //   encodeURIComponent("맑은공인"); /**/
  // queryParams +=
  //   "&" +
  //   encodeURIComponent("brkrNm") +
  //   "=" +
  //   encodeURIComponent("홍길동"); /**/
  // queryParams +=
  //   "&" +
  //   encodeURIComponent("sttusSeCode") +
  //   "=" +
  //   encodeURIComponent("1"); /**/
  // queryParams +=
  //   "&" + encodeURIComponent("format") + "=" + encodeURIComponent("json"); /**/
  // queryParams +=
  //   "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /**/
  // queryParams +=
  //   "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  // xhr.open("GET", url + queryParams);
  // console.log(url + queryParams);
  // xhr.onreadystatechange = function () {
  //   if (this.readyState == 4) {
  //     console.log(
  //       "Status: " +
  //         this.status +
  //         "nHeaders: " +
  //         JSON.stringify(this.getAllResponseHeaders()) +
  //         "nBody: " +
  //         this.responseText
  //     );
  //   }
  // };

  // xhr.send("");

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route index element={<MainView />}></Route>
        <Route path="/research/*" element={<ResearchView />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
