const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


function checkType(payload) {
  // Check The Chess Pieces 
  if (payload.type === 'PAWN') {
    const x = payload.x;
    const y = payload.y;
    // check number 1 to 8 
    if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
      return { result: true, x, y };
    }
  }
  return { result: false };
}

app.post('/final-pawn', (req, res) => {
  const payload = req.body;
  let result = checkType(payload)
  const move = []
  const X = parseInt(result.x)
  const Y = parseInt(result.y)
  if (Y <= 8) {
    move.push({ x: X, y: Y + 1 })
  }

  if (X > 1) {
    move.push({ x: X - 1, y: Y + 1 })
  }

  if (X < 8) {
    move.push({ x: X + 1, y: Y + 1 })
  }

  return res.json({ move })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});