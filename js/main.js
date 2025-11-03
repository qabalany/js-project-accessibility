
document.addEventListener("DOMContentLoaded", () => {
  // Form & fields
  const form = document.getElementById("booking-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const eventSelect = document.getElementById("events");
  const dateInput = document.getElementById("event-date");

  // Results (explicitly scope to the one in <main>)
  const resultsSection = document.querySelector("main #results");
  const resultsTitle = resultsSection.querySelector("#results-title") || resultsSection.querySelector("h2");
  const resultsContent = resultsSection.querySelector("#results-content");

  // Utilities
  const escapeHtml = (str) =>
    String(str).replace(/[&<>"']/g, (m) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));

  const setInvalid = (el, msg) => {
    el.setCustomValidity(msg);
    el.reportValidity();
    el.classList.add("invalid");
    el.setAttribute("aria-invalid", "true");
  };

  const clearInvalid = (el) => {
    el.setCustomValidity("");
    el.classList.remove("invalid");
    el.removeAttribute("aria-invalid");
  };

  // Clear validation styling live
  [nameInput, emailInput].forEach((el) => {
    el.addEventListener("input", () => clearInvalid(el));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate name
    if (!nameInput.value.trim()) {
      setInvalid(nameInput, "Please enter your name.");
      nameInput.focus();
      return;
    } else {
      clearInvalid(nameInput);
    }

    // Validate email
    if (!emailInput.value.trim()) {
      setInvalid(emailInput, "Please enter your email address.");
      emailInput.focus();
      return;
    }
    if (emailInput.validity.typeMismatch) {
      setInvalid(emailInput, "Please enter a valid email (e.g., name@example.com).");
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
      ? new Date(dateInput.value).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })
      : "Not selected";

    const accChecked = document.querySelector('input[name="radio"]:checked');
    const accText = accChecked
      ? (document.querySelector(`label[for="${accChecked.id}"]`)?.textContent || accChecked.value)
      : "No preference";

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
    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });

    // If you want to clear the form after submit, uncomment:
    // form.reset();
  });
});
