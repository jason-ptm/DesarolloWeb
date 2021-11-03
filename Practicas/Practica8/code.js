let cCont = document.querySelectorAll('.c-cont');
let btnPurchase = document.querySelectorAll('.btn-purchase');
let bandera = -1;

for(let i = 0; i < btnPurchase.length; i++){
    btnPurchase[i].addEventListener('click',()=>{   
        if(bandera == i){
            cCont[i].classList.remove('active');
            bandera = -1;
        }
        else if(bandera != -1){
            cCont[bandera].classList.remove('active');
            bandera = i;
            cCont[i].classList.toggle('active');
        }
        else{
            cCont[i].classList.toggle('active');
            bandera = i;
        }
    });
}