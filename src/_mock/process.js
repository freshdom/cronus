import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------
faker.setLocale('zh_CN');

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.hacker.verb(),
  company: faker.system.directoryPath(),
  isVerified: faker.datatype.boolean(),
  status: sample(['success', 'banned']),
  role: faker.system.filePath(),
}));

export default users;
