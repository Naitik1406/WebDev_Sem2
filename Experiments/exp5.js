let employees = [];

function addEmployee() {
    let name = document.getElementById('employeeName').value;
    let salary = parseFloat(document.getElementById('employeeSalary').value);
    let department = document.getElementById('department').value;
    let id = document.getElementById('employeeId').value;

if (name==="" || isNaN(salary)|| department==="" || id==="") {
    alert("Please fill in all fields correctly.");
    return;
}

let employee = {
    id: id,
    name: name,
    salary: salary,
    department: department
};
employees.push(employee);
alert("Employee added successfully!");
document.getElementById('employeeName').value = "";
document.getElementById('employeeSalary').value = "";
document.getElementById('department').value = "";
document.getElementById('employeeId').value = "";
}

function displayEmployees() {
    let output = "<h2>All Employees</h2>";

    if (employees.length === 0) {
        output += "No employees to display."
    }

    employees.forEach(emp => {
        output += `<p>ID: ${emp.id}, Name: ${emp.name}, Salary: ${emp.salary}, Department: ${emp.department}</p>`;
    });

    document.querySelector('#employeeList').innerHTML = output;
}

function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);
    let output = "<h2>Employees with Salary > 50,000</h2>";

    if (filtered.length === 0) {
        output += "No employees with salary greater than 50,000.";
    } 

    filtered.forEach(emp => {
        output += `<p> Name: ${emp.name}, Salary: ${emp.salary}</p>`;
    });

    document.querySelector('#employeeList').innerHTML = output;
}

function calculateTotalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.querySelector('#employeeList').innerHTML = `<h2>Total Salary: ${total}</h2>`;
}

function averageSalary() {
    if (employees.length === 0) {
        document.querySelector('#employeeList').innerHTML = "<h2>No employees to calculate average salary.</h2>";
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let average = total / employees.length;
    document.querySelector('#employeeList').innerHTML = `<h2>Average Salary: ${average.toFixed(2)}</h2>`;
}

function countDepartment() {
    let deptName = prompt("Enter department name:");
    let count = employees.filter(emp => emp.department.toLowerCase() === deptName.toLowerCase()).length;
    document.getElementById("employeeList").innerHTML = "<h3>Number of Employees in " + deptName + ": " + count + "</h3>";
}