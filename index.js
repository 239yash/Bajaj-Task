const express = require('express');
const app = express();
app.use(express.json({ extended: false }));

app.post('/bfhl', (req,res) => {
    var array = req.body.array;
    var even = [];
    var odd = [];

    var flag1 = array.filter(function(num){
        return isNaN(num);
    }).length > 0;


    var mainArray = [];

    array.map((num) => {
        mainArray.push(Number(num))
    })

    var flag2 = false;
    for(var i = 0; i < mainArray.length; i++){
        if(!Number.isInteger(mainArray[i])){
            flag2=true;
        }
        if(flag2)
            break;
    }

    if(!flag1 && !flag2)
    {
        array.map((num) => {
            if(!(parseInt(num) % 2))
                even.push(parseInt(num));
            else
                odd.push(parseInt(num));
        })

        res.send({
            "is_success": true,
            "user_id": "yash_gupta_06071999",
            "odd": odd,
            "even": even
        })
    }
    else
    {
        res.send({
            "is_success": false,
            "user_id": "yash_gupta_06071999"
        })
    }
})

app.use('/', (req, res) => {
    res.send("Kindly, use /bfhl as an end-point and POST method");
})

app.listen(8080, () => console.log('Running on http://localhost:8080/bfhl'));