let secondHand = document.getElementById('secondHand');
let minuteHand = document.getElementById('minuteHand');
let hourHand = document.getElementById('hourHand');

function getTime() {
    let date = new Date();
    let second = date.getSeconds();
    let minute = date.getMinutes() + second/60;
    let hour = date.getHours() + minute/60 + second/3600;
    secondHand.style.transform = "rotate(" + (second*6) + "deg)";
    minuteHand.style.transform = "rotate(" + (minute*6) + "deg)";
    hourHand.style.transform = "rotate(" + (hour*30) + "deg)";
    let digitalClock = document.querySelector('.digitalClock');
    // console.log(digitalClock);
    digitalClock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
let time = setInterval( getTime , 1000);

function circularText(numbers) {
    let radius=110;
    numbers = numbers.split(" ");
    // console.log(numbers);
    let indexNumber = document.querySelector('.clockNumbers');
    // console.log(indexNumber);
    let deg = 360/numbers.length;
    let origin = 28;
    numbers.forEach(singleNumber => {
        singleNumber = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${singleNumber}</p>`;
        indexNumber.innerHTML += singleNumber;
        origin += deg;
    })
}

circularText("| | 3 | | 6 | | 9 | | 12");

function setAlarm(e) {
    e.preventDefault();
    let alarm = document.getElementsByClassName('alarm')[0];

    let alarmHourValue = document.getElementById('alarmHourValue');
    let alarmMinuteValue = document.getElementById('alarmMinuteValue');
    if(alarmHourValue.value > 12 || alarmHourValue.value == "" || alarmMinuteValue.value >= 60 || alarmMinuteValue.value == "") {
        let validHourMessage = document.createElement('h3');
        validHourMessage.innerHTML = "Enter valid time";
        alarm.append(validHourMessage);
    } else {
        if
    } 

}

