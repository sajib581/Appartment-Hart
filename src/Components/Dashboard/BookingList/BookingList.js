import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";

const BookingList = () => {
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allBookings")
      .then((res) => res.json())
      .then((data) => setServicesList(data));
  }, []);
  console.log(servicesList);
  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };
  return (
    <section style={containerStyle} className="container-fluid row">
      <Sidebar></Sidebar>
      <div style={{ marginTop: 30 }} className=" col-md-10 p-4 pr-5 ml-auto">
        <h3 className="text-dark">Booking List</h3>
        <table className="table table-borderless">
          <thead className="thead-dark">
            <tr>
              <th
                style={{ width: "5%" }}
                className="text-white text-left"
                scope="col"
              >
                Sr No
              </th>

              <th style={{ width: "10%" }} className="text-white" scope="col">
                Name
              </th>
              <th style={{ width: "15%" }} className="text-white" scope="col">
                Email ID
              </th>
              <th style={{ width: "18%" }} className="text-white" scope="col">
                Phone No.
              </th>
              <th style={{ width: "40%" }} className="text-white" scope="col">
                Message
              </th>
              <th style={{ width: "12%" }} className="text-white" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {servicesList.map((srvclst, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{srvclst.name}</td>
                <td>{srvclst.email}</td>
                <td>{srvclst.orderedService}</td>
                <td>{srvclst.description}</td>
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

export default BookingList;
