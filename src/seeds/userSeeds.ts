import { faker } from '@faker-js/faker';
import { userModel } from '../model/userModel';
import { insertUserService } from '../services/userService';
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
        insertUserService(user);
        userSeeds.push(user);
    }
    newLog("User seeds generated");
}



