const rooms = [
  {
    roomName: "Hall-1",
    seatsAvailable: 50,
    amenitiesAvailable: {
      projector: true,
      screen: true,
      wifi: true,
      speakers: true,
      whiteBoard: false,
      powerBackup: true
    },
    pricePerHour: 500
  },
  {
    roomName: "Hall-2",
    seatsAvailable: 25,
    amenitiesAvailable: {
      projector: true,
      screen: true,
      wifi: true,
      speakers: false,
      whiteBoard: true,
      powerBackup: false
    },
    pricePerHour: 300
  }
];

export default rooms;
