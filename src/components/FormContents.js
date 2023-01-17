import Input from "../UI/Input";
import CommonButton from "../UI/Button";
import Card from "../UI/Card";

const FormContents = () => {
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
      <CommonButton onClick={() => console.log("클릭됨 ㅅㄱ")}>
        나는 버튼
      </CommonButton>
    </>
  );
};

export default FormContents;
