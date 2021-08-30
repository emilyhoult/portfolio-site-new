window.addEventListener("turbolinks:load", () => {
  const cursor = document.querySelector(".cursor");

  document.addEventListener('mouseleave', e => {
    const cursor = document.querySelector(".cursor");
    cursor.style.cursor = 'none';
  });

  document.addEventListener('mousemove', e => {
    cursor.setAttribute("style","top: "+(e.clientY)+"px; left: "+(e.clientX)+"px")
  });

  document.addEventListener('mouseover', () => {
    cursor.classList.add('hover');

    // setTimeout(function() {
    //   cursor.classList.remove('hover');
    // }, 500);
  });

  var link = document.querySelectorAll('a');
  console.log(link);

  for(var i = 0; i < link.length; i++){
    link[i].addEventListener('mouseover', () => {
      cursor.classList.add('grow');

      // setTimeout(function() {
      //   cursor.classList.remove('grow');
      // }, 2000);
    });
    link[i].addEventListener('mouseout', () => {
      cursor.classList.remove('grow');
    })
  };

  var button = document.getElementById('cv-btn');

  button.addEventListener('mouseover', () => {
    cursor.classList.add('grow');
  });
  button.addEventListener('mouseout', () => {
    cursor.classList.remove('grow');
  });

});



