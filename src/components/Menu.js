import { Link } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";

const Menu = () => {
  const custom = {
    backgroundImage: "linear-gradient(-90deg, #a3278f 0%, #e52f50 100%)",
    margin: "0",
    padding: "0",
  };
  return (
    <Navbar expand="lg" style={custom}>
      <Container>
        <Nav className="p-2 mx-auto">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link
                to="/"
                className="nav-link px-2 link-secondary text-white  "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/inventory"
                className="nav-link px-2 link-secondary text-white  "
              >
                Inventory
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="nav-link px-2 link-secondary text-white"
              >
                Profile
              </Link>
            </li>
          </ul>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;
