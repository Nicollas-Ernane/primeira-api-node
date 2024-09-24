// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;


app.listen(PORT, () => {
    console.log("servidor escutando!"); 
});

// tipo de criar server abaixo
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end(rotas[req.url]);
// });