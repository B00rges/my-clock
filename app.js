const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const formattedCLock = hour => hour < 10 ? `0${hour}` : hour

const getTime = () => {
    let dateToday = new Date();
    let hours = formattedCLock(dateToday.getHours())
    let minutes = formattedCLock(dateToday.getMinutes())
    let seconds = formattedCLock(dateToday.getSeconds())

    return [hours, minutes, seconds]
}

const updateClock = setInterval(function time() {
    const [hours, minutes, seconds] = getTime()
    
    horas.innerHTML = hours
    minutos.innerHTML = minutes
    segundos.innerHTML = seconds

}, 1000)
