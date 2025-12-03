// wrap each letter in a span for animation
const logo = document.getElementById('logo');
const text = logo.textContent;
logo.textContent = ''; // clear original text

text.split('').forEach(char => {
  const span = document.createElement('span');
  span.textContent = char;
  span.classList.add('letter');

  // color "you" letters in blue
  if (char.toLowerCase() === 'y' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
    span.classList.add('blue');
  } else if (char !== ' ') {
    span.classList.add('white');
  }
  logo.appendChild(span);
});
