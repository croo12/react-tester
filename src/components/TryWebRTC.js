import axios from "axios";

const TryWebRTC = () => {
  const string = process.env.REACT_APP_IP;
  const config = {
    Headers: {
      
    }
  }

  axios.get(`${url}`, config)

  return (
    <div>
      <h1> 이것이 웹 RTC... ?</h1>
      <p> {string} </p>
    </div>
  );
};

export default TryWebRTC;
