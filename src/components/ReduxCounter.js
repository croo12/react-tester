import { useDispatch, useSelector } from "react-redux";
import { reduxAction } from "../store/store";
import CommonButton from "../UI/Button";

const ReduxCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const isReal = useSelector(state => state.isReal);

  const countUp = () => {
    dispatch( reduxAction.countUp() )
  }

  const countDown = () => {
    dispatch( reduxAction.countDown() )
  }

  const toggleReal = () => {
    dispatch( reduxAction.toggleReal() )
  }

  return (
    <div>
      <h1> {count} </h1>
      <div>
        <CommonButton onClick={countUp}>number++</CommonButton>
        <CommonButton onClick={countDown}>number--</CommonButton>
        <CommonButton onClick={toggleReal}>전일아 그게 정말이니?</CommonButton>
      </div>
        <div>
          <h1> {isReal? `맞아!` : `아니?`}</h1>
        </div>
    </div>
  )
}

export default ReduxCounter;