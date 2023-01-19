import Input from "../UI/Input";
import CommonButton from "../UI/Button";
import Card from "../UI/Card";
import ListBox from "./InputListBox";
import TMP from "./TMP";

const FormContents = () => {
  const arr = [
    {
      kennen: "0",
      value: "가",
    },
    {
      kennen: "1",
      value: "나",
    },
    {
      kennen: "2",
      value: "다",
    },
    {
      kennen: "3",
      value: "라",
    },
  ];

  return (
    <>
      <Input
        label={"Test"}
        id={"test"}
        isValid={true}
        type={"text"}
        placeholder={"테스트지롱"}
        onChange={() => {
          console.log("짜잔");
        }}
        onBlur={() => {
          console.log("떠나요");
        }}
      />
      <Input
        label={"PwTest"}
        id={"test2"}
        isValid={true}
        type={"password"}
        placeholder={"비밀번호 테스트"}
        onChange={() => {
          console.log("짜잔");
        }}
        onBlur={() => {
          console.log("떠나요");
        }}
      />
      <ListBox arr={arr}>
        <TMP />
      </ListBox>

      <CommonButton onClick={() => console.log("클릭됨 ㅅㄱ")}>
        나는 버튼
      </CommonButton>
    </>
  );
};

export default FormContents;
