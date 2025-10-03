const cell1 = document.getElementById('cell1')
const cell2 = document.getElementById('cell2')
const cell3 = document.getElementById('cell3')
const cell4 = document.getElementById('cell4')
const cell5 = document.getElementById('cell5')
const cell6 = document.getElementById('cell6')
const cell7 = document.getElementById('cell7')
const cell8 = document.getElementById('cell8')
const cell9 = document.getElementById('cell9')
let changer = 'X'

const trunsWriter = document.getElementById('trunsWriter')

const turnsWriterX = [
  "PlayerX, you’re up!",
  "Your Turn, SuckerX!!",
  "PlayerX, Suck it MF!",
  "Go on PlayerX!",
  "Fuck playerO's ass, PlayerX!",
  "Mother Fuckers Turn: PlayerX"
]
const turnsWriterO = [
  "PlayerO, you’re up!",
  "Your Turn, Dickhead O!!",
  "PlayerO, Suck X's Dick!",
  "Go on PlayerO!",
  "Fuck playerX's ass, PlayerO!",
  "Mother Fuckers Turn: PlayerO"
];

const resultText = document.getElementById('result')
const resetBtn = document.getElementById('reset')

const scoreX = document.getElementById('scoreX')
const scoreO = document.getElementById('scoreO')
let scoreCounterX = 0
let scoreCounterO = 0

const buttons = document.querySelectorAll('.cell')
let counter = 0
cell1.addEventListener('click', () => {
  if (changer === 'X') {
    cell1.innerHTML = 'X'
    cell1.disabled = true
    changer = 'O'
    counter++
    writingTurnsO()
  }
  else {
    cell1.innerHTML = 'O'
    cell1.disabled = true
    changer = 'X'
    counter++
    writingTurnsX()
  }
  result();
})
cell2.addEventListener('click', () => {
  if (changer === 'X') {
    cell2.innerHTML = 'X'
    cell2.disabled = true
    changer = 'O'
    counter++
    writingTurnsO()
  }
  else {
    cell2.innerHTML = 'O'
    cell2.disabled = true
    changer = 'X'
    counter++
    writingTurnsX()
  }
  result();
})
cell3.addEventListener('click', () => {
  if (changer === 'X') {
    cell3.innerHTML = 'X'
    cell3.disabled = true
    changer = 'O'
    counter++
    writingTurnsO()
  }
  else {
    cell3.innerHTML = 'O'
    cell3.disabled = true
    changer = 'X'
    counter++
    writingTurnsX()
  }
  result();
})
cell4.addEventListener('click', () => {
  if (changer === 'X') {
    cell4.innerHTML = 'X'
    cell4.disabled = true
    changer = 'O'
    counter++
    writingTurnsO()
  }
  else {
    cell4.innerHTML = 'O'
    cell4.disabled = true
    changer = 'X'
    counter++
    writingTurnsX()
  }
  result();
})
cell5.addEventListener('click', () => {
  if (changer === 'X') {
    cell5.innerHTML = 'X'
    cell5.disabled = true
    changer = 'O'
    counter++
    writingTurnsO()
  }
  else {
    cell5.innerHTML = 'O'
    cell5.disabled = true
    changer = 'X'
    counter++
    writingTurnsX()
  }
  result();
})
cell6.addEventListener('click', () => {
  if (changer === 'X') {
    cell6.innerHTML = 'X'
    cell6.disabled = true
    changer = 'O'
    counter++
    writingTurnsO()
  }
  else {
    cell6.innerHTML = 'O'
    cell6.disabled = true
    changer = 'X'
    counter++
    writingTurnsX()
  }
  result();
})
cell7.addEventListener('click', () => {
  if (changer === 'X') {
    cell7.innerHTML = 'X'
    cell7.disabled = true
    changer = 'O'
    counter++
    writingTurnsO()
  }
  else {
    cell7.innerHTML = 'O'
    cell7.disabled = true
    changer = 'X'
    counter++
    writingTurnsX()
  }
  result();
})
cell8.addEventListener('click', () => {
  if (changer === 'X') {
    cell8.innerHTML = 'X'
    cell8.disabled = true
    changer = 'O'
    counter++
    writingTurnsO()
  }
  else {
    cell8.innerHTML = 'O'
    cell8.disabled = true
    changer = 'X'
    counter++
    writingTurnsX()
  }
  result();
})
cell9.addEventListener('click', () => {
  if (changer === 'X') {
    cell9.innerHTML = 'X'
    cell9.disabled = true
    changer = 'O'
    counter++
    writingTurnsO()
  }
  else {
    cell9.innerHTML = 'O'
    cell9.disabled = true
    changer = 'X'
    counter++
    writingTurnsX()
  }
  result();
})

