const express = require('express');
const path = require('path');
const router = require('./routes/index.js');

const PORT = 3000;
const DIST_DIR = path.resolve(__dirname, '..', 'client/dist');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(DIST_DIR));

router(app);
app.listen(PORT, () => {
  console.log(`Server is listening at: http://localhost:${PORT}`);
});