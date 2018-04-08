const express = require ('express');


const app=express();


app.get('/',(req,res)=>{

   const userAgent = req.headers["user-agent"].split(/[\(\)]/)[1]; 
   const lng = req.headers["accept-language"].slice(0,2);
    let ip;
if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(",")[0];
} else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
} else {
    ip = req.ip;
}

    res.send({
        ipaddress:ip,
        language:lng,
        "software":userAgent
    })
});

app.listen(3000);