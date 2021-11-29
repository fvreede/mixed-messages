// Program generates random text on quotes, mostly fake quotes mashed up with random names and year of death.

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

function generateRandomArray(arr) {
        return Math.floor(Math.random() * arr);
}

let message = []

for (let arr in msgObject) {
    let index = generateRandomArray(msgObject[arr].length);
    switch (arr) {
        case 'quote':
            message.push(`${msgObject[arr][index]}`)
            break;
        case 'author':
            message.push(`By: ${msgObject[arr][index]}.`)
            break;
        case 'yearOfDeath':
            message.push(`Died in: ${msgObject[arr][index]}`)
            break;
        default:
            message.push('Not enough data');
            break;
    }
}

console.log(message)