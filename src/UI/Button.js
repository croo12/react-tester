import '../css/Button.scss'

const CommonButton = (props) => {

  return (
    <button className="buttonman" onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default CommonButton;