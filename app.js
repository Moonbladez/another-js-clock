const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".minute-hand")
const hourHand = document.querySelector(".hour-hand")

const setDate = () => {
    //date now
    const now = new Date()
    //seconds in current minute
    const seconds = now.getSeconds()
    //current seconds dvidied by 60 multiple by 360deg. exp 0 seconds / 60 = 0 * 360 = hand at 360 degrees. + 90 to offset 90 we added in css
    const secondsDegrees = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`


    const minutes = now.getMinutes()
    const minuteDegrees = ((minutes / 60) * 360) + 90
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`


    const hour = now.getHours()
    const hourDegrees = ((hour / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000)