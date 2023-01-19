import { useNavigate } from "react-router-dom";

const RouterTest = () => {
  const navi = useNavigate();
  console.log(navi);
  return <div>안녕 난 라우터 테스트야</div>;
};

export default RouterTest;
