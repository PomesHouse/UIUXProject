const button1 = document.querySelector('.button_1')
const button2 = document.querySelector('.button_2')
const button3 = document.querySelector('.button_3')


const table1 = document.querySelector('.table1')

function open_table1(){
    table1.style.display = 'flex';}



button1.addEventListener('click', open_table1)