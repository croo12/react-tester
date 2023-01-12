import axios from "axios";
import { useState } from "react";

const BeAsyncComponent = ({ tester }) => {
  const [count, setCount] = useState(3000);

  const handleClick = () => {
    setCount(count + 500);
  };

  console.log(tester.read());

  console.log("hi");

  return (
    <div>
      <h1> 야 다 됐다. </h1>
      <p> {`timeout : ${count}`}</p>
      <button onClick={handleClick}> 시간 업 </button>
    </div>
  );
};

export default BeAsyncComponent;
