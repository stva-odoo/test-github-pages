import './style.css'

let count = 0
const button = document.querySelector('#counter')
button.addEventListener('click', () => {
  count++
  button.textContent = `Count: ${count}`
})

document.querySelector('#build-date').textContent = __BUILD_DATE__
