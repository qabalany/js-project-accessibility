const contrastBtn = document.getElementById('contrast-toggle');
const textSettingsBtn = document.getElementById('text-settings-button');
const panel = document.getElementById('text-settings-panel');
const newsletterBtn = document.getElementById('myBtn');
const fontSizeSelect = document.getElementById('font-size');
const lineHeightSelect = document.getElementById('line-height');
const navLinks = document.querySelectorAll('nav ul li a');

const headerButtons = [contrastBtn, textSettingsBtn, newsletterBtn];

// Keyboard navigation between nav-links
navLinks.forEach((link, index) => {
  link.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % navLinks.length;
      navLinks[nextIndex].focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + navLinks.length) % navLinks.length;
      navLinks[prevIndex].focus();
    }
  });
});

headerButtons.forEach((btn, index) => {
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = headerButtons[(index + 1) % headerButtons.length];
      next.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = headerButtons[(index - 1 + headerButtons.length) % headerButtons.length];
      prev.focus();
    }
  });
});

// --- Click and keyboard navigation for settings button ---
if (textSettingsBtn && panel) {
  textSettingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = textSettingsBtn.getAttribute('aria-expanded') === 'true';
    textSettingsBtn.setAttribute('aria-expanded', String(!isExpanded));
    panel.hidden = isExpanded;
  });

  textSettingsBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      textSettingsBtn.click();
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();

      if (textSettingsBtn.getAttribute('aria-expanded') === 'false') {
        textSettingsBtn.click();
      }

      // Focus the first dropdown after a short delay
      setTimeout(() => {
        if (!panel.hidden) {
          fontSizeSelect?.focus();
        }
      }, 50);
    }
  });

  // Click inside panel doesn't close it
  panel.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Click outside closes the panel
  document.addEventListener('click', () => {
    textSettingsBtn.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
  });

  // Escape closes the panel
  panel.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      textSettingsBtn.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
      textSettingsBtn.focus();
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

// Keyboard navigation inside text settings panel
const selects = [fontSizeSelect, lineHeightSelect];

selects.forEach((select, index) => {
  select.addEventListener('keydown', (e) => {
    // Change between dropdowns with right/left
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = selects[index + 1] || selects[0];
      next.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = selects[index - 1] || selects[selects.length - 1];
      prev.focus();
    }
  });
});

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
      String(str).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

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
const nameSubscribe = document.getElementById('nameSubscribe')
const newsletterHeading = document.getElementById('newsletterHeading')

function trapFocus(element) {
  const focusableSelectors = `
    a[href], area[href], input:not([disabled]),
    select:not([disabled]), textarea:not([disabled]),
    button:not([disabled]), iframe, object, embed,
    [tabindex="0"], [contenteditable]
  `;

  const focusableElements = element.querySelectorAll(focusableSelectors);
  const first = focusableElements[0];
  const last = focusableElements[focusableElements.length - 1];
  const modalContent = document.getElementById('modalContent');

  element.addEventListener('keydown', function (e) {
    // TAB key
    if (e.key === 'Tab') {
      // Shift + Tab: Move backwards
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
      // Tab: Move forward
      else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });
}

trapFocus(modalContent);

if (modal && btn && span) {
  btn.onclick = () => {
    modal.classList.add('active');
    nameSubscribe.focus();
  };

  span.onclick = () => {
    modal.classList.remove('active');
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.classList.remove('active');
    }
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.classList.remove('active')
      btn.focus()
      event.preventDefault();
    }
  })
}


const eventInfoForm = document.getElementById('event-info-form');
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
document.addEventListener('DOMContentLoaded', function () {
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
