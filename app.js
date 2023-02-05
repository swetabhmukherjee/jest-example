const express = require('express');
const app = express();
const myMethods = require("./main");

app.get('/', (req, res) => {
    const result = myMethods.getValues();
    res.json({
       result: result
    });
});

app.listen(3000, ()=> {
    console.log("listening on port 3000")
});



