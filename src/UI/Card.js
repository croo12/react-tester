const Card = (props) => {
  const activate = props.activate;

  return (
    <div
      class={"option" (activate && 'activate')}
      onClick="morp(idx + 1, routine.r_id)"
      // style={'background-image': 'url(' + IMG_URL + routine.v_id + '.png)',}
    >
      <div class="shadow"></div>
      <div class="label">
        <div class="icon">
          <i class="fas fa-walking"></i>
        </div>
        <div class="info">
          <div class="main"> 제목맨 </div>
          <div class="sub">여기다 뭘넣지</div>
        </div>
      </div>
    </div>
  )
}

export default Card;