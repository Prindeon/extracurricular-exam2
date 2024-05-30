document.addEventListener("DOMContentLoaded", function() {
    // make constants for the modal and the button and close button
    const modal = document.getElementById("reservation-modal");
    const btn = document.querySelector(".book-button");
    const span = document.querySelector(".close-btn");
  
    btn.onclick = function() {
        modal.classList.add('show')
    }

    span.onclick = function() {
        modal.classList.remove('show')
    }

    // to close the modal When clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.classList.remove('show')
      }
    });
  })


const reservationForm = document.getElementById('reservationForm');
// Listen for the submit event on the form
reservationForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the div where the confirmation message will be displayed
  const confirmationDiv = document.getElementById('confirmation-message');

  // Set the confirmation message
  confirmationDiv.innerText = 'Booking Confirmed!';

  // Clear the confirmation message and toggle the .show class after 3 seconds
  setTimeout(function() {
    confirmationDiv.innerText = '';
    modal.classList.toggle('show');
  }, 3000);

  // Optionally, you can clear the form fields here
  reservationForm.reset();
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
      console.log("I just added active classlist")
      console.log(card.classList)
      console.log(cards)

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