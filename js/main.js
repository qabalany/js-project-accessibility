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