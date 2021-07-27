const express = require('express');
const dotenv = require('dotenv');
const research = require('./routes/research/research');
const professional = require('./routes/professional/professionals');
const personal = require('./routes/personal/personal');

dotenv.config();
const app = express();

app.use('/research', research);
app.use('/professional', professional);
app.use('/personal', personal);

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log('Server listening on port', process.env.PORT);
});
