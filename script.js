function getFormvalue() {
    // Get the form element by its ID
    const form = document.getElementById('form1');

    // Retrieve the values of the "First name" and "Last name" input fields
    const firstName = form.fname.value;
    const lastName = form.lname.value;

    // Display the full name in an alert box
    alert(firstName + " " + lastName);
}

