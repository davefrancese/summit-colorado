const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

// ROUTES
require("./routes/authRoutes")(app);

app.listen(PORT);
