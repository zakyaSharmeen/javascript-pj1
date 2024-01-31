let btn = document.getElementById('toggleBtn')
let bulb = document.getElementById('bulb')
btn.addEventListener('click', toggleBulb)

function toggleBulb(e){
 if(btn.textContent.includes('On')){
    bulb.src = "bulbon.webp"
    btn.textContent ="Turn Off"
 }else{
    bulb.src = "bulb.jpg"
    btn.textContent ="Turn On"
 }

}