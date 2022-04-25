import "./sidebar.scss";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Back Office</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/ " style={{ textDecoration: "none" }}>
            <li>
              <AirlineStopsIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="/inventory" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Inventory</span>
            </li>
          </Link>

          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
