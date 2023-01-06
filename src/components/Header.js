import { Link } from "react-router-dom";
import '../css/H.Header.scss'

const Header = ({isVertical}) => {
  return (
    <div className={isVertical ? "v-header" : "h-header"}>
      <Link to="/">홈</Link>
      <Link to="/research">연구실로</Link>
    </div>
  )
}

export default Header;