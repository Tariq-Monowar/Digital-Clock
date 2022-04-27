const clock = document.querySelector(".digital-clock")
const timeFormet = document.querySelector("small")

const digitel_clock = ()=>{
    let deat = new Date()
    let hours = deat.getHours()
    let minits = deat.getMinutes()
    let seconds = deat.getSeconds()
    let am_pm = 'am'

    if(hours>12){
        hours = hours - 12
        am_pm = 'pm'
    }
    if(hours <10) hours = "0"+ hours
    if(minits <10) minits = "0"+ minits
    if(seconds <10) seconds = "0"+ seconds

    let time = `${hours}:${minits}:${seconds}`

    clock.innerHTML = time
    timeFormet.innerHTML = am_pm
    setInterval(digitel_clock,1000)
}

digitel_clock()