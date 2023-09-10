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
  }else if(payload.type === 'ROOK'){
    const x = payload.x;
    const y = payload.y;
    // check number 1 to 8 
    if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
      return { result: true, x, y };
    }
  }
  return { result: false };
}

function checkKnight(payload){
  if (payload.type === 'KNIGHT') {
    const x = payload.x;
    const y = payload.y;
    // check number 1 to 8 
    if ( x>= 1 && x <= 8 && y >= 1 && y <= 8) {
      return { result: true, x, y};
    }
}
}

function checkBishop(payload){
  if (payload.type === 'BISHOP') {
    const x = payload.x;
    const y = payload.y;
    // check number 1 to 8 
    if ( x>= 1 && x <= 8 && y >= 1 && y <= 8) {
      return { result: true, x, y};
    }
}
}

function checkKing(payload){
  if (payload.type === 'KING') {
    const x = payload.x;
    const y = payload.y;
    // check number 1 to 8 
    if ( x>= 1 && x <= 8 && y >= 1 && y <= 8) {
      return { result: true, x, y};
    }
}
}


function checkQueen(payload){
  if (payload.type === 'QUEEN') {
    const x = payload.x;
    const y = payload.y;
    // check number 1 to 8 
    if ( x>= 1 && x <= 8 && y >= 1 && y <= 8) {
      return { result: true, x, y};
    }
}
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

app.post('/rook',(req,res)=>{
  const payload = req.body;
  let result = checkType(payload)
  console.log(result,'rook');
  const X = parseInt(result.x)
  const Y = parseInt(result.y)
  const  upMove =[]
  const  rightMove =[]
  const leftMove = []
  const downMove =[]

  for (let i = 1; i < 8; i++) {

    if (i + X >=1 && i + X < 8) {
      upMove.push({ x: X, y: Y + i })
    }
    
    if (i + X >=1 && i + X < 8) {
      downMove.push({ x: X, y: Y - i })
    }
    
    if (i + X >=1 && i + X < 8) {
      rightMove.push({ x: X - i, y: Y  })
    }
    
    if (i + X >=1 && i + X < 8) {
      leftMove.push({ x: X + i, y: Y  })
    }
  }
  return res.json({upMove,rightMove,leftMove,downMove }) 
})

app.post('/knight',(req,res)=>{
  const payload = req.body;
  let result = checkKnight(payload)
  // check number 1 to 8 
  
    const move = []
    const X = parseInt(result.x)
    const Y = parseInt(result.y)
    for (let i = 1; i <=8; i++) {
      for (let j = 1;  j <=8; j++) {
        const dataX = Math.abs(i - X);
        // console.log(dataX,'x');
        const dataY = Math.abs(j - Y);
        // console.log(dataY,'y');
        if (dataX === 2 && dataY === 1) {
          move.push({x :i ,y :j})
          }
          if (dataX === 2 && dataY === 1) {
            move.push({x :i ,y :j})
          }
      }
    }
    return res.json({ move }) 
})


app.post('/Bishop',(req,res)=>{
  const payload = req.body;
  let result = checkBishop(payload)
  console.log(result,'bishop');
  // check number 1 to 8 
  
  const upToRight =  []
  const downToLeft =  []
  const downToRight = []
  const upToLeft  = []

    const X = parseInt(result.x)
    const Y = parseInt(result.y)
    for (let i = 1; i <=8; i++) {
      //up  to right
      const newX = X + i;
      // console.log(newX,'newX');
      const newY = Y + i;
      // console.log(newY,'newy');
      
      if (newX >= 1 && newX < 8 && newY >= 1 && newY < 8) {
        upToRight.push({X:newX,Y: newY});
      }

      //down-left 
      const newX2 = X - i;
      const newY2 = Y - i;

        if (newX2 >= 1 && newX2 < 8 && newY2 >= 1 && newY2 < 8) {
          downToLeft.push({X:newX2,Y: newY2});
        }

        // down to right
        const newX3 = X + i;
        const newY3 = Y - i;

        if (newX3 >= 1 && newX3 < 8 && newY3 >= 1 && newY3 < 8) {
          downToRight.push({X:newX3,Y: newY3});
        }

        // down-right 
        const newX4 = X - i;
        const newY4 = Y + i;

        if (newX4 >= 1 && newX4 < 8 && newY4 >= 1 && newY4 < 8) {
          upToLeft.push({X:newX4,Y: newY4});
        }
    }
    return res.json({upToRight,downToLeft,downToRight,upToLeft}) 
})

app.post('/king',(req,res)=>{
  const payload = req.body;
  let result = checkKing(payload)
  console.log(result,'king');

  const X = parseInt(result.x)
  const Y = parseInt(result.y)
  const  upMove =[]
  const  rightMove =[]
  const leftMove = []
  const downMove =[]
  const upToleft =[]
  const upToRight = []
  const downToLeft =[]
  const downToRight =[]
  for (let i = 1; i < 8; i++) {
    //up 
  if (i == X) {
    upMove.push({ x: X, y: Y + 1 })
  }
  // right 
  if (i == X) {
    rightMove.push({ x: X + 1, y: Y })
  }
  //left move
  if (i == X) {
    leftMove.push({ x: X - 1, y: Y })
  }
  // down
  if (i == X) {
    downMove.push({ x: X, y: Y-1 })
  }
  if (i == X) {
    upToleft.push({x:X - 1,y: Y + 1});
  }
  if (i == X) {
    upToRight.push({x:X + 1,y: Y + 1});
  }
  if (i == X) {
    downToLeft.push({x:X - 1,y: Y - 1});
  }
  if (i == X) {
    downToRight.push({x:X + 1,y: Y - 1});
  }
  }

  return res.json({upMove,rightMove,leftMove,downMove,upToleft,upToRight,downToLeft,downToRight}) 
})

app.post('/queen',(req,res)=>{
  const payload = req.body;
  let result = checkQueen(payload)
  console.log(result,'queen');

  const X = parseInt(result.x)
  const Y = parseInt(result.y)
  const  upMove =[]
  const  rightMove =[]
  const leftMove = []
  const downMove =[]
  const upToleft =[]
  const upToRight = []
  const downToLeft =[]
  const downToRight =[]

  for (let i = 1; i < 8; i++) {
    if (i + X >=1 && i + X < 8) {
      upMove.push({ x: X, y: Y + i })
    }

    if (i + X >=1 && i + X < 8) {
      downMove.push({ x: X, y: Y - i })
    }

    if (i + X >=1 && i + X < 8) {
      rightMove.push({ x: X - i, y: Y  })
    }

    if (i + X >=1 && i + X < 8) {
      leftMove.push({ x: X + i, y: Y  })
    }

    // cross code  
      const newX = X + i;
      const newY = Y + i;
      
      if (newX >= 1 && newX < 8 && newY >= 1 && newY < 8) {
        upToRight.push({X:newX,Y: newY});
      }

      //down-left 
      const newX2 = X - i;
      const newY2 = Y - i;

        if (newX2 >= 1 && newX2 < 8 && newY2 >= 1 && newY2 < 8) {
          downToLeft.push({X:newX2,Y: newY2});
        }

        // down to right
        const newX3 = X + i;
        const newY3 = Y - i;

        if (newX3 >= 1 && newX3 < 8 && newY3 >= 1 && newY3 < 8) {
          downToRight.push({X:newX3,Y: newY3});
        }

        // down-right 
        const newX4 = X - i;
        const newY4 = Y + i;

        if (newX4 >= 1 && newX4 < 8 && newY4 >= 1 && newY4 < 8) {
          upToleft.push({X:newX4,Y: newY4});
        }
  }
  return res.json({upMove,downMove,rightMove,leftMove,upToRight,downToLeft,downToRight,upToleft})
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
