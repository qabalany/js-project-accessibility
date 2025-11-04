const modal = document.getElementById('myModal')
const btn = document.getElementById('myBtn')
const span = document.getElementsByClassName('close')[0]

// When button is clicked, modal opens 
btn.onclick = () => {
  modal.style.display = 'block'
}

// When x is clicked, modal closes
span.onclick = () => {
  modal.style.display = 'none'
}

// When outside of modal is clicked, modal closes
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}

const eventInfoForm = document.getElementById('event-info-form')
const modalContent = document.getElementById('modalContent')
const eventSubscribe = document.getElementById('eventSubscribe')
let eventUserName = ''

eventInfoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  eventUserName = document.getElementById('nameSubscribe').value.trim()

  modalContent.innerHTML = `
  <p class="newsletter-confirmation">Thank you <b>${eventUserName}</b>! Next time tickets go live, you will be the first to know.</p>`
})
// High Contrast Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
  const contrastBtn = document.getElementById('contrast-toggle');
  const htmlElement = document.documentElement;
  const storageKey = 'high-contrast-mode';

  // Check if high contrast mode is saved in localStorage
  function loadContrastMode() {
    const savedMode = localStorage.getItem(storageKey);
    if (savedMode === 'enabled') {
      htmlElement.classList.add('high-contrast');
      contrastBtn.classList.add('active');
    }
  }

  // Toggle high contrast mode
  function toggleContrastMode() {
    const isActive = htmlElement.classList.contains('high-contrast');
    
    if (isActive) {
      htmlElement.classList.remove('high-contrast');
      contrastBtn.classList.remove('active');
      localStorage.setItem(storageKey, 'disabled');
      contrastBtn.setAttribute('aria-pressed', 'false');
    } else {
      htmlElement.classList.add('high-contrast');
      contrastBtn.classList.add('active');
      localStorage.setItem(storageKey, 'enabled');
      contrastBtn.setAttribute('aria-pressed', 'true');
    }
  }

  // Add click event listener to the button
  if (contrastBtn) {
    contrastBtn.addEventListener('click', toggleContrastMode);
    
    // Load saved preference on page load
    loadContrastMode();
    
    // Set initial aria-pressed state
    const isActive = htmlElement.classList.contains('high-contrast');
    contrastBtn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  }
});
