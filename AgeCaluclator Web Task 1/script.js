function calculateAge() {
    let dob = document.getElementById("dob").value;
    if (dob === "") {
        document.getElementById("result").innerText = "Please enter your date of birth.";
        return;
    }
    
    let dobDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    let monthDiff = today.getMonth() - dobDate.getMonth();
    let dayDiff = today.getDate() - dobDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    
    document.getElementById("result").innerText = `Your Age is: ${age} years`;
}