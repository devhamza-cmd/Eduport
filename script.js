var drop_menu_elements = document.querySelectorAll('.dropdown-item');
var drop_menu_head = document.querySelectorAll('#drop-menu-head');
for (let j = 0; j < drop_menu_elements.length; j++) {
  drop_menu_elements[j].addEventListener('mouseover', function () {
    for (let i = 0; i < drop_menu_head.length; i++) {
      drop_menu_head[i].style.color = '#0669c8';
    }
  });
}
for (let j = 0; j < drop_menu_head.length; j++) {
  drop_menu_head[j].style.color = '#0669c8'
}
const myDiv = document.getElementById('text')
var divHeight = myDiv.offsetHeight;
const person = document.querySelector('.person-img');
person.style.height = `${divHeight}px`;
const tab_btn = document.querySelectorAll(".tab button")
const container_tab = document.querySelector('#three [class="container d-flex"]')
// var container_tab_height=container_tab.offsetWidth
for (let i = 0; i < tab_btn.length; i++) {
  tab_btn[i].style.width = `${container_tab_height / 5}px`
}
document.querySelector('[ class="test webdesign container  mt-3 animate__animated animate__fadeIn"]').style.display='flex'
document.querySelector('[class="test dev container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
document.querySelector('[class="test graphic container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
document.querySelector('[class="test marketing container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
document.querySelector('[class="test finance container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
const webdesign=document.getElementById('webdesign')
const dev=document.getElementById('dev')
const graphic=document.getElementById('graphic')
const marketing=document.getElementById('marketing')
const finance=document.getElementById('finance')
webdesign.addEventListener('click',function(){
  document.querySelector('[class="test webdesign container  mt-3 animate__animated animate__fadeIn"]').style.display='flex'
  document.querySelector('[class="test dev container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test graphic container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test marketing container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test finance container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
})
dev.addEventListener('click',function(){
  document.querySelector('[class="test graphic container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test webdesign container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test dev container  mt-3 animate__animated animate__fadeIn"]').style.display='flex'
  document.querySelector('[class="test marketing container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test finance container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
})
graphic.addEventListener('click',function(){
  document.querySelector('[class="test graphic container  mt-3 animate__animated animate__fadeIn"]').style.display='flex'
  document.querySelector('[class="test webdesign container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test dev container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test marketing container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test finance container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
})
marketing.addEventListener('click',function(){
  document.querySelector('[class="test graphic container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test webdesign container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test dev container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test marketing container  mt-3 animate__animated animate__fadeIn"]').style.display='flex'
  document.querySelector('[class="test finance container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
})
finance.addEventListener('click',function(){
  document.querySelector('[class="test graphic container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test webdesign container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test dev container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test marketing container  mt-3 animate__animated animate__fadeIn"]').style.display='none'
  document.querySelector('[class="test finance container  mt-3 animate__animated animate__fadeIn"]').style.display='flex'
})
const productContainers = [...document.querySelectorAll('.events')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  nxtBtn[i].addEventListener('click', () => {
    console.log(item.scrollLeft )
      item.scrollLeft +=containerWidth
  })

  preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
  })
})
