import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { mongoconnection } from './database'
import dotenv from "dotenv";
import {router} from "./route/user"
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from "./swagger/swagger.json";


dotenv.config();
  const  app = express();

mongoconnection();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(Object({ extended: true })));

app.use("/user", router);
app.use("/uploads", express.static("uploads"));
app.use("/swagger-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const port = process.env.PORT;
app.listen(port, (): void => {
  console.log(`Runing on port :- ${port}`);
});
export default app;