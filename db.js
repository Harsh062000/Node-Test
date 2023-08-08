const mongoose = require('mongoose');


exports.db = () => {
       mongoose.connect(process.env.MONGO_URI, {
              useNewUrlParser: true,
       })

       console.log('DB connected');
}
