import express from "express";
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/task", async (req, res) => {
  res.send("Hello World!");
});

app.post("/task", async (req, res) => {
  res.send("Hello World!");
});

app.put("/task", async (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
