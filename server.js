// server.js

const express = require('express');
const CORS = require('cors');
const app = express();

// CORS 설정을 위한 헤더
app.use(CORS({
  origin: 'http://localhost:5502',
  methods : ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE'], 
}));

app.use(express.text());

let data = { message: '여러분 화이팅!' };

app.get('/message', (req, res) => {
  res.json(data);
});

app.post('/message', (req, res) => {
  data.message = req.body;
  res.send(`받은 POST 데이터: ${req.body}`);
});

app.put('/message', (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

app.delete('/message', (req, res) => {
  data = {};
  res.send('데이터가 삭제되었습니다.');
});

app.listen(3000, () => {
  console.log('Express 서버가 http://localhost:3000/ 에서 실행 중입니다.');
});
