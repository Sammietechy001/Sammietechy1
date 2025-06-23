const hamburger = document.getElementById('hamburger');
const menuSec = document.getElementById('menuSec');

hamburger.addEventListener('click', handleOpen);
// hamburger.addEventListener('click', ()=>{
//    if(menuSec.classList.contains('open')){
//     menuSec.classList.remove('open')
//   }else{
//     menuSec.classList.add('open')
//   }
// });

function handleOpen(){
  if(menuSec.classList.contains('open')){
    menuSec.classList.remove('open')
  }else{
    menuSec.classList.add('open')
  }
}
