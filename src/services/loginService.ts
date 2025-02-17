import UserRepository from "../repository/user";


class UserServices {
    
    static async userLogin(nameQuery: string, passwordQuery: string): Promise<any> {
        const {name, password} = await UserRepository.userList(nameQuery);
        console.log(password);
        
        if (passwordQuery === password) {
            return {name, password};
        }
        console.log("Senha incorreta");


    }
    
}

export default UserServices;