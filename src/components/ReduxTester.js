import ReduxCounter from "./ReduxCounter"
import ReduxTodo from "./ReduxTodo";

const ReduxTester = () => {
  return (
    <>
      <h1> 리덕스 이 녀석 정체가 뭐야!!! </h1>
      <ReduxCounter number={0} />
      <hr/>
      <ReduxTodo />
    </>
  )
}

export default ReduxTester;