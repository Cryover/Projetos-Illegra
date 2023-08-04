import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/resumes">Resume List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
