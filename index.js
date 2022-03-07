import app from './app';

require('dotenv').config();

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
