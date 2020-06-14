import React from "react";
import {
  Jumbotron,
  ListGroup,
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import rooms from "../dataBase/roomDb";

const ListRoom = () => {

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
              window.localStorage.setItem("roomIndex",roomIndex)
              history.push('/book-room')
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
                    <b>Seats Available :</b> {room.seatsAvailable}
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
                    <b>Price :</b> {room.pricePerHour} /hr
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
