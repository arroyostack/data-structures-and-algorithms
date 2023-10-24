// HASH TABLES. Almost every language has an inbuilt hash table data structure.
// Python: Dictionaries.
// Javascript: Objects.
// Java: Maps.
// Ruby: Hashes.
// With a hash table to are able to store key and value pairs.
// Example:

// basket.grapes = 1000;

// This will be difficult to do with another type of data structure such an array since it only attach the value to and index which we can no name it. Moreover this index may change.


// Hash tables can store multiple data types and even functions and they have no order.
// To access a specific value we do not have to iterate through all properties as in the case with arrays.

const user = {
    name: "Sally",
    age: 37,
    isLogged: true,
    greet: function () {
        return `Hi there my name is ${ this.name } I am ${ this.age }. Status: ${ this.isLogged ? "Online" : "Away" }`;
    }
};

console.log(user.greet());

// Additionally Map() and Set() are hash tables as well.

// ARRAY VS HASH TABLE

// BIG O NOTATION IN HASH TABLES
// 1. SEARCH: O(1)
// 2. INSERT: O(1)
// 3. LOOKUP: O(1)
// 4. DELETE: O(1)

// BIG O NOTATION IN ARRAYS
// 1. SEARCH: O(n)
// 2. INSERT: O(n)
// 3. LOOKUP: O(1)
// 4. DELETE: O(n
// 5. PUSH O(1)




