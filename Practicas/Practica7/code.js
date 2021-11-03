let inp = document.querySelector('.inp');
let p = document.querySelector('.p')

inp.addEventListener('keyup',()=>{
    p.textContent = inp.value;
});
inp.addEventListener('change',()=>{
    p.textContent = inp.value;
});