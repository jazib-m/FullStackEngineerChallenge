const express = require('express');
const app = express();
const port = 3000;
const employeeController = require('./controllers/employeeController')

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.route('api/employees')
.get(employeeController.getEmployee)
.post(employeeController.createEmployee)
.put(employeeController.updateEmployee)
.delete(employeeController.deleteEmployee)



app.listen(port, () => console.log(`Example app listening on port ${port}!`));