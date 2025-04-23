let timer
let isrunning
isrunning=false
let time=0
const clok=document.getElementById('MyClockDisplay')
const sar=document.getElementById('startStopButton')
const r=document.getElementById('resetButton')
sar.addEventListener('click',()=>{
    if (isrunning) {
        clearInterval(timer)
        sar.textContent='start'
    }
    else{
        timer=setInterval(updateTime,10)
        sar.textContent='stop'
    }
    isrunning=!isrunning
})
r.addEventListener('click',()=>{
    clearInterval(timer)
    time=0
    isrunning=false
    clok.textContent=formatTime(time)
    sar.textContent='start'
})
function updateTime(){
    time=time+10
    clok.textContent=formatTime(time)
}
function formatTime(ms) {
    const mins=Math.floor(ms/60000)
    const secs=Math.floor((ms%60000)/1000)
    const mili=(ms%1000)
    return `${padZero(mins)}:${padZero(secs)}:${padZero(mili,3)}`
}
function padZero(num,lenth=2){
    return num.toString().padStart(lenth,'0')
}