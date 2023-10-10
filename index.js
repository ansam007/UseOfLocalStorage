var headerTitle = document.querySelector("#header-title");
headerTitle.style.border = '2.7px solid pink';
headerTitle.style.padding = '2px';
var header = document.querySelector('#main-header');
header.style.border = '2.7px solid black';
var title = document.querySelector('h2');
//title.innerHTML = '<b> Add Item </b>';
title.style.fontWeight = 'bold';
title.style.color =  'green'

// var input = document.querySelector('input');
// console.log(input);
// input.value = 'enter text';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Submit';

// var Lastitem = document.querySelector('.list-group-item:last-child');
// Lastitem.style.backgroundColor = 'yellow';

// var Firstitem = document.querySelector('.list-group-item:first-child');
// Firstitem.style.backgroundColor = 'orange';
 
// var Nthitem = document.querySelector('.list-group-item:nth-child(2)');
// Nthitem.style.backgroundColor = 'pink';

// var Nthitem = document.querySelector('.list-group-item:nth-child(3)');
// Nthitem.style.backgroundColor = 'pink';

// var list = document.querySelectorAll('.list-group-item')
// console.log(list);
 
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4f4'; 
}

var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<even.length; i++){
    even[i].style.backgroundColor = '#cc'; 
}

var listen = document.querySelector('input');
listen.addEventListener('click', function(){
    listen.value = '';
    
})

var newDiv = document.createElement('div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);


const listItem1 = document.querySelector("#items li:first-child");
console.log(listItem1);

const helloWorldText2 = document.createTextNode("Hello world ");
listItem1.parentNode.insertBefore(helloWorldText2, listItem1);



