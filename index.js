const { log } = require('console');
const express = require('express');
const app = express();
const port = 8081;
let employees = [];

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));

// Add Employee
app.get('/',(req,res)=>{
    return res.render('index');    
})

app.post('/',(req,res)=>{
    employees.push({...req.body, id:Date.now()})
    return res.redirect(req.get('Referrer')) || ('/');
})

// View Employees Data
app.get('/viewdata',(req,res)=>{
    return res.render('viewdata',{employees})
})

app.post('/viewdata',(req,res)=>{
    employees.push({...req.body, id:Date.now});
    return res.redirect(req.get('Referrer')) || ('/viewdata');
})

// Delete Employee
app.get('/emp/delete/:id',(req,res)=>{
    let id = req.params.id;
    employees = employees.filter(employee => employee.id != id);
    console.log('Employee Deleted Successfully.');
    
    return res.redirect(req.get('Referrer')) || ('/viewdata');
})

// Edit Employee
app.get('/emp/edit/:id', (req, res) => {
    let id = req.params.id;
    const employee = employees.find(emp => emp.id == id);

    if (!employee) return res.send("Employee not found");

    res.render('edit', { employee });
});

app.post('/emp/edit/:id', (req, res) => {
    let id = req.params.id;
    const index = employees.findIndex(emp => emp.id == id);

    if (index === -1) return res.send("Employee not found");

    // Update employee
    employees[index] = {
        ...employees[index],
        empid: req.body.empid,
        empname: req.body.empname,
        department: req.body.department,
        salary: req.body.salary
    };

    res.redirect('/viewdata');
});

// Search Employee
app.get('/emp/view', (req, res) => {
    const search = req.query.search?.toLowerCase() || '';
    const results = employees.filter(emp =>
        emp.empid === search || emp.empname.toLowerCase().includes(search)
    );
    res.render('viewdata', { employees: results });
});

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Server Start.');
        console.log('http://localhost:'+ port);
        
    }
})