const container = document.getElementById("container");
const form = document.getElementById("form");
const studentName = document.getElementById("studentName");
const studentId = document.getElementById("studentId");
const branch = document.getElementById("branch");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const studentNameInput = studentName.value.trim();
    const studentIdInput = studentId.value.trim().toUpperCase();
    const branchInput = branch.value.trim().toUpperCase();

    // Student Name Validation
    if (!/^[A-Za-z ]+$/.test(studentNameInput)) {
        alert("Student name should contain only alphabets.");
        return;
    }

    // Student ID Validation
    if (
        studentIdInput.length != 10 ||
        /^[A-Za-z]+$/.test(studentIdInput) ||
        /^[0-9]+$/.test(studentIdInput) ||
        !/^[A-Za-z0-9]+$/.test(studentIdInput)
    ) {
        alert("Student ID should be 10 characters and contain both letters and numbers.");
        return;
    }

    // Branch Validation
    
if (branchInput === "") {
    alert("Please select a branch.");
    return;
}
    // Remove old card
    const oldCard = document.querySelector(".generatedCard");

    if (oldCard) {
        oldCard.remove();
    }

    // Create Card
    const jsCard = document.createElement("div");
    jsCard.className = "generatedCard";

    const jsStuName = document.createElement("p");
    const jsStuId = document.createElement("p");
    const jsBranch = document.createElement("p");

    jsStuName.textContent = `Student Name: ${studentNameInput}`;
    jsStuId.textContent = `Student ID: ${studentIdInput}`;
    jsBranch.textContent = `Student Branch: ${branchInput}`;

    jsCard.appendChild(jsStuName);
    jsCard.appendChild(jsStuId);
    jsCard.appendChild(jsBranch);

    container.appendChild(jsCard);

    form.reset();
});