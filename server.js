import "dotenv/config"
import express from "express";
import * as http from "http";

const app = express();
const server = http.createServer(app);
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));



app.get("/", (req, res) => {
    res.send("Serveaar isaaaaaa taaa!");
});


const PORT = process.env.NODE_PORT;
server.listen(PORT, "0.0.0.0",()=>{
    console.log(`server runing on port: ${PORT}`)
})