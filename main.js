const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")	
const arr15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(()=> Math.random() - 0.5)

let drawSquare = [];
let coordY = 0;
let coordX = 0;

class CreateSquare {
  constructor(ctx){
    this.ctx = ctx;
  }

  fillAllRect(x = 0, y = 0, val) {
    this.ctx.fillStyle = "black"
    this.ctx.fillRect(x, y, 100, 100);

    val === 0 ? this.ctx.fillStyle = "white" : this.ctx.fillStyle = "teal";

    this.ctx.fillRect(x + 5, y + 5, 90, 90);
    this.ctx.font = "60px Arial";
    this.ctx.fillStyle = "white";

    if(val < 10) {
      this.ctx.fillText(val, x + 35, y + 70) 
    } else this.ctx.fillText(val, x + 15, y + 70)
  }

	drawTag(pos, val) { 
    switch(pos) {
      case 4 : {
        coordY += 100;
        coordX = 0;
        break;
      }
      case 8 : {
        coordY += 100;
        coordX = 0;
        break;
      }
      case 12 : {
        coordY += 100;
        coordX = 0;
        break;
    }}

    this.fillAllRect(coordX, coordY, val)
    coordX += 100
	}
}

arr15.forEach((item, index) => 	drawSquare[index] = new CreateSquare(ctx)) // Создаем 15 обьектов с нужными методами
drawSquare.forEach((item, index) => item.drawTag(index, arr15[index])) // Рендерим их с нужными параметрами

canvas.addEventListener("click", (e) => { 
  let clickPos;
  if (e.clientY < 110) clickPos = setClickPos(checkPlace(e.clientX), 1)
  if (e.clientY > 110 && e.clientY < 210) clickPos = setClickPos(checkPlace(e.clientX), 2)
  if (e.clientY > 210 && e.clientY < 310) clickPos = setClickPos(checkPlace(e.clientX), 3)
  if (e.clientY > 310 && e.clientY < 410) clickPos = setClickPos(checkPlace(e.clientX), 4)
  
  applyChanged(clickPos)
})


const checkPlace = (evX) => {
  if (evX < 110) return 1
  if (evX < 210) return 2
  if (evX < 310) return 3
  if (evX < 410) return 4
}

const setClickPos = (place, row) => {
  let countPos = 0;
  if(row === 1) countPos = 0;
  if(row === 2) countPos = 4;
  if(row === 3) countPos = 8;
  if(row === 4) countPos = 12

  switch(place) {
    case 1: return countPos;
    case 2: return countPos + 1;
    case 3: return countPos + 2;
    case 4: return countPos + 3;
  }
}

const applyChanged = (value) => {
  if (arr15[value - 4] === 0){
    arr15[value - 4] = arr15[value]
    arr15[value] = 0

    coordX = 0, coordY = 0;
    drawSquare.forEach((item, index) => item.drawTag(index, arr15[index]))
  }
  
  if (arr15[value + 4] === 0){
    arr15[value + 4] = arr15[value]
    arr15[value] = 0

    coordX = 0, coordY = 0;
    drawSquare.forEach((item, index) => item.drawTag(index, arr15[index]))
  }
  
  if (arr15[value + 1] === 0 && value !== 3
    && value !== 7 && value !== 11){
    arr15[value + 1] = arr15[value]
    arr15[value] = 0
      
    coordX = 0, coordY = 0;
    drawSquare.forEach((item, index) => item.drawTag(index, arr15[index]))
  }
  
  if (arr15[value - 1] === 0 && value !== 4
    && value !== 8 && value !== 12){
    arr15[value - 1] = arr15[value]
    arr15[value] = 0
    
    coordX = 0, coordY = 0;
    drawSquare.forEach((item, index) => item.drawTag(index, arr15[index]))
  }
}
