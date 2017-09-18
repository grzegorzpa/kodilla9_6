/*
function checkOnclickEvent(param) {
  console.log(param);
};
var inputElem = document.getElementById('js-inputValue');
var imageElem = document.getElementById('js-image');
*/
var list = document.getElementById('list');
var add = document.getElementById('addElem');


add.addEventListener('click', function() {
	var element = document.createElement('li');
	element.innerHTML = 'item ' + document.getElementsByTagName('li').length;
	list.appendChild(element);
});

/*
imageElem.addEventListener('click', function(e) {
  checkOnclickEvent('image was clicked')
});

inputElem.addEventListener('keypress', function(e) {
  e.target.value += ' test ';
});
*/
