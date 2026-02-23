import express from "express";

const port = process.env.port || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello 6to. Bienvenidos a la clase de Node.js");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
