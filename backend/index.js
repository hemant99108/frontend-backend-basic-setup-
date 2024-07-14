const express=require('express');

const app=express();


const  PORT=3000;

app.get('/',(req,res)=>{
    res.send("server is ready");

});


//get a list of 5 jokes 
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"a joke",
            content:"this is first  joke"
        },{
            id:2,
            title:"a joke",
            content:"this is second  joke"
        },{
            id:3,
            title:"a joke",
            content:"this is third  joke"
        },{
            id:4,
            title:"a joke",
            content:"this is fourth  joke"
        },{
            id:5,
            title:"a joke",
            content:"this is fifth  joke"
        }
    ];

    res.send(jokes);
})


app.listen(PORT,()=>{
    console.log(`Serve at http://localhost:${PORT}`);
})