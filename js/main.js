var balls = document.getElementsByClassName('ball');
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + '%'; // event.clientX => get the horizontal coordinate of the mouse
  var y = event.clientY * 100 / window.innerHeight + '%';  // event.clientY => get the vertical coordinate of the mouse

  for( var i =0; i<0; i++){
    balls[1].style.left=0;
    balls[i].style.top = y;
    balls[i].style.transform = 'translate(-'+x+',-'+y+')'
  }

}