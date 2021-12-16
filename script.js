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



function runTheClock(){

 const today = new Date()
    
if (today.getHours() < 12){
$greetings.innerHTML = 'Good Morning! It is Currently'

} else if  (today.getHours() > 12 && today.getHours() <17){
    $greetings.innerHTML = 'Good Afternoon! It is Currently'

} else if  (today.getHours() > 17 && today.getHours() <23){
    $greetings.innerHTML = 'Good Afternoon! It is Currently'
}


   $timerDate.innerHTML =  today.getHours() + ':'+ today.getMinutes() + ':' + today.getSeconds()

    localStorage.setItem('Full Time Clock',  today.getHours() + ':'+ today.getMinutes() + ':' + today.getSeconds())
  
    switch ($settings.elements['time'].value){
case '0':
    $timerDate.innerHTML =  today.getHours() + ':'+ today.getMinutes()
    localStorage.setItem('Clock Options', 'Hour and Minutes Clock')
    
break

case '1':
    $timerDate.innerHTML =  today.getHours() + ':'+ today.getMinutes() + ':' + today.getSeconds()
    localStorage.setItem('Clock Options', 'Full Time Clock')
break


}  
    setTimeout(runTheClock,1000)
    }
    
    runTheClock()
   
//   for (let i=0; i<$settings.elements.length; i++){
//     console.log($settings.elements['time'].value)
// }



$allData.addEventListener('click', function(){

    if ($information){
$information.classList.toggle('click')
    }

    $information.innerHTML = `Day: ${today.getDate()}
    Month: ${today.getMonth()}
    Year: ${today.getFullYear()}`
})


$settingsButton.addEventListener('click', function(){
    if ($settings){
        $settings.classList.toggle('openSettings')
    }
})


$settings.addEventListener('submit', function(event){
    event.preventDefault()

    // This is the option for the date display

    for (let i=0; i<$settings.elements.length; i++){
        console.log($settings.elements['date'].value)
   

switch ($settings.elements['date'].value){
    case '0':
        $dateTimeDisplay.innerHTML = today.toDateString()
        localStorage.setItem('Date Option', 'Full Date')

    break

    case '1':
// $dateTimeDisplay.innerHTML = today
$dateTimeDisplay.innerHTML = today.toLocaleDateString()
localStorage.setItem('Date Option', 'Simple Date')
    break

    case '2':
        // $dateTimeDisplay.innerHTML = today
        $dateTimeDisplay.innerHTML = ''
        localStorage.setItem('Date Option', 'None')
            break
           
   }

}
  //This is the option for the time display


})
     const storedOptions = localStorage.getItem('Clock Options')
function initialization(){


    if (storedOptions){
        runTheClock(storedOptions)   
    } else{
        runTheClock($settings.elements['time'].value)    
    }
}

fetch('https://api.nasa.gov/planetary/apod?api_key=f41M4YrhaDGpFaIMrptDsj5a0DXCrB6tN29ajYmp&date=2021-12-14&thumbs=True')




.then(function (response){
    return response.json()
})

.then(function (imageData){

    console.log(imageData.date)

   

if (imageData.media_type === 'video'){
    // document.querySelector('p').textContent = 'APOD is a video'
    document.body.style.backgroundImage = `url(${imageData.media_type})`; 


} else {
    // document.querySelector('img').setAttribute('src', imageData.hdurl)
  document.body.style.backgroundImage = `url(${imageData.hdurl})`; 
}
})


