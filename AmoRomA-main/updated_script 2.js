document.addEventListener("DOMContentLoaded", function() {
    // make constants for the modal and the button and close button
    const modal = document.getElementById("reservation-modal");
    const btn = document.querySelector(".book-button");
    const span = document.querySelector(".close-btn");
  
    //open the modal
    btn.onclick = function() {
        modal.classList.add('show');
    }
    //close the modal by clicking on x
    span.onclick = function() {
        modal.classList.remove('show');
    }
//close modal when clicking outside it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
          modal.classList.remove('show')
        }
      })

    const reservationForm = document.getElementById('reservationForm');
    const checkmarkContainer = document.getElementById('checkmark-container');
    const confirmationDiv = document.getElementById('confirmation-message');

//listen for click on submit button
reservationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  checkmarkContainer.classList.remove('hidden'); // Show the checkmark
  confirmationDiv.style.opacity = "1";
  setTimeout(function() {
    modal.classList.toggle('show'); // Hide the modal
    checkmarkContainer.classList.add('hidden'); // Hide the checkmark
  }, 2000); // Hide after 2 seconds
  
  reservationForm.reset();
});

});


//for the menu-section
const buttons = document.querySelectorAll('[data-section]')
const cards = document.querySelectorAll('.menu-card')

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    buttons.forEach((btn) => {
      btn.classList.remove('active-button')
    })

    this.classList.add('active-button')
    
    const section = this.getAttribute('data-section')

    cards.forEach((card) => {
      card.classList.remove('active')
    })
    const displayedCards = document.querySelectorAll(`.menu-card[data-section="${section}"]`)
    displayedCards.forEach((card) => {
    card.classList.add('active')
  })
  })
})

window.addEventListener('click', function(event) {
    // Loop through each card to check if it was clicked
    cards.forEach((card, index) => {
      if (card === event.target || card.contains(event.target)) {
        // Add the 'active' class to the clicked card
        card.classList.add('active');
  
        // Get the 'data-section' from the clicked card
        const section = card.getAttribute('data-section');
        
        // Loop through each button to activate the one with the matching 'data-section'
        buttons.forEach((button) => {
          if (button.getAttribute('data-section') === section) {
            button.classList.add('active-button');
          }
        });
      }
    });
  });

  //ScrollToTopBtn
const ScrollToTopBtn = document.getElementById("ScrollToTopBtn")

ScrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: "smooth"})
})