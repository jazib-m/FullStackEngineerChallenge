let employees = [{name: "jazib", id:1, reviewsToFill: []}, {name: "sumair", id:2, reviewsToFill: []}]

function getEmployee(req, res) {
    res.status(200).send(employees)
}

function createEmployee(req, res) {
    let employeeToSave = req.data.employee;
    employees.push(employeeToSave);
    res.status(200).send("employee saved successfully");
}

function updateEmployee(req, res) {
    res.status(200).send("put employee api working")
}

function deleteEmployee(req, res) {
    res.status(200).send("delete employee api working")
}

module.exports = {getEmployee, createEmployee, updateEmployee, deleteEmployee};