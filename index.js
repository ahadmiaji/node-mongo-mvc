const express = require("express");

const userRouter = require("./routes/users.route")
const app = express();

const PORT = 7000;

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);



//here we create a route and send a message.



//here we use app.use this because 
//if we visit another route then it will show error here.
app.use((req, res, next) => {
    res.status(404).json({
        message: "resource not found",
    })

})

//(this is server)
app.listen(PORT, () => {
    console.log(`server is okay at http://localhost:${PORT}`);
});