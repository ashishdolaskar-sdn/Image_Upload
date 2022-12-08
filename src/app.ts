import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { mongoconnection } from './database'
import dotenv from "dotenv";
import  {router}  from "./route/image";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from "./swagger/swagger.json";
import  s3Router  from "./route/s3bucket";

dotenv.config();
const  app = express();
mongoconnection();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(Object({ extended: true })));
app.use("/user", router);
app.use("/s3", s3Router);
app.use("/uploads", express.static("uploads"));
app.use("/swagger-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT;
app.listen(port, (): void => {
  console.log(`Runing on port :- ${port}`);
});

export default app;