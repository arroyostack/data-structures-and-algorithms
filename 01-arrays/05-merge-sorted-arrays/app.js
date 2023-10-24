// MERGE TWO SORTED ARRAYS. Big O notation: O(n)

const arrayMerger = (arr1, arr2) => {

    const mergedArray = [];

    let arr1Item = arr1[ 0 ];
    let arr2Item = arr2[ 0 ];

    let i = 1;
    let j = 1;

    while (arr1Item || arr2Item) {
        // The conditial statement can be converted into a independent function
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            arr1Item = arr1[ i ];
            i++;
        } else {
            mergedArray.push(arr2Item);
            arr2Item = arr2[ j ];
            j++;
        }
    }

    return mergedArray;

};

console.log(arrayMerger([ 9, 10, 11, 25 ], [ 3, 5, 6, 7, 8, 9, 11, 70, 800 ]));

