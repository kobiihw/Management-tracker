const inquirer = require('inquirer')
const DataServiceClass = require('../data/DataService.js');
const DataService = new DataServiceClass

const CommandService = {
 

    //prompt with text imput


    //prompt that shows list of options
    listPrompt(pName, pMessage, pList){
        inquirer.prompt([
            {
                type: 'list',
                name: pName,
                message: pMessage,
                choices: pList,
            },
            ])
            .then(answers => { 
                this.dispatch(answers)
            });
            
        },

    // decides what to do with answer
        dispatch(answer){ console.log(answer)
            // console.log("disbatch")
            if (answer) {
                switch(Object.keys(answer)[0]){ // What is the name of the question 
                    case 'task':
                        //user selected task 
                        const val = answer[Object.keys(answer)[0]]
                        switch (val){
                            case 'Departments':
                                this.Department()
                                 //ask the role list options
                                break;
                            case 'Roles':
                                this.Role()
                                //ask the role list options
                                // console.log('you are in roles case')
                                break;
                            case 'Employees':
                                this.Employee()
                                //ask the employee list options
                                break;
                        }
                        break;

                    case 'Department Options':
                        //TODO  add the code that will add this value to department table
                       
                        this.Department(answer[Object.keys(answer)[0]])
                        // console.log("(refrencing case: department Options)")
                        const val2 = answer[Object.keys(answer)[0]]
                        switch (val2){
                            case 'Add Department':
                                DataService.addNewDepartment()
                                 //ask the role list options
                                break;
                            case 'Remove Department':
                                DataService.removeDepartment()
                                //ask the role list options
                                break;

                  
                        }
                        break;

                    case 'Role Options':
                            //TODO  add the code that will add this value to department table
                                   
                        this.Role(answer[Object.keys(answer)[0]])
                        // console.log("(refrencing case: Role Options)")
                        const val3 = answer[Object.keys(answer)[0]]
                        switch (val3){
                            case 'Add Role':
                                // console.log('in case: Add Role')
                                DataService.addNewRole()
                                
                                    break;
                            case 'Remove Role':
                                    DataService.removeRole()
                                    //ask the role list options
                                    break;
                    }

                    case 'Employee Options':
                        //TODO  add the code that will add this value to department table
                               
                    this.Employee(answer[Object.keys(answer)[0]])
                    // console.log("(refrencing case: Employee Options)")
                    const val4 = answer[Object.keys(answer)[0]]
                    switch (val4){
                        case 'Add Employee':
                            // console.log('(in case: Add Employee)')
                            DataService.addNewEmployee()
                            
                                break;
                        case 'Remove Employee':
                                DataService.removeEmployee()
                                //ask the role list options
                                break;
                    }
                    default:

                        break;
                } 
                }else {
                console.log('answer was null')
            
                return
            }
        },
    //ask department options
        Department(pDepartmentName){
            this.listPrompt('Department Options', 'Choose One',["Add Department", "Remove Department"])
        //   console.log('Im being refrenced')
        },
        //ask role options
      Role(pRoleName){
            this.listPrompt('Role Options', 'Choose One',["Add Role", "Remove Role"])
        },
        //ask  employee options
      Employee(){
            this.listPrompt('Employee Options', 'Choose One',["Add Employee", "Remove Employee", "Update Employee Role"])
        },
 }

 // exports this class
module.exports = CommandService
