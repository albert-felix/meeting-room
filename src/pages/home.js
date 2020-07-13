import React from "react";
import { Carousel, Jumbotron, Badge } from "react-bootstrap";

const Home = () => {
  const flex = {
    display: "flex",
    alignItems: "center",
    // textAlign: "center",
    height: "calc(100vh - 80px)"
  };

  return (
    <div className="container">
      <div style={flex}>
        <Carousel style={{ width: "100%" }}>
          <Carousel.Item>
            <Jumbotron>
              <h1>Welcome to Meeting Room</h1>
              <br />
              <h4>
                <Badge variant="info">
                  Book your meeting rooms as per your convenience
                </Badge>
              </h4>
              <h4>
                <Badge variant="info">Easy to book</Badge>
              </h4>
              <h4>
                <Badge variant="info">Just a Few Click - You are Ready !</Badge>
              </h4>
            </Jumbotron>
          </Carousel.Item>
          <Carousel.Item>
            <Jumbotron>
            <h1>Bookings - Never Made This Easy</h1>
              <br />
              <h4>
                <Badge variant="info">
                  Lists the available rooms
                </Badge>
              </h4>
              <h4>
                <Badge variant="info">Choose which suits the most</Badge>
              </h4>
              <h4>
                <Badge variant="info">Displays available amenities</Badge>
              </h4>
            </Jumbotron>
          </Carousel.Item>
          <Carousel.Item>
            <Jumbotron>
            <h1>Creating New Rooms</h1>
              <br />
              <h4>
                <Badge variant="info">
                  Adds new room
                </Badge>
              </h4>
              <h4>
                <Badge variant="info">Seating Capacity</Badge>
              </h4>
              <h4>
                <Badge variant="info">Price per hour</Badge>
              </h4>
            </Jumbotron>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
