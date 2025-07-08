let count = 0;
let timerId;
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const countOut = document.getElementById('count');

plusBtn.onclick = increment
minusBtn.onclick = decrement

plusBtn.onmousedown = startIncrement
plusBtn.onmouseup = stopIncrement
plusBtn.onmouseleave = stopIncrement

minusBtn.onmousedown = startDecrement
minusBtn.onmouseup = stopDecrement
minusBtn.onmouseleave = stopDecrement

function increment() {
  count++

  showCount()
}

function decrement() {
  count--

  showCount()
}

function showCount() {
  countOut.value = count
}

function startIncrement() {
  timerId = setInterval(increment, 150)
}

function stopIncrement() {
  clearInterval(timerId)
}

function startDecrement() {
  timerId = setInterval(decrement, 150)
}

function stopDecrement() {
  clearInterval(timerId)
}