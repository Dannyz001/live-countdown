const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

let futureDate = new Date(tempYear, tempMonth, tempDay + 10);

const year = futureDate.getFullYear();
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
month= (months[month])

const date = futureDate.getDate()

let weekDay = futureDate.getDay()
weekDay = weekdays[weekDay]
giveaway.textContent = `giveaway ends on ${weekDay}, ${date} ${month} ${year} ${hours}:${minutes}am`

const futureTime = futureDate.getTime()
console.log(futureTime)

const getRemainTime=()=>{
  const currentDate = new Date().getTime()
  console.log(currentDate)
  let endDate = futureTime - currentDate
  console.log(endDate)

  // 1 sec = 1000ms
  // 1min = 60sec
  // 1hr = 60min
  // 1day = 24hrs

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  const onesec =  1000

  let days = endDate/oneDay
  days = Math.floor(days);

  let hours = Math.floor((endDate%oneDay)/oneHour)
  console.log(hours)

  let minute = Math.floor((endDate%oneHour)/oneMinute)
  let seconds = Math.floor((endDate%oneMinute)/onesec)
  console.log(minute);

  const values = [days, hours, minute, seconds]

  const format=(item)=>{
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }

  items.forEach(function(item, index){

    item.innerHTML = format(values[index])
    console.log(index)
  })
  
  if(endDate<0){
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class='expired'> sorry, this giveaway has expired</h4>`
  }

}
let countdown = setInterval(getRemainTime, 1000)

getRemainTime()