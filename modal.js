let btn = document.getElementById('btn');
let myModal = document.getElementById('myModal');
let closed = document.getElementById('closed');
let modalBody = document.getElementById('modalBody');
let windowWidth = document.documentElement.clientWidth;
let windowHeight = document.documentElement.clientHeight;

closed.onclick = function () {
  myModal.style.display = 'none';
  console.log(familia.value);
}


btn.onclick = function () {
    myModal.style.display = 'block';
    modalBody.style.width = (windowWidth*0.8) + 'px';
    modalBody.style.height = (windowHeight*0.8) + 'px';

};
