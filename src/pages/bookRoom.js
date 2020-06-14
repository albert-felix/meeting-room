import React, { useState } from "react";
import {
  Jumbotron,
  Button,
  ListGroup,
  Container,
  Row,
  Form
} from "react-bootstrap";
import rooms from "../dataBase/roomDb";
import { useHistory } from "react-router-dom";
import customers from "../dataBase/customerDb";

const BookRoom = () => {


  const [name, setName] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [date, setDate] = useState("");

  var isBookingAllowed = true;

  const onNameChange = event => setName(event.target.value);
  const onFromTimeChange = event => setFromTime(event.target.value);
  const onToTimeChange = event => setToTime(event.target.value);
  const onDateChange = event => setDate(event.target.value);


  const cancel = () => {
    history.push("/list-room");
  };

  const chanageState = () => {
    if(isBookingAllowed) {
      isBookingAllowed = !isBookingAllowed;
    }
  };

  const executeBooking = () => {
    if (isBookingAllowed) {
      var bookedRooms = {
        roomId: parseInt(window.localStorage.getItem("roomIndex"), 10) + 1,
        date,
        fromTime,
        toTime
      };
      var bookingDetail = { name, bookedRooms };
      customers.push(bookingDetail);
      history.push("/list-room");
      console.log(customers);
    } else {
      alert("Room Not Available");
    }
  };

  const confirmBooking = () => {
    console.log(name, date, fromTime, toTime);
    if (!name || !date || !fromTime || !toTime) {
      alert("Please fill all the details");
    } else {
      if (toTime > fromTime) {
        for (var i = 0; i < customers.length; i++) {
          if (customers[i].bookedRooms.date === date) {
            if (
              fromTime >= customers[i].bookedRooms.fromTime &&
              fromTime < customers[i].bookedRooms.toTime
            ) {
              console.log(1, isBookingAllowed);
              chanageState()
              break;
            } else if (
              toTime > customers[i].bookedRooms.fromTime &&
              toTime <= customers[i].bookedRooms.toTime
            ) {
              console.log(2, isBookingAllowed);
              chanageState()
              break;
            } else if (
              fromTime < customers[i].bookedRooms.fromTime &&
              toTime > customers[i].bookedRooms.toTime
            ) {
              console.log(3,isBookingAllowed);
              chanageState()
            }
          }
        }
        executeBooking();
      } else {
        alert(`"To Time" should be greater than "From Time"`);
      }
    }
  };

  const listStyle = {
    fontSize: "15px",
    height: "25px",
    paddingTop: "0",
    paddingBottom: "0",
    paddingLeft: "15px",
    paddingRight: "15px"
  };

  const jumboMargin = {
    paddingTop: "20px",
    paddingBottom: "10px"
  };

  var index = window.localStorage.getItem("roomIndex");
  const history = useHistory();

  return (
    <div className="container">
      <h3>Booking Room... </h3>
      <br />
      {rooms.map((room, roomIndex) => {
        if (parseInt(index, 10) === roomIndex) {
          return (
            <div key={roomIndex}>
              <Jumbotron style={jumboMargin}>
                <p>
                  <b>Room Id :</b> {roomIndex + 1}
                </p>
                <p>
                  <b>Room Name :</b> {room.roomName}
                </p>
                <p>
                  <b>Seats Available :</b> {room.seatsAvailable}
                </p>
                <ListGroup>
                  <b>Amenities Available</b>
                  <Container>
                    <Row>
                      {room.amenitiesAvailable.map((amenity, amenityIndex) => {
                        return (
                          <ListGroup.Item
                            style={listStyle}
                            variant="info"
                            key={amenityIndex}
                          >
                            {amenity}
                          </ListGroup.Item>
                        );
                      })}
                    </Row>
                  </Container>
                </ListGroup>
                <br />
                <p>
                  <b>Price :</b> {room.pricePerHour} /hr
                </p>
              </Jumbotron>
              <Jumbotron style={jumboMargin}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    onChange={onNameChange}
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="fromTime">
                  <Form.Label>Date</Form.Label>
                  <Form.Control onChange={onDateChange} type="date" required />
                </Form.Group>

                <Form.Group controlId="fromTime">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    onChange={onFromTimeChange}
                    type="time"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="toTime">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    onChange={onToTimeChange}
                    type="time"
                    required
                  />
                </Form.Group>

                <Button
                  style={{ marginRight: "10px" }}
                  variant="info"
                  size="sm"
                  onClick={confirmBooking}
                >
                  Confirm Booking
                </Button>
                <Button variant="info" size="sm" onClick={cancel}>
                  Cancel
                </Button>
              </Jumbotron>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default BookRoom;
