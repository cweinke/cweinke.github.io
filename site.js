


const hours = new Date().getHours() // get the current hour
console.log(hours);
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?


let greeting = "";

if (hours >=4 && hours < 12){
    greeting = "Good Morning"
}
else if (hours >= 12 && hours < 17){
    greeting = "Good Afternoon"
}
else if (hours >= 17 || hours < 4){
    greeting = "Good Evening"
};
console.log(greeting);

const welcome = document.querySelector('div.welcome');
const h3 = document.createElement('h3');
document.getElementById('h3').innerHTML = greeting;
welcome.append(h3);

const html = greeting;
h3.innerHTML = html;





