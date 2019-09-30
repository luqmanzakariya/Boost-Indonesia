let board = []
let direction = 'north'
let position = { x: 0, y: 0, f: '', face: ''}

// Generate Board
for (let i=0; i<5; i++){
  board[i] = []
  for (let j=0; j<5; j++){
    board[i][j] = []
  }
}

// Place Toy Robot in Board
function place (x,y,direction){
  if (direction === 'north'){
    direction = '▲'
  }
  else if (direction === 'east'){
    direction = '►'
  }
  else if (direction === 'south'){
    direction = '▼'
  }
  else if (direction === 'west'){
    direction = '◄'
  }

  for (let i=0; i<board.length; i++){
    for (let j=0; j<5; j++){
      if (i=== (4-x) && j===y){
        board[i][j] = direction
      }
      else {
        board[i][j] = ' '
      }
    }
  }
}

// Move Function
function move (){
  for (let i=0; i<board.length; i++){
    for (let j=0; j<board[i].length; j++){
      if (board[i][j] === '▲'){
        board[i][j] = ' '
        position.x = i-1
        position.y = j
        position.f = '▲'
        position.face = 'north'
      }
      else if (board[i][j] === '►'){
        board[i][j] = ' '
        position.x = i
        position.y = j+1
        position.f = '►'
        position.face = 'east'
      }
      else if (board[i][j] === '▼'){
        board[i][j] = ' '
        position.x = i+1
        position.y = j
        position.f = '▼'
        position.face = 'south'
      }
      else if (board[i][j] === '◄'){
        board[i][j] = ' '
        position.x = i
        position.y = j-1
        position.f = '◄'
        position.face = 'west'
      }
    }
  }

  board[position.x][position.y] = position.f
}

// Change Direction
function left(){
  for (let i=0; i<5; i++){
    for (let j=0; j<5; j++){
      if (board[i][j] !== ' ' && board[i][j] === '▲'){
        board[i][j] = '◄'
        position.face = 'west'
      }
      else if (board[i][j] !== ' ' && board[i][j] === '◄'){
        board[i][j] = '▼'
        position.face = 'south'
      }
      else if (board[i][j] !== ' ' && board[i][j] === '▼'){
        board[i][j] = '►'
        position.face = 'east'
      }
      else if (board[i][j] !== ' ' && board[i][j] === '►'){
        board[i][j] = '▲'
        position.face = 'north'
      }
    }
  }
}

// Display
function report (board){
  let view = board.map( x=>'| '+ x.join(' | ')+' |')
  console.log(view.join('\n'))
  console.log('current position: ', position.x, position.y, position.face)
  
  // Clear board
  for (let i=0; i<5; i++){
    for (let j=0; j<5; j++){
      board[i][j] = ' '
    }
  }
  position.x = 0
  position.y = 0
  position.f = ''
  position.face = ''
}

// ========== Put command here! ==========
place(0,0, 'north')
move()
report(board)

place(0,0, 'north')
left()
report(board)

place(1,2, 'east')
move()
move()
left()
move()
report(board)