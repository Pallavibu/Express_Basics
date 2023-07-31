//Bring
const express = require("express") ;  

//Assign
const App = express();

//Port
const PORT = 3000;

//route
App.get("/", (req, res) => {
    res.send("Full stack web development")
})

App.get("/insta", (req, res) => {
    //res.status(200).send("I'm Pallavi")
    const insta = {
        userName : "Pallavi",
        follow : 1,
        followers : 10,
    };
    res.status(200).json({ insta });
})

App.get("/linkedin", (req, res) => {
    res.status(200).send("I'm Pallavi")
})

App.get("/twittwer", (req, res) => {
    res.status(200).send("I'm Pallavi")
})

App.get("/facebook", (req, res) => {
    res.status(200).send("I'm Pallavi")
})

App.get
//listen
App.listen(PORT, () => {
    console.log("server running")
});
