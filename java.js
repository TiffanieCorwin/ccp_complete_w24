const form = document.getElementById('ice-cream-form');
const results = document.getElementById('results');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const selectedFlavor = document.querySelector('input[name="flavor"]:checked').value;
  let message = `You voted for ${selectedFlavor} ice cream!`;

  // You can add logic to store votes in an array or object here (optional)

  results.textContent = message;
});
