const $leftBtn = document.querySelector('.left_btn');
const $rightBtn = document.querySelector('.right_btn');
const $banner = document.querySelector('.banner_slide');
const image = [];

function setImage(){
  for(let i = 0; i < 4; i++){
    let imgElem = new Image();
    imgElem.src = `../img/${11 + i}.jpg`;
    image.push(imgElem);
  }
  $banner.innerHTML = "<img src='" + `../img/11.jpg` + "'>"
}
setImage();

console.log(image)

let num = 0;
$rightBtn.addEventListener('click', ()=>{
  if(num > image.length-2) num = 0;
  $banner.innerHTML = "<img src='" + `../img/${12+ num}.jpg` + "'>"
  num++;
})

$leftBtn.addEventListener('click', ()=>{
  if(num > image.length-1) num = 0;
  $banner.innerHTML = "<img src='" + `../img/${14 - num}.jpg` + "'>"
  num++;
})


//자동으로 넘어가는거
setInterval(()=>{
  if(num > image.length-2) num = 0;
  $banner.innerHTML = "<img src='" + `../img/${12+ num}.jpg` + "'>"
  num++;
}, 4000)