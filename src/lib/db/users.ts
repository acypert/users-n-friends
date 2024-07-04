import { faker } from '@faker-js/faker';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  location?: string;
  profileImg?: string;
  friends: User['id'][];
};

const options = {
  category: 'cats'
};

export const users: User[] = [
  {
    id: 'c6e02ba7-a07e-4a59-9fd2-b08d85b23323',
    firstName: 'Antonio',
    lastName: 'Cypert',
    email: 'acypert@me.com',
    location: 'Tempe, AZ',
    profileImg: faker.image.urlLoremFlickr(options),
    friends: [
      '47df8f41-03f7-4173-a107-dd75cd7068d5',
      '068e9778-0dfa-4df6-b115-c0294be01875',
      '0ffcf790-2618-4ef1-9e83-aa99b78916dc'
    ]
  },
  {
    id: '47df8f41-03f7-4173-a107-dd75cd7068d5',
    firstName: 'Shauna',
    lastName: 'Stevenson',
    email: 'sstevenson@me.com',
    location: 'Toronto, ON',
    profileImg: faker.image.urlLoremFlickr(options),
    friends: [
      'c6e02ba7-a07e-4a59-9fd2-b08d85b23323',
      '0ffcf790-2618-4ef1-9e83-aa99b78916dc'
    ]
  },
  {
    id: '068e9778-0dfa-4df6-b115-c0294be01875',
    firstName: 'Tyler',
    lastName: 'Taylor',
    email: 'ttaylor@me.com',
    location: 'Tempe, AZ',
    profileImg: faker.image.urlLoremFlickr(options),
    friends: ['c6e02ba7-a07e-4a59-9fd2-b08d85b23323']
  },
  {
    id: '0ffcf790-2618-4ef1-9e83-aa99b78916dc',
    firstName: 'Justin',
    lastName: 'Beard',
    email: 'jbeard@me.com',
    location: 'Florence, AZ',
    profileImg: faker.image.urlLoremFlickr(options),
    friends: []
  },
  {
    id: '21e8e3c7-74fb-48f8-9bf6-92d9fc810adf',
    firstName: 'Fred',
    lastName: 'Cypert',
    email: 'fcypert@me.com',
    location: 'Bisbee, AZ',
    profileImg: faker.image.urlLoremFlickr(options),
    friends: [
      'c6e02ba7-a07e-4a59-9fd2-b08d85b23323',
      '47df8f41-03f7-4173-a107-dd75cd7068d5'
    ]
  },
  {
    id: '40281d73-cf23-40c2-8eeb-29bf60cffa3b',
    firstName: 'Dela',
    lastName: 'Williamson',
    email: 'dwilliamson@me.com',
    location: 'Anthem, AZ',
    profileImg: faker.image.urlLoremFlickr(options),
    friends: [
      'c6e02ba7-a07e-4a59-9fd2-b08d85b23323',
      '47df8f41-03f7-4173-a107-dd75cd7068d5'
    ]
  }
] as const;
