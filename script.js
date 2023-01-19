const moveButton = document.getElementById("moveButton");

moveButton.addEventListener("click", function() {
  // Generate random x and y coordinates
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  // Update button's position
  moveButton.style.left = x + "px";
  moveButton.style.top = y + "px";
});
