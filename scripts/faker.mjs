import faker from 'faker';

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 14;

/* Generate Random Users */
const generateUsers = count => {
    let generatedUserCount = 0;

    const users = [];
    while (generatedUserCount < count) {
        users.push({
            id: faker.datatype.uuid(),
            username: faker.internet.userName(),
            password: faker.internet.password(
                Math.floor(
                    Math.random() *
                        (MAX_PASSWORD_LENGTH - MIN_PASSWORD_LENGTH + 1)
                ) + MIN_PASSWORD_LENGTH
            ),
            email: faker.internet.email(),
            displayName: faker.name.findName(),
            contact: faker.phone.phoneNumber('0091##########'),
            registeredOn: faker.date.past(),
            lastLogin: faker.date.recent(),
        });
        ++generatedUserCount;
    }
    return users;
};

console.log(generateUsers(10));
