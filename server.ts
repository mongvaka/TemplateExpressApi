import logger from "./middleware/logger";
import api_route from "./api/routing/route";
const PORT = process.env.PORT || 5001;
const cors = require("cors");
import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(express.json());
    app.use(express.text());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.use(logger);
    // --Route Config ----
    app.use(api_route);
    app.listen(PORT, () => {
      console.log(` server is listerning on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
