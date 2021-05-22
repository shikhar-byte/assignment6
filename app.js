
const inp = document.getElementById('inp');

const btn= document.getElementById('addTodo');

const list= document.getElementById('list');

const lis = document.querySelectorAll('li');

const is = document.querySelectorAll('span i');

btn.onclick = function(e){

    const todoText =inp.value;

    const i = document.createElement('i');
    i.setAttribute('class', 'fas fa-trash-alt');

    const span = document.createElement('span');
    span.append(i);

    const li = document.createElement('li');
    li.innerHTML = todoText;

    li.prepend(span);
    
  
    li.onclick = function(e){
      e.target.classList.toggle('completed');
    }

    i.onclick = function(e){
      e.target.parentElement.parentElement.remove();
    }
  

    list.append(li);

    inp.value="";
}

for(let li of lis){
  li.addEventListener('click', function(e){
    e.target.classList.toggle('completed');
  })
}


for( let i of is){
  i.addEventListener('click', function(e){
    e.target.parentElement.parentElement.remove();
  })
}
