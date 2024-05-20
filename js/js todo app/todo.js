const input = document.getElementById('inputs');
const button = document.querySelector('.inputBtn');
const task = document.querySelector('.task');

function addTask(){
    if(input.value==""){
        alert('You must enter task');
    }
    else{
        let list = document.createElement('li')
        list.innerHTML= input.value;
        task.appendChild(list);
        let cross = document.createElement('span');
        cross.innerHTML= '\u00d7';
        list.appendChild(cross);
        
    }
    input.value="";
    localstorage();
}

task.addEventListener('click', function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
        localstorage();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        localstorage();
    }
},false );

function localstorage(){
    localStorage.setItem('data', task.innerHTML);
}

function retrivedata(){
    task.innerHTML=localStorage.getItem('data');
}

retrivedata();
console.log(task.innerHTML)
