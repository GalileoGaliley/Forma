let enter = document.getElementById('enter');
let familia = document.getElementById('familia');
let form = document.getElementById('forma');

function Prevent(){
}

function SubForm() {
if (form.elements[0].value && form.elements[1].value && form.elements[3].value && form.elements[4].value && form.elements[6].value && form.elements[15].value != 0) {
		form.submit();
}
else {
            event.preventDefault();

    alert("Заполните все поля отмеченные звездочкой");
}
	

};
//window.onload = function(){Prevent();};
enter.onclick = function(){
    SubForm();
};
