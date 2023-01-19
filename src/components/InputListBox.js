import React, { useState } from "react";
import Card from "../UI/Card";

const ListBox = (props) => {
  console.log(props);
  const [arr, setArray] = useState(props.arr);

  return (
    <div>
      <ul>
        {arr.map((element, idx) => {
          return (
            <li key={idx}>
              <Card>{React.cloneElement(props.children, element)}</Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListBox;
