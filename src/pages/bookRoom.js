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
  const [bookedRooms, setBookedRooms] = useState([]);

  const onNameChange = event => setName(event.target.value);
  const onFromTimeChange = event => setFromTime(event.target.value);
  const onToTimeChange = event => setToTime(event.target.value);

  const cancel = () => {
    history.push("/list-room");
  };

  const confirmBooking = event => {
    if (!name || !fromTime || !toTime) {
      event.preventDefault();
      alert("Please fill all the details");
    } else {
      var bookingTime = {
        roomId: window.localStorage.getItem("roomIndex"),
        fromTime,
        toTime
      };
      setBookedRooms([bookingTime]);
      var bookingDetail = { name, bookedRooms };
      customers.push(bookingDetail);
      console.log(customers);
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
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    onChange={onFromTimeChange}
                    type="datetime-local"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="toTime">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    onChange={onToTimeChange}
                    type="datetime-local"
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
