import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const GiveParams = () => {
  const { number } = useParams();

  //쿼리도 찍어보자
  // console.log(useLocation());
  const [value, setValue] = useState("");
  // const navigate = useNavigate();

  if (number % 6 !== 0) {
    return <Navigate to="/" replace={true} />;
  }

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };

  const goBack = () => {
    // navigate(-1);
  };
  const handleSubmit = (e) => {
    // navigate(`/research/useurl/${value}`);
    e.preventDefault();
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <button onClick={goBack}> 뒤로 </button>
      <br />
      {`${number} <- 이거 넣었니?`}
      <br />
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type="submit">다른 파라미터 넣은 페이지로 떠나기</button>
      </form>
    </div>
  );
};

export default GiveParams