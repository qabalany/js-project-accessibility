const button = document.getElementById('text-settings-button');
const panel = document.getElementById('text-settings-panel');
const fontSizeSelect = document.getElementById('font-size');
const lineHeightSelect = document.getElementById('line-height');

if (button && panel) {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));
    panel.hidden = isExpanded;
  });

  panel.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  // Click outside closes the panel
  document.addEventListener('click', () => {
    button.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
  });

  // Escape closes the panel
  panel.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      button.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
      button.focus();
    }
  });
}

if (fontSizeSelect) {
  fontSizeSelect.addEventListener('change', () => {
    const value = fontSizeSelect.value;
    switch (value) {
      case 'default':
        document.documentElement.style.fontSize = '100%';
        break;
      case 'large':
        document.documentElement.style.fontSize = '120%';
        break;
      case 'x-large':
        document.documentElement.style.fontSize = '130%';
        break;
    }
  });
}

if (lineHeightSelect) {
  lineHeightSelect.addEventListener('change', () => {
    const value = lineHeightSelect.value;
    switch (value) {
      case 'default':
        document.documentElement.style.lineHeight = '1.5';
        break;
      case 'wide':
        document.documentElement.style.lineHeight = '1.75';
        break;
      case 'x-wide':
        document.documentElement.style.lineHeight = '2.0';
        break;
    }
  });
}

// Booking Form Handler (on booking.html)
document.addEventListener('DOMContentLoaded', () => {
  // Form & fields
  const form = document.getElementById('booking-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const eventSelect = document.getElementById('events');
  const dateInput = document.getElementById('event-date');
  const resultsSection = document.querySelector('main #results');

  if (form && resultsSection) {
    const resultsTitle = resultsSection.querySelector('#results-title') || resultsSection.querySelector('h2');
    const resultsContent = resultsSection.querySelector('#results-content');

    // Utilities
    const escapeHtml = (str) =>
      String(str).replace(/[&<>"']/g, (m) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));

    const setInvalid = (el, msg) => {
      el.setCustomValidity(msg);
      el.reportValidity();
      el.classList.add('invalid');
      el.setAttribute('aria-invalid', 'true');
    };

    const clearInvalid = (el) => {
      el.setCustomValidity('');
      el.classList.remove('invalid');
      el.removeAttribute('aria-invalid');
    };

    // Clear validation styling live
    [nameInput, emailInput].forEach((el) => {
      el.addEventListener('input', () => clearInvalid(el));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Validate name
      if (!nameInput.value.trim()) {
        setInvalid(nameInput, 'Please enter your name.');
        nameInput.focus();
        return;
      } else {
        clearInvalid(nameInput);
      }

      // Validate email
      if (!emailInput.value.trim()) {
        setInvalid(emailInput, 'Please enter your email address.');
        emailInput.focus();
        return;
      }
      if (emailInput.validity.typeMismatch) {
        setInvalid(emailInput, 'Please enter a valid email (e.g., name@example.com).');
        emailInput.focus();
        return;
      } else {
        clearInvalid(emailInput);
      }

      // Gather selections
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const chosenEvent = eventSelect.value;
      const dateNice = dateInput.value
        ? new Date(dateInput.value).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
        : 'Not selected';

      const accChecked = document.querySelector('input[name="radio"]:checked');
      const accText = accChecked
        ? (document.querySelector(`label[for="${accChecked.id}"]`)?.textContent || accChecked.value)
        : 'No preference';

      // Simple ref code
      const ref = Math.random().toString(36).slice(2, 8).toUpperCase();

      // Fill response
      resultsTitle.textContent = `Thank you, ${name}! Please check your email for your ticket.`;
      resultsContent.innerHTML = `
        <article class="ticket" role="status" aria-live="polite">
          <header class="ticket-head">
            <strong>Booking Summary</strong>
            <span class="ticket-ref">Ref: ${ref}</span>
          </header>
          <dl class="ticket-body">
            <div><dt>Name</dt><dd>${escapeHtml(name)}</dd></div>
            <div><dt>Email</dt><dd>${escapeHtml(email)}</dd></div>
            <div><dt>Event</dt><dd>${escapeHtml(chosenEvent)}</dd></div>
            <div><dt>Date</dt><dd>${escapeHtml(dateNice)}</dd></div>
            <div><dt>Accessibility</dt><dd>${escapeHtml(accText)}</dd></div>
          </dl>
          <footer class="ticket-foot">
            We appreciate your business. A confirmation has been sent to <strong>${escapeHtml(email)}</strong>.
          </footer>
        </article>
      `;

      // Reveal and scroll into view
      resultsSection.hidden = false;
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});

// Modal functionality (only on index.html)
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

if (modal && btn && span) {
  btn.onclick = () => {
    modal.classList.add('active');
  };

  span.onclick = () => {
    modal.classList.remove('active');
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.classList.remove('active');
    }
  };
}

const eventInfoForm = document.getElementById('event-info-form');
const modalContent = document.getElementById('modalContent');
let eventUserName = '';

if (eventInfoForm) {
  eventInfoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    eventUserName = document.getElementById('nameSubscribe').value.trim();
    modalContent.innerHTML = `
    <p class="newsletter-confirmation">Thank you <b>${eventUserName}</b>! Next time tickets go live, you will be the first to know.</p>`;
  });
}

// High Contrast Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
  const contrastBtn = document.getElementById('contrast-toggle');
  const htmlElement = document.documentElement;
  const storageKey = 'high-contrast-mode';

  if (contrastBtn) {
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

    contrastBtn.addEventListener('click', toggleContrastMode);
    loadContrastMode();
    const isActive = htmlElement.classList.contains('high-contrast');
    contrastBtn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  }
});
