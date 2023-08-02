function submitForm(event) {
    event.preventDefault();

    // Get user input values
    var name = document.getElementById('name').value;
    var section = document.getElementById('section').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;

    // Display the user information
    alert('Name: ' + name + '\nSection: ' + section + '\nAddress: ' + address + '\nPhone Number: ' + phone);
}
