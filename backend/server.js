require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");
const dashboardRoutes = require("./routes/dashboard");
const fetchData = require("./utils/fetchData");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());

// Use dashboard route
app.use("/api/dashboard", dashboardRoutes);

// WebSocket real-time updates
io.on("connection", (socket) => {
  console.log("Client connected");

  setInterval(async () => {
    const updatedData = await fetchData();
    socket.emit("dashboardData", updatedData);
  }, 10000); // Updates every 10 seconds

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));
