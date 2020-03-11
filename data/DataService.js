const inquirer = require('inquirer')

class DataService {
    constructor(){
    }
    prompt(pName, pMessage){
        return inquirer.prompt([
            {
                name: pName,
                message: pMessage,
            },
            ])
        } 
    //adding new department
    addNewDepartment(pDepartment){
    
        this.prompt('NewDept', 'Add New department Here: ').then(answers=>{
            console.log(answers.NewDept + ': ' + "Has Been Added")
        })
    }
    //adding new role
    addNewRole(pRole){
        this.prompt('NewRole', 'Add New Role Here: ').then(answers=>{
            console.log(answers.NewRole + ': ' + "Has Been Added")
        })
    }
    //adding new employee
    addNewEmployee(pEmployee){
        //construct the call to add dept to MySQL
        
            this.prompt('NewEmployee', 'Add New Employee Here: ').then(answers=>{
                console.log(answers.NewEmployee + ': ' + "Has Been Added")
            })
    }

    removeDepartment(){
        this.prompt('Removed', 'Remove Department Here: ').then(answers=>{
            console.log(answers.Removed + ' :' + "Has Been Removed")
        })
    }
    removeRole(){
        this.prompt('Removed', 'Remove Role Here: ').then(answers=>{
            console.log(answers.Removed + ' :' + "Has Been Removed")
        })
    }

    removeEmployee(){
        this.prompt('Removed', 'Remove Employee Here: ').then(answers=>{
            console.log(answers.Removed + ' :' + "Has Been Removed")
        })
    }

    updateEmployeeRole(){
        
    }
}

 // exports this class 
 module.exports = DataService;