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
