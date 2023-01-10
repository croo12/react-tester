import VideoBox from "./VideoBox";

const VerticalList = (props) => {
  console.log(props.items);

  return (
    <div>
      {props.items.map((item, idx) => (
        <VideoBox key={idx} item={item}></VideoBox>
      ))}
      하이
    </div>
  );
};

export default VerticalList;
