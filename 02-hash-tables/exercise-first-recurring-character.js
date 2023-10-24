// 1. Given an array, find the first recurring character


const firstRecurringCharacter = (array) => {
    let map = {};

    for (let i = 0; i < array.length; i++) {
        if (map[ array[ i ] ] !== undefined) {
            console.log(map[ array[ i ] ], 'hey');
            return array[ i ];
        } else {
            map[ array[ i ] ] = i;
        }
    }

    return undefined;
};


console.log(firstRecurringCharacter([ 2, 4, 3, 7, 1, 5, 7 ]));