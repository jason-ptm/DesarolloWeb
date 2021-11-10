document.getElementById('menu-btn').addEventListener('click',()=>{
    document.getElementById('menu-btn').classList.toggle('bx-menu');
    document.getElementById('menu-btn').classList.toggle('bx-menu-alt-right');
    document.querySelector('.side-bar').classList.toggle('active');
});