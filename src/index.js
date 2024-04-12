const express = require('express');
const tokenRoutes = require('./routes/tokenRoutes');

const app = express();

app.use(express.json());

app.use('/', tokenRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
