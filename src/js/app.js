import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const img = document.querySelector('.image');
  img.addEventListener('click',function() {
    // img.style.transform = 'scale(2,2)';
    img.classList.add('active');
  })

});
