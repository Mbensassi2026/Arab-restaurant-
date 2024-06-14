function showMenu(category) {
    var sections = document.querySelectorAll('.menu-section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    var selectedCategory = document.getElementById(category);
    selectedCategory.style.display = 'block';
}
function showMenu(category) {
    var sections = document.querySelectorAll('.menu-section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    var selectedCategory = document.getElementById(category);
    selectedCategory.style.display = 'block';
}
    document.addEventListener("DOMContentLoaded", function() {
        const menuLinks = document.querySelectorAll(".menu-navigation a");

        menuLinks.forEach(function(menuLink) {
            menuLink.addEventListener("click", function(e) {
                e.preventDefault();

                const targetId = menuLink.getAttribute("href").substring(1); // Get the target section's id without the "#"
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // Scroll smoothly to the target section
                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            });
        });
    });

 // Get all "Select" buttons
 const selectButtons = document.querySelectorAll(".select-button");

 // Add a click event listener to each button
 selectButtons.forEach(function(button) {
     button.addEventListener("click", function() {
         // Get the unique identifier (data-id) of the clicked button
         const itemId = button.getAttribute("data-id");

         // Perform your cart logic here, e.g., add the item to the cart
         // You can use JavaScript to manage a cart object or communicate with a server

         // For now, we'll just show an alert as a placeholder
         alert(`Item '${itemId}' added to cart`);
     });
 });


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    // Get all the quantity control buttons and the quantity display
    const decreaseButtons = document.querySelectorAll(".quantity-decrease");
    const increaseButtons = document.querySelectorAll(".quantity-increase");
    const quantityDisplays = document.querySelectorAll(".quantity");

    // Add click event listeners to decrease quantity
    decreaseButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const quantityDisplay = button.nextElementSibling; // Get the associated quantity display
            let quantity = parseInt(quantityDisplay.textContent);

            if (quantity > 0) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });
    });

    // Add click event listeners to increase quantity
    increaseButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const quantityDisplay = button.previousElementSibling; // Get the associated quantity display
            let quantity = parseInt(quantityDisplay.textContent);

            quantity++;
            quantityDisplay.textContent = quantity;
        });
    });
    const checkboxes = document.querySelectorAll('.item-checkbox');
    const checkoutButton = document.querySelector('.checkout button');
    const totalElement = document.getElementById('total');

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateTotal);
    });

    function updateTotal() {
      const total = computeTotal();
      totalElement.textContent = total;

      if (total > 0) {
        checkoutButton.style.display = 'block';
      } else {
        checkoutButton.style.display = 'none';
      }
    }

    function computeTotal() {
      const checkboxes = document.querySelectorAll('.item-checkbox');
      let total = 0;

      checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
          const itemContainer = checkbox.closest('.beverage-item');
          const quantity = parseInt(itemContainer.querySelector('.quantity').textContent);
          const price = parseFloat(checkbox.getAttribute('data-price'));
          total += quantity * price;
        }
      });

      return total.toFixed(2);
    }

    function checkout() {
      const total = parseFloat(totalElement.textContent);
      if (total > 0) {
        // Perform checkout actions here, such as redirecting to a checkout page.
        alert(`Total amount: $${total.toFixed(2)}`);
      } else {
        alert('Your cart is empty. Please select items before proceeding to checkout.');
      }
    }