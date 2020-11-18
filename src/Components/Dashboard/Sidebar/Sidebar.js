import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../../resources/logos/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHdd,
  faPlus,
  faSignOutAlt,
  faHome,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:5000/isAdmin", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ email: loggedInUser.email }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setIsAdmin(data));
  // }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <Link to="/">
          <img style={{ marginBottom: 30, width: 150 }} src={logo} alt="" />
        </Link>

        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/bookingList">
            <FontAwesomeIcon icon={faHdd} /> <span>Booking List</span>
          </Link>
        </li>

        <div>
          <li>
            <Link to="/addRentHouse">
              <FontAwesomeIcon icon={faPlus} /> <span>Add Rent House</span>
            </Link>
          </li>
          <li>
            <Link to="/myRent">
              <FontAwesomeIcon icon={faHome} /> <span>My Rent</span>
            </Link>
          </li>
        </div>
      </ul>
      <div>
        <Link to="/">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