function writingTurnsO() {
  let turnsWriterOIndex = Math.floor(Math.random() * turnsWriterO.length)
  trunsWriter.innerHTML = turnsWriterO[turnsWriterOIndex]
}

function writingTurnsX() {
  let turnsWriterXIndex = Math.floor(Math.random() * turnsWriterX.length)
  trunsWriter.innerHTML = turnsWriterX[turnsWriterXIndex]
  
}


function result() {
  if (cell1.innerHTML === 'X' && cell2.innerHTML === 'X' && cell3.innerHTML === 'X'
  || cell4.innerHTML === 'X' && cell5.innerHTML === 'X' && cell6.innerHTML === 'X' 
  || cell7.innerHTML === 'X' && cell8.innerHTML === 'X' && cell9.innerHTML === 'X'
  
  || cell1.innerHTML === 'X' && cell4.innerHTML === 'X' && cell7.innerHTML === 'X' 
  || cell2.innerHTML === 'X' && cell5.innerHTML === 'X' && cell8.innerHTML === 'X' 
  || cell3.innerHTML === 'X' && cell6.innerHTML === 'X' && cell9.innerHTML === 'X'
   
  || cell1.innerHTML === 'X' && cell5.innerHTML === 'X' && cell9.innerHTML === 'X' 
   || cell3.innerHTML === 'X' && cell5.innerHTML === 'X' && cell7.innerHTML === 'X'
     ) {
    trunsWriter.innerHTML = '"AssLicker Wins 🍑👅🫦"'
    resultText.innerHTML = '"player X wins 🏆✨"'
    resultText.style.color = 'green'
    scoreCounterX++
    scoreX.innerHTML = scoreCounterX
    buttons.forEach(btn => {
      btn.innerHTML = 'X'
      btn.disabled = true
    })
  }
  else if (cell1.innerHTML === 'O' && cell2.innerHTML === 'O' && cell3.innerHTML === 'O'
  || cell4.innerHTML === 'O' && cell5.innerHTML === 'O' && cell6.innerHTML === 'O'
  || cell7.innerHTML === 'O' && cell8.innerHTML === 'O' && cell9.innerHTML === 'O'
  
  || cell1.innerHTML === 'O' && cell4.innerHTML === 'O' && cell7.innerHTML === 'O'
  || cell2.innerHTML === 'O' && cell5.innerHTML === 'O' && cell8.innerHTML === 'O'
  || cell3.innerHTML === 'O' && cell6.innerHTML === 'O' && cell9.innerHTML === 'O'
  
  || cell1.innerHTML === 'O' && cell5.innerHTML === 'O' && cell9.innerHTML === 'O'
  || cell3.innerHTML === 'O' && cell5.innerHTML === 'O' && cell7.innerHTML === 'O'
      
    ) {
    trunsWriter.innerHTML = '"CockSucker Wins 👉👄💦"'
    resultText.innerHTML = '"player O Wins 🏆✨"'
    resultText.style.color = 'red'
    scoreCounterO++
    scoreO.innerHTML = scoreCounterO
    buttons.forEach(btn => {
          btn.innerHTML = 'O'
          btn.disabled = true
     })
  }
  else if (counter == 9) {
    
    trunsWriter.innerHTML = '"Its a Tie, Both Mother Fucker Die 🔫"'
    resultText.innerHTML = '"Its a Tie 🤝"'
    resultText.style.color = 'black'
  } 
}

resetBtn.addEventListener('click', () => {
  buttons.forEach(btn => {
      btn.innerHTML = ''
      btn.disabled = false
      counter = 0
      changer = 'X'
      resultText.innerHTML = '-'
  })
})
