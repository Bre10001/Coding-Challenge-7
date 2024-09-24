// Task 1: Create a Department Structure
const company = { //object to create department structure
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                    }   
                ]   
            },
        {
            departmentName: 'Business Intelligence',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

console.log(company);

// Task 2: Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(department) {
    let totalDepSalary = 0;
    for (let employee of department.employees) { // Loop through all employees in the department     
        totalDepSalary += employee.salary; // Recursively add the salaries of the employee's subordinates
        for (let subordinate of employee.subordinates) { // Recursively add the salaries of the employee's subordinates 
            totalDepSalary += calculateDepartmentSalary({ employees: [subordinate] });
        }
    }

    return totalDepSalary;
}

const businessIntelligenceDepartment = company.departments[1];
console.log("Total salary for Business Intelligence Department:", calculateDepartmentSalary(businessIntelligenceDepartment)); // Outputs total for BI department


