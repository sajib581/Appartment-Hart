import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const MyRent = () => {
  const [servicesList, setServicesList] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      "https://still-journey-92404.herokuapp.com/bookings?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setServicesList(data));
  }, []);
  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };
  return (
    <section style={containerStyle} className="container-fluid row">
      <Sidebar></Sidebar>
      <div style={{ marginTop: 30 }} className=" col-md-10 p-4 pr-5 ml-auto">
        <h3 className="text-dark">Add Rent House</h3>
        <table className="table table-borderless">
          <thead class="thead-dark">
            <tr>
              <th
                style={{ width: "5%" }}
                className="text-white text-left"
                scope="col"
              >
                Sr No
              </th>

              <th style={{ width: "50%" }} className="text-white" scope="col">
                House Name
              </th>
              <th style={{ width: "15%" }} className="text-white" scope="col">
                Price
              </th>
              <th style={{ width: "30%" }} className="text-white" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {servicesList.map((srvclst, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{srvclst.name}</td>
                <td>{srvclst.price}</td>
                <td>{srvclst.action}</td>
                <td>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Control className="btn-success" as="select">
                        <option className="bg-success">Done</option>
                        <option className="bg-warning">Pending</option>
                        <option className="bg-danger">On Going</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyRent;
