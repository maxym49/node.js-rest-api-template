import mongoose from 'mongoose';

const connection = () => {
  mongoose.set('useFindAndModify', false);
  mongoose.connect('mongodb://localhost:27017', {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  }).then(() => {
    console.info('\x1b[36m', 'The database is running');
  }).catch((error) => console.error(error));
  mongoose.connection.on('error', (err) => console.error(err));
};

export default connection;
