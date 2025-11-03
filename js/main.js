const button = document.getElementById('text-settings-button');
const panel = document.getElementById('text-settings-panel');
const fontSizeSelect = document.getElementById('font-size');
const lineHeightSelect = document.getElementById('line-height');


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
    button.focus(); // set focus back to the button
  }
});

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
