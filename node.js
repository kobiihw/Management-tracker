const CommandService = require('./command/CommandService.js');

//runs first
(async () => {
 

  // const commandService = new CommandService()
  // commandService.prompt('task','what do you want to do?')
  CommandService.listPrompt('task','what do you want to do?',['Departments', 'Roles', 'Employees'])
}
)()
