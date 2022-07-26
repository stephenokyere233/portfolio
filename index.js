const burger=document.getElementById('burger');
const menu=document.getElementById('newmenu');
let callback=()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden')
    }
}
var body=document.querySelector('header');
const moveDown=()=>{
    
    
}

burger.addEventListener('click',callback);
burger.addEventListener('click',moveDown);

