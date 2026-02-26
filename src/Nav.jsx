import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav style={{ display: "flex", gap: 12 }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Memo">Memo</NavLink>
      <NavLink to="/Map">Map</NavLink>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "12px",
    padding: "12px",
    backgroundColor: "#222"
  },
  button: {
    padding: "8px 14px",
    cursor: "pointer"
  }
};