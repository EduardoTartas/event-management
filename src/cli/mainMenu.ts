const mainMenu = inquirer.prompt([
    {   
        message:"Select an option",
        type: 'list',
        choices: ['Login', 'Manage users', 'Manage events'],
        name: 'mainMenuOption'
    }
]);

mainMenu.then((answers) => {
    switch(answers.mainMenuOption){
        case 'Login':
            loginMenu();
        break;
        case 'Manage users':
            manageUsersMenu()
        break;
    }
});

function loginMenu(){
    const loginMenu = inquirer.prompt([
        {
            message: "Please write your email",
            type: 'input',
            default:'admin',
            name: 'loginEmail'
        },
        {
            message: "Please write your password",
            type: 'input',
            default:'admin',
            name: 'loginPassword'
        }
    ]);

    loginMenu.then((answers) => {
        loginControllers.userLogin(answers.loginEmail, answers.loginPassword);
    });
} 
