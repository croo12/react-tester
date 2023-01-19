import axios from "axios";

const TryWebRTC = () => {
  const url = `${process.env.REACT_APP_IP}openvidu/api/sessions`;

  const tmp_id = btoa("OPENVIDUAPP:040902");
  console.log(tmp_id);

  const config = {
    Headers: {
      Authorization: `Basic ${tmp_id}`,
      "Content-Type": "application/json",
    },
  };

  axios
    .post(url, null, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

  return (
    <div>
      <h1> 이것이 웹 RTC... ?</h1>
      <p> {url} </p>
    </div>
  );
};

export default TryWebRTC;
