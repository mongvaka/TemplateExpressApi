import logger from "./middleware/logger";
import api_route from "./api/routing/route";
const PORT = process.env.PORT || 5001;
const cors = require("cors");
import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import socketIO, { Server } from "socket.io";
import http from "http";
import path from "path";

createConnection()
  .then(async (connection) => {
    // create express app
    const publicPath = path.join(__dirname, "/../public");
    const app = express();
    let server = http.createServer(app);
    const io = new Server<
      ClientToServerEvents,
      ServerToClientEvents,
      InterServerEvents,
      SocketData
    >();

    app.use(express.static(publicPath));
    app.use(express.json());
    app.use(express.text());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.use(logger);
    // --Route Config ----
    app.use(api_route);
    server.listen(PORT, () => {
      console.log(` server is listerning on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}
