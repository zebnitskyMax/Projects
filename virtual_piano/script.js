const buttonsPiano = document.querySelectorAll('.btn-piano');
const notes = document.querySelector('.switch-btn-notes')
const letters = document.querySelector('.switch-btn-letters')

const main = document.querySelector('.main')

// function mouse

buttonsPiano.forEach((elem) => {
    elem.addEventListener('mousedown', (e) => {
        const audio = document.getElementById(elem.dataset.key);
        if(!audio) return
        audio.currentTime = 0; //rewind to the start
        audio.play();
        e.target.classList.add('btn-color')
        e.target.classList.add('btn-change');
    })

    elem.removeEventListener('mouseup', (e) => {
        let audio = document.querySelector('.sound');
        audio.stop();
    })

    elem.addEventListener('mouseover', (e) => {
        e.target.classList.add('color')
    })

    elem.addEventListener('mouseup', (e) => {
        e.target.classList.remove('btn-color')
        e.target.classList.remove('btn-change');
    })

    elem.addEventListener('mouseout', (e) => {
        e.target.classList.remove('color')
    })
})



//function keyboard

document.addEventListener('keydown', (e) => {
        
        let audio = document.querySelector(`.sound[data-key="${e.keyCode}"]`);
        let btn = document.querySelector(`.btn-piano[data-key="${e.keyCode}"]`);
        if (!audio || !btn) return
        audio.currentTime = 0;
        audio.play();
        btn.classList.add('btn-color');
        btn.classList.add('btn-change');
    })
document.addEventListener('keyup', (e) => {
        let btn = document.querySelector(`.btn-piano[data-key="${e.keyCode}"]`);
        if(!btn) return;
        btn.classList.remove('btn-color');
        btn.classList.remove('btn-change');
    })

 

    notes.addEventListener('click', ()=>{
        notes.classList.add('switchBackground')
        letters.classList.remove('switchBackground')
    })

    letters.addEventListener('click', ()=>{
        letters.classList.add('switchBackground')
        notes.classList.remove('switchBackground')

    })

    
letters.addEventListener('click', ()=>{
    main.classList.add('letters')
    main.classList.remove('notes')
})
notes.addEventListener('click', ()=>{
    main.classList.add('notes')
    main.classList.remove('letters')
})



