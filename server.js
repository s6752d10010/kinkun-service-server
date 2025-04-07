const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

//กำหนด Port
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/user',require('./routes/user'));
app.use('/kinkun',require('./routes/kinkun'));

app.use('/images/user', express.static('images/user'));
app.use('/images/kinkun', express.static('images/kinkun'));

app.get('/' , (req,res) => {
    res.json({ message: 'ยินดีต้อนรับ'})
});

app.listen(PORT, () => {

    console.log('Server is running on port ${PORT}')
});

