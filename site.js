
const key = "It's a secret to everybody"
localStorage.setItem(key, '+1 Rupee')



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

//const welcome = document.querySelector('div.welcome');
const h3 = document.createElement('h3');
document.getElementById('h3').innerHTML = greeting;
welcome.append(h3);

const html = greeting;
h3.innerHTML = html;

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

function nextImage() {
    ++currentImage;
    showImages();
}

function previousImage() {
    --currentImage;
    showImages();
}

setInterval(() => {
    nextImage()
}, 5000);

const next = document.querySelector('#next')
next.addEventListener('click', (nextImage))

const prev = document.querySelector('#prev')
prev.addEventListener('click', (previousImage))
//---------------------------------------------------
const todos = JSON.parse(localStorage.getItem('todo-list')) || [];
const renderTodos = () =>
{
    const todoList = document.querySelector('#todo-list')
    todoList.innerHTML = '';
    todos.forEach(todo =>
        {const li = document.createElement('li')
        li.textContent = todo.text
        todoList.appendChild(li)});
    
};

renderTodos();
const todoInput = document.querySelector('#new-todo')
const todoButton = document.querySelector('#todo-button')
todoButton.addEventListener('click', () => {
	

    todos.push({ text: todoInput.value, completed: false })
    localStorage.setItem('todo-list', JSON.stringify(todos))
    renderTodos();

})



