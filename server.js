const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const loginRouter = require("./src/routes/loginRouter");
const authRouter = require("./src/routes/authRouter");
const userRouter = require("./src/routes/userRouter");
const productRouter = require("./src/routes/productRouter");
const validateTokenRouter = require("./src/routes/validateTokenRouter");

const port = 3100;
const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use("/login", loginRouter)
app.use("/validateToken", validateTokenRouter)
app.use("/product", authRouter, productRouter)
app.use("/user", authRouter, userRouter)

app.listen(port, () =>
  console.log(`server is listening on http://localhost:${port}/`)
);
