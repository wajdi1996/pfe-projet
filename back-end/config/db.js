const mongoose = require('mongoose')
const db_connection = () =>{
    mongoose.connect('mongodb+srv://wajdi:belhaj123456@cluster0.7r1ul.mongodb.net/bbtp?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
 .then(() =>{ console.log('data_base connected')})
    .catch(()=>{console.log('error bch tetarcheg')})

} 
module.exports = db_connection