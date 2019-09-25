const express = require('express');
const app = express();
const port = 3000;
const employeeController = require('./controllers/employeeController');
const performanceController = require('./controllers/performanceController')

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.route('api/employees')
.get(employeeController.getEmployee)
.post(employeeController.createEmployee)
.put(employeeController.updateEmployee)
.delete(employeeController.deleteEmployee)

app.route('api/performance')
.get(performanceController.getAllPerformance)

app.route('api/performance/assign')
.get(performanceController.assignPerformanceReview)

app.route('api/performance:employeeId')
.get(performanceController.getPerformance)
.post(performanceController.createPerformance)
.put(performanceController.updatePerformance)



app.listen(port, () => console.log(`Example app listening on port ${port}!`));