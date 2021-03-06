import React, { useEffect, useState } from "react";
import {
  Jumbotron,
  ListGroup,
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useUserProvider from "../store/UserProvider/useUserProvider";

const ListRoom = () => {
  const { isUserLoggedIn, isMailVerified} = useUserProvider();

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("https://meeting-room-backend.herokuapp.com/room/list-room")
      .then(response => response.json())
      .then(data => setRooms(data.rooms))
      .catch(console.error());
  }, []);

  const history = useHistory();

  const jumboMargin = {
    paddingTop: "20px",
    paddingBottom: "10px"
  };

  const listStyle = {
    fontSize: "15px",
    height: "25px",
    paddingTop: "0",
    paddingBottom: "0",
    paddingLeft: "15px",
    paddingRight: "15px"
  };

  return (
    <div className="container">
      <h3>Available Rooms</h3>
      <Container>
        <Row>
          {rooms.map((room, roomIndex) => {
            const bookRoom = () => {
              if (isUserLoggedIn) {
                if (isMailVerified) {
                  window.localStorage.setItem("roomIndex", roomIndex);
                  history.push("/book-room");
                } else {
                  alert("Verify Mail to Book Rooms");
                }
              } else {
                alert("Login to Book Rooms");
              }
            };

            return (
              <Col lg={4} key={roomIndex}>
                <Jumbotron style={jumboMargin}>
                  <p>
                    <b>Room Id :</b> {roomIndex + 1}
                  </p>
                  <p>
                    <b>Room Name :</b> {room.roomName}
                  </p>
                  <p>
                    <b>Seats Available :</b> {room.seatCapacity}
                  </p>
                  <ListGroup>
                    <b>Amenities Available</b>
                    <Container>
                      <Row>
                        {room.amenitiesAvailable.map(
                          (amenity, amenityIndex) => {
                            return (
                              <ListGroup.Item
                                style={listStyle}
                                variant="info"
                                key={amenityIndex}
                              >
                                {amenity}
                              </ListGroup.Item>
                            );
                          }
                        )}
                      </Row>
                    </Container>
                  </ListGroup>
                  <br />
                  <p>
                    <b>Price :</b> {room.price} /hr
                  </p>
                  <Button variant="info" size="sm" onClick={bookRoom}>
                    Book
                  </Button>
                </Jumbotron>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ListRoom;
