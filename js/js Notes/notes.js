const  noteContainer = document.querySelector('.noteContainer');

showdata();

function addNote(){
    let notes = document.createElement('p');
    let img = document.createElement('img');
    notes.className='input';
    img.className='image';
    notes.setAttribute('contenteditable','true');
    img.src='./images/delete.png';
    noteContainer.appendChild(notes).appendChild(img);
    localstorage();
}

function localstorage(){
    localStorage.setItem('Notes',noteContainer.innerHTML);
}

function showdata(){
    noteContainer.innerHTML=localStorage.getItem('Notes');
}

noteContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        localstorage();
    }
    else if(e.target.tagName==='P'){
        note= document.querySelectorAll('.input');
        note.forEach(nt => {
            nt.onkeyup=function(){
                localstorage();
            }
        })
    }
});