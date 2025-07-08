const counters = document.getElementsByClassName('counter')
const delay = 200;
let timerId;

for (const counter of counters) initCounter(counter)

function initCounter(parent) {
  let count = 0;
  const [plusBtn, minusBtn, countOut] = parent.children;

  plusBtn.onclick = () => shift(1)
  minusBtn.onclick = () => shift(-1)

  plusBtn.onmousedown = () => startShifting(1)
  plusBtn.onmouseup = plusBtn.onmouseleave = stopShifting

  minusBtn.onmousedown = () => startShifting(-1)
  minusBtn.onmouseup = minusBtn.onmouseleave = stopShifting

  function shift(step = 1) {
    count += step
    countOut.value = count
  }

  function startShifting(step = 1) {
    timerId = setInterval(shift, delay, step)
  }

  function stopShifting() {
    clearInterval(timerId)
  }
}