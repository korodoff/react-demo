import { Link } from "react-router-dom";
function NavagationBar(props) {
  return (
    <div style={{ display: "flex", gap: "10px", textAlign: "center" }}>
      <Link to="/aboutUs">aboutUs</Link>

      <Link to="/contact">contact</Link>
    </div>
  );
}

export default NavagationBar;
