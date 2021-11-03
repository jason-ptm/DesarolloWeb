var objValidacion = null;
document.querySelectorAll('.list-item').forEach(listItem=>{
    listItem.addEventListener('click',()=>{
        if(objValidacion == listItem){
            listItem.classList.remove('select');
            objValidacion = null;
        }
        else if(objValidacion != listItem && objValidacion != null){
            objValidacion.classList.remove('select');
            listItem.classList.add('select');
            objValidacion = listItem;
        }
        else if(objValidacion == null){
            listItem.classList.add('select');
            objValidacion = listItem;
        }
    });
});