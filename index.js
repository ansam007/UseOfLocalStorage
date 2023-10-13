var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem2 = document.getElementById('item2').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem2));

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-danger btn-sm float-right edit';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
 
  // Append li to list
  itemList.appendChild(li);

}


// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
   // if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    //}
  }
} 


// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get list
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var itemName2 = item.firstChild.nextSibling.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

var submit = document.querySelector('#submit');
submit.addEventListener("click", function(){
  var text = document.querySelector('#item').value;
  var text2 = document.querySelector('#item2').value;
  if(text2 !== '' && text !== ''){
    localStorage.setItem(text, text2);
  }else if(text === ''){
    localStorage.setItem('please add item', text2);
  }else {
    localStorage.setItem (text, 'please add description');
  }

});



