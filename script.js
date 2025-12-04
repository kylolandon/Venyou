<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QSSKJDN62M"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QSSKJDN62M');
</script>
  
const logoMain = document.getElementById('logo-main'); 
const text = logoMain.textContent;
logoMain.textContent = ''; // clear original text

text.split('').forEach((char, index) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.classList.add('letter');

  // color "you" letters in blue
  if (index >= 3) span.classList.add('logo-you'); // "you" is letters 3,4,5
  logoMain.appendChild(span);

  // stagger animation delays
  span.style.animationDelay = `${index * 0.1}s`;
});
