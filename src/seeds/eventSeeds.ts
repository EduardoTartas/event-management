import { faker } from '@faker-js/faker';
import { eventModel } from '../model/eventModel';
import {userSeeds} from './userSeeds';

const eventSeeds: eventModel[] = [];

for (let i = 0; i < 10; i++) {
  const randomUser = userSeeds[Math.floor(Math.random() * userSeeds.length)];
  eventSeeds.push({
    name: faker.company.name(),
    date: faker.date.future().toISOString(),
    user_id: randomUser.id!,
  });
}

export default eventSeeds;
