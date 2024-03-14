import { NavLink, useNavigate } from "react-router-dom";
//styles
//import "./styles/navbar.css";

function NavBar({ token, setToken }) {
  const navigate = useNavigate();

  const logoutUser = () => {
    setToken(null);
    navigate("/");
  };
  if (token) {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <a onClick={logoutUser}>Logout</a>
      </nav>
    );
  }

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/auth/login">Login</NavLink>
    </nav>
  );
}

export default NavBar;