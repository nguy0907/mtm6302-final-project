//data
const $dateDisplay = document.getElementById('dateDisplay')
const $dateTimer = document.getElementById('dateTimer')
const $dateTimeDisplay = document.getElementById('dateTimeDisplay')
const $timerDate = document.getElementById('timerDate')
const $dateOptions = document.getElementById('dateOptions')
const $settings = document.getElementById('settings')
const $allData = document.getElementById('allData')

const today = new Date()
const date = new Date()

//Month array
const month =  [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

//Timer Section

let clockTimer = today.getTime()

function toDays(ms) {
    return Math.floor(ms / 1000 / 60 / 60 / 24)
}

function toHours(ms) {
    const days = toDays(ms)
    const hours = Math.floor(ms / 1000 / 60 / 60)
    const hoursLeft = hours - (days * 24)

    return hoursLeft
}

function toMinutes(ms) {
    const days = toDays(ms)
    const hours = toHours(ms)
    const minutes = Math.floor(ms / 1000 / 60)
    const minutesLeft = minutes - (hours * 60) - (days * 24 * 60)

    return minutesLeft

}

    function toSeconds(ms) {
        const seconds = Math.floor((ms % (1000 * 60)) / 1000)
        return seconds
    }
timer = setInterval(function (){
    clockTimer += 1000


}, 1000)

$allData.addEventListener('click', function(){
    $dateDisplay.innerHTML = today.getMonth(month)
})


$settings.addEventListener('submit', function(event){
    event.preventDefault()

    // This is the option for the date display

    for (let i=0; i<$settings.elements.length; i++){
        console.log($settings.elements['date'].value)
   

switch ($settings.elements['date'].value){
    case '0':
        $dateDisplay.innerHTML = today.toDateString()
        $dateTimeDisplay.innerHTML = ''
    break

    case '1':
// $dateTimeDisplay.innerHTML = today
$dateDisplay.innerHTML = today.toLocaleDateString()
    break

    case '2':
        // $dateTimeDisplay.innerHTML = today
        $dateDisplay.innerHTML = ''
            break

   }
}
  //This is the option for the time display
  for (let i=0; i<$settings.elements.length; i++){
    console.log($settings.elements['time'].value)


switch ($settings.elements['time'].value){
case '0':
    $timerDate.innerHTML = toHours(clockTimer) -4 + ':' + toMinutes(clockTimer)
break

case '1':
    $timerDate.innerHTML =toHours(clockTimer) -4 + ':' + toMinutes(clockTimer)+ ':' + toSeconds(clockTimer)
break

}
}

})



fetch('https://api.nasa.gov/planetary/apod?api_key=f41M4YrhaDGpFaIMrptDsj5a0DXCrB6tN29ajYmp&date=2021-12-13&thumbs=True')




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
