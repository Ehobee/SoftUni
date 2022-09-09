function salary(input) {

    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let initialSalary = Number(input[index]);
    index++;

    for (let i = 0; i < openTabs; i++) {
        let website = input[index];
        index++;
        if (website === "Facebook") {
            initialSalary -= 150;
        } else if (website === "Instagram") {
            initialSalary -= 100;
        } else if (website === "Reddit") {
            initialSalary -= 50;
        }

        if (initialSalary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (initialSalary > 0) {
        console.log(initialSalary)
    }
}
salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"])





