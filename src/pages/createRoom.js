import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Jumbotron } from "react-bootstrap";
import routes from "../routes/routes";

const CreateRoom = () => {
  const jumboMargin = {
    paddingTop: "20px",
    paddingBottom: "10px"
  };

  const history = useHistory();

  const [roomName, setRoomName] = useState("");
  const [seatsAvailable, setSeatsAvailable] = useState("");
  const [amenitiesAvailable, setAmenitiesAvailable] = useState([]);
  const [pricePerHour, setPricePerHour] = useState("");

  const onRoomNameChange = event => setRoomName(event.target.value);
  const onSeatsChange = event => setSeatsAvailable(event.target.value);
  const onAmenitiesChange = event => {
    var options = event.target.options;
    var values = [];
    for (var i = 0, len = options.length; i < len; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    setAmenitiesAvailable(values);
  };
  const onPriceChange = event => setPricePerHour(event.target.value);

  const addRoom = async event => {
    event.preventDefault();

    try {
      const newRoom = {
        roomName: roomName,
        seatCapacity: seatsAvailable,
        amenitiesAvailable: amenitiesAvailable,
        price: pricePerHour
      };

      if (
        !roomName ||
        !seatsAvailable ||
        amenitiesAvailable.length === 0 ||
        !pricePerHour
      ) {
        alert("Please fill all the details");
      } else {
        const config = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/JSON"
          },
          body: JSON.stringify(newRoom)
        };

        const response = await fetch(
          "https://e1pct.sse.codesandbox.io/newRoom",
          config
        );
        const data = await response.json();

        if (data.status === "SUCCESS") {
          alert("New room successfully created");
          history.push(routes.listRoom);
        } else {
          console.error();
          alert("Something Went Wrong");
        }
      }
    } catch (e) {
      console.error(e);
      alert("Something Went Wrong");
    }
  };

  return (
    <div className="container">
      <Jumbotron style={jumboMargin}>
        <h3> Create New Room</h3>
        <Form>
          <Form.Group controlId="roomName">
            <Form.Label>Room Name</Form.Label>
            <Form.Control
              onChange={onRoomNameChange}
              type="text"
              placeholder="Room Name"
              required
            />
          </Form.Group>

          <Form.Group controlId="seatsAvailable">
            <Form.Label>Seats Available</Form.Label>
            <Form.Control
              onChange={onSeatsChange}
              type="number"
              min="1"
              placeholder="Only numbers"
              required
            />
          </Form.Group>

          <Form.Group controlId="amenitiesAvailable">
            <Form.Label>
              Amenities Available ( Control + Click to Select Multiple)
            </Form.Label>
            <Form.Control onChange={onAmenitiesChange} as="select" multiple>
              <option>Projector</option>
              <option>Screen</option>
              <option>WiFi</option>
              <option>Speakers</option>
              <option>WhiteBoard</option>
              <option>PowerBackup</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              onChange={onPriceChange}
              type="number"
              min="1"
              placeholder="Price per hour in Rs."
              required
            />
          </Form.Group>

          <Button variant="info" onClick={addRoom}>
            Add Room
          </Button>
        </Form>
      </Jumbotron>
    </div>
  );
};

export default CreateRoom;

// {
//   roomName: "Hall-1",
//   seatsAvailable: 50,
//   amenitiesAvailable: {
//     projector: true,
//     screen: true,
//     wifi: true,
//     speakers: true,
//     whiteBoard: false,
//     powerBackup: true
//   },
//   pricePerHour: 500
// }
