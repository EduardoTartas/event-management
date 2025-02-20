import { faker } from '@faker-js/faker';
import { userModel } from '../model/userModel';
import { insertIntoUser } from '../services/userService';
import { newLog } from '../controllers/logController';

export const userSeeds: userModel[] = [];

export function generateUser(): void {
    for (let i = 0; i < 10; i++) {
        const user: userModel = {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        }
        insertIntoUser(user).catch((reject) => console.log("Error on inserting user seeds",reject));
        userSeeds.push(user);
    }
    newLog("User seeds generated");
}



