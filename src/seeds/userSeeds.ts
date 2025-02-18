import { faker } from '@faker-js/faker';
import { userModel } from '../model/userModel';
import { insertIntoUser } from '../services/userService';

export const userSeeds: userModel[] = [];

export function generateUser(): void {
    for (let i = 0; i < 10; i++) {
        const user: userModel = {
            id: i,
            name: faker.name.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        }
        insertIntoUser(user);
        userSeeds.push(user);
    }
}



