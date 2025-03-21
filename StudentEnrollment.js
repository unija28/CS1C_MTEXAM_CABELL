let DSA = [];
let WebDev = [];
let running = true;

while (running) {
    // Display menu options
    let choice = prompt("Choose an option:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toUpperCase();

    if (choice === "A") {
        // Enroll a student
        let studentName = prompt("Enter the student's name:");
        let subject = prompt("Enter the subject (DSA or WebDev):").toUpperCase();

        if (subject === "DSA") {
            DSA.push(studentName);
            console.log(`${studentName} has been enrolled in DSA.`);
        } else if (subject === "WEBDEV") {
            WebDev.push(studentName);
            console.log(`${studentName} has been enrolled in WebDev.`);
        } else {
            console.log("Invalid subject! Please choose DSA or WebDev.");
        }
    } else if (choice === "B") {
        // Unenroll a student
        let subject = prompt("Enter the subject (DSA or WebDev):").toUpperCase();

        if (subject === "DSA") {
            if (DSA.length > 0) {
                console.log(`Current students in DSA: ${DSA.join(", ")}`);
                let studentToRemove = prompt("Enter the name of the student to remove:");
                DSA = dsaStudents.filter(student => student !== studentToRemove);
                console.log(`${studentToRemove} has been unenrolled from DSA.`);
            } else {
                console.log("No students are currently enrolled in DSA.");
            }
        } else if (subject === "WEBDEV") {
            if (WebDev.length > 0) {
                console.log(`Current students in WebDev: ${WebDev.join(", ")}`);
                let studentToRemove = prompt("Enter the name of the student to remove:");
                WebDev = WebDev.filter(student => student !== studentToRemove);
                console.log(`${studentToRemove} has been unenrolled from WebDev.`);
            } else {
                console.log("No students are currently enrolled in WebDev.");
            }
        } else {
            console.log("Invalid subject! Please choose DSA or WebDev.");
        }
    } else if (choice === "C") {
        // Select another subject (simply loops back to the main menu)
        console.log("Returning to subject selection...");
    } else if (choice === "D") {
        // Exit the program
        console.log("Final List of Students:");
        console.log(`DSA: ${DSA.join(", ")}`);
        console.log(`WebDev: ${WevDev.join(", ")}`);
        running = false;
        console.log("Program exited.");
    } else {
        console.log("Invalid option! Please choose A, B, C, or D.");
    }
}
