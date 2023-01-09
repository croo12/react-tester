const ReduxCounter = ({number , onIncrease, onDecrease}) => {
  return (
    <div>
      <h1> {number} </h1>
      <div>
        <button onClick={onIncrease}>number++</button>
        <button onClick={onDecrease}>number--</button>
      </div>
    </div>
  )
}

export default ReduxCounter;