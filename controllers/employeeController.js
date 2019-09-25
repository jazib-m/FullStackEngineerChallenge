function getEmployee(req, res) {
    res.status(200).send("get employee api working")
}

function createEmployee(req, res) {
    res.status(200).send("post employee api working")
}

function updateEmployee(req, res) {
    res.status(200).send("put employee api working")
}

function deleteEmployee(req, res) {
    res.status(200).send("delete employee api working")
}

module.exports = {getEmployee, createEmployee, updateEmployee, deleteEmployee};