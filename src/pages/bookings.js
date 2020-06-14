import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import customers from "../dataBase/customerDb";

const Bookings = () => {

  const jumboMargin = {
    paddingTop: "20px",
    paddingBottom: "10px"
  };

  return (
    <div className="container">
      <h3> Bookings</h3>
      <Container>
        <Row>
          {customers.map((customer, customerIndex) => {
            return (
              <div key={customerIndex}>
                <Col>
                <Jumbotron style={jumboMargin}>
                  <p><b>Room Id : </b>{customer.bookedRooms.roomId}</p>
                  <p><b>Booked By : </b>{customer.name}</p>
                  <p><b>Date : </b>{customer.bookedRooms.date}</p>

                  {customer.bookedRooms.fromTime < "12:00" ? (
                    <p><b>From : </b>{customer.bookedRooms.fromTime} AM</p>
                  ) : (
                    <p><b>From : </b>
                      {customer.bookedRooms.fromTime.split(":")[0] - 12}:
                      {customer.bookedRooms.fromTime.split(":")[1]} PM
                    </p>
                  )}
                  {customer.bookedRooms.toTime < "12:00" ? (
                    <p><b>To : </b>{customer.bookedRooms.toTime} AM</p>
                  ) : (
                    <p><b>To : </b>
                      {customer.bookedRooms.toTime.split(":")[0] - 12}:
                      {customer.bookedRooms.toTime.split(":")[1]} PM
                    </p>
                  )}
                </Jumbotron>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Bookings;
