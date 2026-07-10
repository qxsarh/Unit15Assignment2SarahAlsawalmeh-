// ===== Booking form validation =====
// Matches the flowchart and pseudocode in the Flowcharts & Pseudocode section.

function validateForm() {
    const nameInput = document.getElementById('name');
    const dateInput = document.getElementById('date');
    const ageCheckbox = document.getElementById('age-confirm');
    const confirmationBox = document.getElementById('confirmation');

    const name = nameInput.value.trim();
    const date = dateInput.value;

    // Reset any previous confirmation message
    if (confirmationBox) {
        confirmationBox.hidden = true;
        confirmationBox.textContent = '';
    }

    // Check 1: name must not be empty
    if (name === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return false;
    }

    // Check 2: date must be selected
    if (date === '') {
        alert('Please select a date.');
        dateInput.focus();
        return false;
    }

    // Check 3: date must not be in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(date);

    if (selectedDate < today) {
        alert('Please choose today\'s date or a future date.');
        dateInput.focus();
        return false;
    }

    // Check 4: age requirement confirmation (condition-based check, per brief)
    if (ageCheckbox && !ageCheckbox.checked) {
        alert('Please confirm the age requirement before booking.');
        ageCheckbox.focus();
        return false;
    }

    // All checks passed — show confirmation and stop the form from reloading the page
    if (confirmationBox) {
        confirmationBox.hidden = false;
        confirmationBox.textContent = `Thanks, ${name}! Your visit on ${date} has been booked.`;
    }

    return false; // prevent default form submission/page reload for this demo
}
