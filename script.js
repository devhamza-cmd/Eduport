var drop_menu_elements = document.querySelectorAll('.dropdown-item');
var drop_menu_head = document.querySelectorAll('#drop-menu-head');
console.log(drop_menu_elements.length)
for (let j=0;j<drop_menu_elements.length;j++){
    drop_menu_elements[j].addEventListener('mouseover', function() {
        for (let i = 0; i < drop_menu_head.length; i++) {
          drop_menu_head[i].style.color = '#0669c8';
        }
      });
}
for (let j=0;j<drop_menu_head.length;j++){
    drop_menu_head[j].style.color='#0669c8'
}

  
  
  