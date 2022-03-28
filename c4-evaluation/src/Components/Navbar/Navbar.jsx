import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar" style={{display:"flex",justifyContent:"space-around",background:"skyblue",padding:"5px"}}>
      <Link className="navbarHome" to={"/"}>
        Home
      </Link>
      <Link className="navbarLoginSignUp" to={"/loginsignup"}>
        Login/Sign Up
      </Link>
    </div>
  );
};
