//data
const today = new Date()
const future = new Date()
const $dateDisplay = document.getElementById('dateDisplay')
const $dateTimer = document.getElementById('dateTimer')
const $dateTimeDisplay = document.getElementById('dateTimeDisplay')
const $timerDate = document.getElementById('timerDate')


$dateDisplay.innerHTML = today.toDateString()


//Timer Section
let timerCount = today.getTime()

function toDays(ms) {
    return Math.floor(ms / 1000 / 60 / 60 / 24)
}
function toHours(ms){
    const days = toDays(ms)
    const hours = Math.floor(ms / 1000 / 60 / 60)
    const hoursadd = hours - (days * 24)

   return hoursadd
}

function toMinutes(ms){
    const days = toDays(ms)
    const hours = toHours(ms)
    const minutes = Math.floor(ms / 1000 / 60)
    const minutesadd = minutes - (hours * 60) - (days * 24 * 60)

    return minutesadd
}

function toSeconds(ms){
    const seconds = Math.floor((ms % (1000 * 60)) / 1000)
    return seconds
}

timerCounting = setInterval(function (){
    timerCount +=1000

    $timerDate.innerHTML =`${toHours(timerCount)}  ${toMinutes(timerCount)} ${toSeconds(timerCount)}`
},1000
)


$dateTimeDisplay.innerHTML = today

fetch('https://api.nasa.gov/planetary/apod?api_key=f41M4YrhaDGpFaIMrptDsj5a0DXCrB6tN29ajYmp&date=2021-12-7&thumbs=True')




.then(function (response){
    return response.json()
})

.then(function (imageData){
    console.log(imageData)


if (imageData.media_type === 'video'){
    document.querySelector('p').textContent = 'APOD is a video'

} else {
    document.querySelector('img').setAttribute('src', imageData.hdurl)
}
})


//Timer Section
