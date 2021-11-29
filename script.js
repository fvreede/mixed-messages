// Program generates random text on quotes, mostly fake quotes mashed up with random names and year of death.

// Stores arrays in an object
const msgObject = {
    quote: ['Be yourself; everyone else is already taken.',
            'So many books, so little time.',
            'A room without books is like a body without a soul.',
            'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
            'Be the change that you wish to see in the world.'],

    author: ['Oscar Wilde',
            'Frank Zappa',
            'Marilyn Monroe',
            'Albert Einstein',
            'Mahatma Gandhi'],

    yearOfDeath: [1900, 1993, 1962, 1955, 1948],
};

// Generates random numbers from 0 -> 1 or other non-floating numbers
function generateRandomNumber(num) {
        return Math.floor(Math.random() * num);
}

// Stores random data in a message array
let message = []

for (let num in msgObject) {
    let index = generateRandomNumber(msgObject[num].length);
    switch (num) {
        case 'quote':
            message.push(`${msgObject[num][index]}`)
            break;
        case 'author':
            message.push(`By: ${msgObject[num][index]}.`)
            break;
        case 'yearOfDeath':
            message.push(`Died in: ${msgObject[num][index]}`)
            break;
        default:
            message.push('Not enough data');
            break;
    }
}

console.log(message)