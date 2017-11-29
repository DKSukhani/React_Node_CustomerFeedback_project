const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys.js')
<<<<<<< Updated upstream
require ("./models/user.js");
=======
require('./models/user');
>>>>>>> Stashed changes
require("./services/passport");



mongoose.connect(keys.mongoURI);


const app = express();
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server has started on PORT" + PORT));
