import { faker } from '@faker-js/faker';
import {userSeeds} from './userSeeds';
import { insertIntoEvent } from '../services/eventService';
import { newLog } from '../controllers/logController';

export function generateEvent(): void {
  if (userSeeds.length === 0) {
    console.log("Please generate users first");
    return;
  }
  for (let i = 0; i < 10; i++) {
    const randomUser = userSeeds[Math.floor(Math.random() * userSeeds.length)];
    insertIntoEvent({
      id: faker.string.uuid(),
      name: faker.company.name(),
      date: faker.date.future().toLocaleDateString("pt-BR").split("/").join("-"),
      user_id: randomUser.id!,
    });
  }
  newLog("Event seeds generated");
}

