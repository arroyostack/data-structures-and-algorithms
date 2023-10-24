const greet = 'hola todos';

const reverseString = (string) => {
    if (!string || string.length < 2 || typeof string !== 'string') {
        return "Ummmmmhhhh that's not good";
    };

    const reversedString = [];
    const totalItems = string.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        reversedString.push(string[ i ]);
    }

    return reversedString.join('');
};
console.log(reverseString('Hola a todos'));

const reverse = () => [ ...string ].reverse().join('');