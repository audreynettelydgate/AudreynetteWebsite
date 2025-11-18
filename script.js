// Pink Mode Toggle
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Run only when page is fully loaded
window.addEventListener("DOMContentLoaded", () => {

  // Local Quotes Array
  const quotes = [
    "Hello Kitty is happiness in pink! — Sanrio",
    "Keep your heart light and your bows tight!",
    "Creativity is your superpower 🎀",
    "Spread love, sparkle, and bows 💖",
    "Every day is cuter with Hello Kitty by your side!"
  ];

  // Load a random quote
  const el = document.getElementById('quote');
  if (el) {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    el.textContent = random;
  }

});
