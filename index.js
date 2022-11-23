const Express = require("express");
const Connection = require("./database/db");
const dotenv = require("dotenv");
const app = Express();
const cors = require("cors");
const UserRouter = require("./app/user/router");
const SellerRouter = require("./app/seller/router");

dotenv.config();

const port = process.env.PORT;

const username = process.env.DB_USERNAME;

const password = process.env.DB_PASSWORD;

Connection(username, password);

app.use(cors());

app.use(Express.json());

app.use("/api/user", UserRouter);

app.use("/api/seller", SellerRouter);

app.listen(port, () =>
  console.log(`Server is running successfully on ${port}`)
);
