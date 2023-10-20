const express = require("express");
const app = express();

// http://localhost:3000
// render ejs pug

const database = [
  { id: 1, label: "summer" },
  { id: 2, label: "james" },
  { id: 3, label: "tom" },
];

// body에 담기 위한, bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  //res.send('req에 담아서 서버에 데이터 보내기')
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/database", function (req, res) {
  res.send(database);
});

// 1. params에 담기
app.get("/database/:label", function (req, res) {
  const label = req.params.label;
  database.push({
    id: database.length,
    label,
  });
  res.send("값 추가가 정상적으로 완료되었습니다.");
});

// 2. body에 담기
app.post("/add-database", function (req, res) {
  const label = req.body.label;
  database.push({
    id: database.length + 1,
    label
  });
  res.send("값 추가가 정상적으로 완료되었습니다.");
});

app.listen(3000, () => {
  console.log("server on!");
});
