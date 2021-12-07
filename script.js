//data
const $today = new Date()
const $dateDisplay = document.getElementById('dateDisplay')
const $dateTimer = document.getElementById('dateTimer')

$dateDisplay.innerHTML = $today.toDateString()


//Timer Section



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
