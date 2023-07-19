// Делаем обработчик событий для кнопки "addButton" который работает при клике
document.getElementById("addButton").addEventListener("click", addTask);
let abc= document.querySelector('.qwerty')
// Функция для добавления
let complayted=document.querySelector('.complayted')
let countre=0
let www=[]
function addTask() {
  // Находим узел "input" и добавляем в переменную
  let input = document.getElementById("input");
  // Находим узел "ul" и добавляем в переменную
  let list = document.getElementById("list");
 
 
  // Проверяем инпут на предмет наличия в нем символов
  if (input.value !== "") {
    // Создаем переменную которую в дальшейшем будем добавлять в качестве новой задачи
    let task = document.createElement("div");
    // Добавляем в переменную текст из значения input
    task.innerHTML += input.value;
    // Добавляем саму переменную в список (в тег "ul")
    list.append(task);
    // Очищаем строку в input
    task.onclick=taskcompl

  
    
  }
  
    let mass=input.value.split(' ')
    console.log(mass);
  
    www.push(mass)
    console.log(www);
    abc.innerHTML= www.length
    input.value = "";
}

function taskcompl(e){
  e.target.classList.toggle('comp')
  e.target.classList.contains('comp') 
  ?countre++
  :countre--
  complayted.textContent=countre
}
let i = 0
function one(){
console.log('Наша первая осознанная функция');
alert('Ты нажал кнопку ' + i + ' раз')
i+=1
}

let btn = document.querySelector('.checker')
console.log(btn)
btn.onclick = one

document.querySelector('.out').innerHTML= one
