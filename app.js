const formatClock = value => String(value).length -1 ? value : `0${value}`

const clockContainer = document.querySelector('.clock-container')

const myClock = (hours, minutes, seconds) => `
  <span>${hours}</span> :
  <span>${minutes}</span> :
  <span>${seconds}</span>
`

const updateClock = () => {
  const present = new Date()
  const hours = formatClock(present.getHours())
  const minutes = formatClock(present.getMinutes())
  const seconds = formatClock(present.getSeconds())


  clockContainer.innerHTML = myClock(hours, minutes, seconds)
}

setInterval(updateClock, 1000)