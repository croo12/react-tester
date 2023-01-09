import ReactDOM from "react-dom";

const ModalPortal = () => {

  return (
    <>
      {ReactDOM.createPortal(
        <h1>난 밖에 있다네</h1>
      , document.body)}
    </>
  )
}

export default ModalPortal;