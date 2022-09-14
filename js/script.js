const button1 = document.querySelector('.button_1')
const button2 = document.querySelector('.button_2')
const button3 = document.querySelector('.button_3')

const button1Img = document.querySelector('#button_img1')
const button2Img = document.querySelector('#button_img2')
const button3Img = document.querySelector('#button_img3')


const table1 = document.querySelector('.table1')
const table2 = document.querySelector('.table2')
const table3 = document.querySelector('.table3')
const table_off = document.querySelector('.table_off')



function open_table1(){
    table2.style.display = 'none';
    table3.style.display = 'none';
    button2Img.style.display = 'none';
    button3Img.style.display = 'none';
    if (table1.style.display == 'none') {
        table1.style.display = 'flex';
        table_off.style.display = 'none';
        button1Img.style.display = 'inline-block';
    } else {table1.style.display = 'none';
           table_off.style.display = 'inline-block';
           button1Img.style.display = 'none';}
    }
    

function open_table2(){
    table1.style.display = 'none';
    table3.style.display = 'none';
    button1Img.style.display = 'none';
    button3Img.style.display = 'none';
    if (table2.style.display == 'none') {
        table2.style.display = 'flex';
        table_off.style.display = 'none';
        button2Img.style.display = 'inline-block';
    } else {table2.style.display = 'none';
           table_off.style.display = 'inline-block';
           button2Img.style.display = 'none';}
    }
    
function open_table3(){
    table1.style.display = 'none';
    table2.style.display = 'none';
    button1Img.style.display = 'none';
    button2Img.style.display = 'none';
    if (table3.style.display == 'none') {
        table3.style.display = 'flex';
        table_off.style.display = 'none';
        button3Img.style.display = 'inline-block';
    } else {table3.style.display = 'none';
           table_off.style.display = 'inline-block';
           button3Img.style.display = 'none';}
    }
    
 

function close_tables(){
    tables.style.display = 'none';
}



button1.addEventListener('click', open_table1 );
button2.addEventListener('click', open_table2 ); 
button3.addEventListener('click', open_table3 );
