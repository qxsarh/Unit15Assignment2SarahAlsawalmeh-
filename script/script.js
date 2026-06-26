function validateForm() {
let name = document.getElementById("name").value;
let date = document.getElementById("date").value;

if (name === "" || date === "") {
alert("Please fill in all fields");
return false;
}

alert("Booking successful!");
return true;
}
