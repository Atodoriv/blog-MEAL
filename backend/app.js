const express = require("express");

const app = express();

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", 
    "Origin, X-Request-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", 
    "GET, POST, PATCH, DELETE, OPTIONS");
    next();
})

app.use("/api/posts",(req, res, next) => {
    const posts = [
        {
            id: 'dsfgfdgfdsgs',
            title: "First post added",
            content: "This is coming from a server" 
        },
        {
            id: 'dsfgfdgfdsgs',
            title: "Seconf post added",
            content: "This is coming from a server" 
        },
        {
            id: 'dsfgfdgfdsgs',
            title: "Third post added",
            content: "This is coming from a server" 
        },
    ];
    
    res.status(200).json({
        message: 'Posts fetched succesfully',
        posts: posts
    });
});

module.exports = app;


