document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log('Name:', formData.get('name'));
    console.log('Email:', formData.get('email'));
    console.log('Message:', formData.get('message'));
    alert('Thank you for your message. We will get back to you shortly.');
    // Additional AJAX code to actually send the data can be added here.
});
