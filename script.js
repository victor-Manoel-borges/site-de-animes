const slides=document.querySelectorAll('.slide');

let current=0;

function showSlide(index){

slides.forEach((s,i)=>{

s.classList.toggle('ativo',i===index);

});

}

document.querySelector('.prev').onclick=()=>{

current=(current-1+slides.length)%slides.length;

showSlide(current);

};

document.querySelector('.next').onclick=()=>{

current=(current+1)%slides.length;

showSlide(current);

};

setInterval(()=>{

current=(current+1)%slides.length;

showSlide(current);

},5000);

const toggle=document.getElementById('theme-toggle');

toggle.onclick=()=>{

document.body.classList.toggle('light-mode');

toggle.textContent=document.body.classList.contains('light-mode')?'☀️':'🌙';

};