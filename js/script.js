// Show alert when "Add to Cart" is clicked
document.addEventListener("click", function(e) {
  if (e.target.matches(".add-to-cart")) {
    alert("Item added to cart!");
  }
});
