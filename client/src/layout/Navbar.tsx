import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div id="navbar">
      <div className="leftNav">
        <h1>
          <span>Ed's</span>
          <span className="headerRowsContainer">
            <span className="headerRow">Heating</span>
            <span className="headerRow">Cooling</span>
            <span className="headerBackground">&</span>
          </span>
        </h1>
      </div>
      <div className="rightNav">
        <NavLink to={"/about"}>About Me</NavLink>
        <NavLink to={"/reviews"}>Contact Me</NavLink>
        <NavLink to={"/contacts"}>Request Service</NavLink>
      </div>
    </div>
  );
}
