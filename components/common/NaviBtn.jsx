import { NavLink } from "react-router-dom";

const NaviBtn = ({ to, children, customStyle }) => {
  return (
    <NavLink
      to={to}
      style={customStyle}
    >
      {children}
    </NavLink>
  );
};
export default NaviBtn;
