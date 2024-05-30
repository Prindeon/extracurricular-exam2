document.addEventListener("DOMContentLoaded", function() {
    // Get the modal and the button
    const modal = document.getElementById("reservation-modal");
    const btn = document.querySelector(".book-button");
  
    // Get the <span> element that closes the modal
    const span = document.querySelector(".close-btn");
  
    // When the button is clicked, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    // When the <span> is clicked, close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // When clicking outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  });
  