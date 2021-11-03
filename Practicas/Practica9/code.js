let optArr = document.querySelectorAll('.opt');

optArr.forEach(opt => {
    opt.addEventListener('click',()=>{
        console.log(opt.className.split(' '))
    });
});