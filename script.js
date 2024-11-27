// Display details about a game when the user clicks "Learn More"
function showGameDetails(gameName) {
    alert(`You clicked on ${gameName}. This game is amazing and packed with action!`);
}

// Contact form validation (simple demo)
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
    } else {
        alert('Please fill in all fields.');
    }
});
