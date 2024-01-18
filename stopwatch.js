document.addEventListener('DOMContentLoaded', () => {
    let timerdisplay = document.getElementById('timerdisplay')
    let startbtn = document.getElementById("startbtn")
    let stopbtn = document.getElementById("stopbtn")
    let resetbtn = document.getElementById("resetbtn")

    let msec = 0;
    let secs = 0;
    let mins = 0;

    let timerId = null;

    startbtn.addEventListener('click', () => {
        if (timerId !== null) {
            clearInterval(timerId)
        }
        timerId = setInterval(startTimer, 10);
    })
    stopbtn.addEventListener('click', () => {
        clearInterval(timerId)

    })
    resetbtn.addEventListener('click', () => {
        clearInterval(timerId)
        timerdisplay.innerHTML = `00 : 00 : 00`
        msec = secs = mins =0;
    })

    let startTimer = () => {
        msec++;
        if (msec == 100) {
            msec = 0;
            secs++;
            if (secs == 60) {
                secs = 0;
                mins++
            }
        }
        let msecString = msec < 10 ? `0${msec}` : msec
        let secString = secs < 10 ? `0${secs}` : secs
        let minsString = mins < 10 ? `0${mins}` : mins

        timerdisplay.innerText=`${minsString} : ${secString} : ${msecString}`
    }

})
