const basicPrice = document.getElementById("basic-price");
const professionalPrice = document.getElementById("professional-price");
const masterPrice = document.getElementById("master-price");
const toggleCheckbox = document.getElementById("toggle-checkbox");

toggleCheckbox.addEventListener("click", function(){
  if (toggleCheckbox.checked === true) {
    basicPrice.innerHTML = `<span class="s-heading">$</span>19.99`;
    professionalPrice.innerHTML = `<span class="s-heading">$</span>24.99`;
    masterPrice.innerHTML = `<span class="s-heading">$</span>39.99`;
  } else {
    basicPrice.innerHTML = `<span class="s-heading">$</span>199.99`;
    professionalPrice.innerHTML = `<span class="s-heading">$</span>249.99`;
    masterPrice.innerHTML = `<span class="s-heading">$</span>399.99`;
  }
});
