// script.js
// Form Submission
function submitForm(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const minat = document.getElementById('minat').value;
    
    alert(`Terima kasih ${nama}! Pendaftaran berhasil.\n\nKami telah mengirim kode diskon ke email ${email}`);
    document.getElementById('registrationForm').reset();
}

// Popup Promo Functions
function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up popup
    setTimeout(showPopup, 3000);
    
    // Close popup when overlay is clicked
    document.getElementById('overlay').addEventListener('click', closePopup);
    
    // Form submission
    document.getElementById('registrationForm').addEventListener('submit', submitForm);
});