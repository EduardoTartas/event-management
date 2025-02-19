import { faker } from '@faker-js/faker';
import {userSeeds} from './userSeeds';
import { insertIntoEvent } from '../services/eventService';

export function generateEvent(): void {
  for (let i = 0; i < 10; i++) {
    const randomUser = userSeeds[Math.floor(Math.random() * userSeeds.length)];
    insertIntoEvent({
      id: faker.string.uuid(),
      name: faker.company.name(),
      date: faker.date.future().toLocaleDateString("pt-BR").split("/").join("-"),
      user_id: randomUser.id!,
    });
  }
}

