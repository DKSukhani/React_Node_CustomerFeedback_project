const mongoose = require ('mongoose');
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const userSchema = new Schema ({
<<<<<<< Updated upstream
  googleId: String,
})
=======
  googleId:String,
  });
>>>>>>> Stashed changes

mongoose.model('users', userSchema);
