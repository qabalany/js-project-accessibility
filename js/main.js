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

// Klick utanför panelen stänger den
document.addEventListener('click', () => {
  button.setAttribute('aria-expanded', 'false');
  panel.hidden = true;
});

// Escape stänger panelen
panel.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    button.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
    button.focus(); // sätt fokus tillbaka på knappen
  }
});

fontSizeSelect.addEventListener('change', (event) => {
  const value = fontSizeSelect.value;

  switch (value) {
    case 'default':
      document.documentElement.style.fontSize = '100%';
      break;
    case 'large':
      document.documentElement.style.fontSize = '115%';
      break;
    case 'x-large':
      document.documentElement.style.fontSize = '130%';
      break;
  }
});

lineHeightSelect.addEventListener('change', (event) => {
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
