import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>SJL Payroll</h2>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Dashboard</Link></li>
        <li><Link to="/payroll" style={styles.link}>Payroll</Link></li>
        <li><Link to="/reports" style={styles.link}>Reports</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#333",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Navbar;
