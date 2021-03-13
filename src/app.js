const express = require("express");
const cors = require("cors");
const exchangeRouter = require("./routers/exchange");
const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(exchangeRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
