
let basicSalary = Number(prompt("Enter your basic salary"));
let da;
let hra;
let pf;

if (basicSalary <= 10000) {
    da = 25
    hra = 30
    pf = 8
    let netSalary = basicSalary + (da / 100) * basicSalary + (hra / 100) * basicSalary - (pf / 100) * basicSalary
    alert(`your  Net salary is ${netSalary}`);
} else if (basicSalary > 10000 && basicSalary <= 20000) {
    da = 20
    hra = 25
    pf = 6
    let netSalary = basicSalary + (da / 100) * basicSalary + (hra / 100) * basicSalary - (pf / 100) * basicSalary
    alert(`your Net salary is ${netSalary}`);
} else if (basicSalary > 20000 && basicSalary <= 30000) {
    da = 15
    hra = 20
    pf = 4
    let netSalary = basicSalary + (da / 100) * basicSalary + (hra / 100) * basicSalary - (pf / 100) * basicSalary
    alert(`your Net salary is ${netSalary}`);
} else if(basicSalary >= 30000){
    da = 10
    hra = 15
    pf = 2
    let netSalary = basicSalary + (da / 100) * basicSalary + (hra / 100) * basicSalary - (pf / 100) * basicSalary
    alert(`your Net salary is ${netSalary}`);
} else{
    alert("Please enter your basic salary.")

}
