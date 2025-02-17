import { validateUser } from '../utils/validations';
import { newLog } from './logController';
import { userModel } from '../model/userModel';
import UserServices from '../services/loginService';

export let currentUser:userModel;

export async function userLogin(nameQuery:string, passwordQuery:string):Promise<any>{

    try {
       
        const {id, name, email, password} = await UserServices.userLogin(nameQuery, passwordQuery);
        console.log(id);
        console.log(name);

        console.log(email);

        console.log(password);

        
        
    } catch (error) {
        
    }
}