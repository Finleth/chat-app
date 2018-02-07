const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();

app.get('/', (req, res)=>{
    res.send('<h2>You connected to the home route</h2>');
});

app.listen(PORT, ()=>{
    console.log('Server running on PORT', PORT)
});