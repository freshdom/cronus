import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------
faker.setLocale('zh_CN');

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.internet.domainName(),
  company: faker.internet.ip(),
  isVerified: faker.datatype.boolean(),
  status: sample(['success', 'banned']),
  role: faker.internet.httpMethod(),
}));

export default users;
