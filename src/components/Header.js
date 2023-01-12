import { NavLink } from "react-router-dom";
import "../css/H.Header.scss";

const Header = ({ isVertical }) => {
  return (
    <div className={isVertical ? "v-header" : "h-header"}>
      <NavLink
        className={(navData) => {
          console.log(navData);
        }}
        to="/"
      >
        홈
      </NavLink>
      <NavLink to="/research">연구실로</NavLink>
    </div>
  );
};

export default Header;
