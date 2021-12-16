//data
const $information = document.getElementById('information')
const $dateTimer = document.getElementById('dateTimer')
const $dateTimeDisplay = document.getElementById('dateTimeDisplay')
const $timerDate = document.getElementById('timerDate')
const $dateOptions = document.getElementById('dateOptions')
const $settings = document.getElementById('settings')
const $allData = document.getElementById('allData')
const $settingsButton = document.getElementById('settingsButton')
const $greetings = document.getElementById('greetings')

const today = new Date()


//Clock timer

function runTheClock() {

    const today = new Date()
    //This is the greeting part where a certain statement will shown depending on the time
    if (today.getHours() < 12) {
        $greetings.innerHTML = 'Good Morning! It is Currently'

    } else if (today.getHours() > 12 && today.getHours() < 17) {
        $greetings.innerHTML = 'Good Afternoon! It is Currently'

    } else if (today.getHours() > 17 && today.getHours() < 23) {
        $greetings.innerHTML = 'Good Evening! It is Currently'
    }

    $timerDate.innerHTML = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()

    localStorage.setItem('currentTime', today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds())

    switch ($settings.elements['time'].value) {
        case 'hoursMinClock':
            $timerDate.innerHTML = today.getHours() + ':' + today.getMinutes()
            localStorage.setItem('clockOptions', 'Hour and Minutes Clock')

            break

        case 'fullClock':
            $timerDate.innerHTML = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
            localStorage.setItem('clockOptions', 'Full Time Clock')
            break


    }
    setTimeout(runTheClock, 1000)
}




$allData.addEventListener('click', function () {

    if ($information) {
        $information.classList.toggle('click')
    }

    $information.innerHTML = `<p> Day: ${today.getDate()} </p> 
                            <br>
                             <p> Month: ${today.getMonth()+1}</p>
                             <br>
                             <p> Year: ${today.getFullYear()}</p> `
})


$settingsButton.addEventListener('click', function () {
    if ($settings) {
        $settings.classList.toggle('openSettings')
    }


})


$settings.addEventListener('submit', function (event) {
    event.preventDefault()

    // This is the option for the date display


    switch ($settings.elements['date'].value) {
        case 'fullDate':
            $dateTimeDisplay.innerHTML = today.toDateString()
            localStorage.setItem('Date Option', 'Full Date')

            break

        case 'simpleDate':
            // $dateTimeDisplay.innerHTML = today
            $dateTimeDisplay.innerHTML = today.toLocaleDateString()
            localStorage.setItem('Date Option', 'Simple Date')
            break

        case 'none':
            // $dateTimeDisplay.innerHTML = today
            $dateTimeDisplay.innerHTML = ''
            localStorage.setItem('Date Option', 'None')
            break

    }


    //This is the option for the time display


})

// Store and retrieve Data
function initialize() {
    const storedOptions = localStorage.getItem('clockOptions')

    if (storedOptions) {

        // runTheClock(storedOptions)
        // $timerDate.innerHTML = today.getHours() + ':' + today.getMinutes()
        // localStorage.setItem('clockOptions', 'Hour and Minutes Clock')


    } else {
        runTheClock($settings.elements['time'].value)
    }
}


fetch('https://api.nasa.gov/planetary/apod?api_key=f41M4YrhaDGpFaIMrptDsj5a0DXCrB6tN29ajYmp&date=2021-12-16&thumbs=True')




    .then(function (response) {
        return response.json()
    })

    .then(function (imageData) {
        console.log(imageData.date)


        if (imageData.media_type === 'video') {
            // document.querySelector('p').textContent = 'APOD is a video'
            document.body.style.backgroundImage = `url(${imageData.media_type})`;

        } else {
            // document.querySelector('img').setAttribute('src', imageData.hdurl)
            document.body.style.backgroundImage = `url(${imageData.hdurl})`;
        }
    })

runTheClock()
initialize()