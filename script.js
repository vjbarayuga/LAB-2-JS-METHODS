// console.log("hello world")


let names = ['Danny','Joe','Sarah','Molly'];

let names2 = ['John','Tom'];

let names3 = ['Delia','Smith'];

let namesCopy = [...names3, ...names2];

let stringNamesToString = names.toString();
console.log(stringNamesToString);

let stringNamesJoin = names.join(' and ');
console.log(stringNamesJoin);

let joined = names.concat(names2, names3);
console.log(joined);

names.splice(1, 1);
console.log(names);

console.log(namesCopy);

names.splice(4, 5, 'Bill', 'Bob');
console.log(names);

let names4 = ['Danny','Joe','Sarah','Molly', 'Delia','Smith'];

let slice = names4.slice(1, 3);
console.log(slice);

let index = names4.indexOf('Sarah')
console.log(index);


let nums = [1, 2, 3, 4, [5, 6, [7, 8]], 9];

let flat = nums.flat(2);

console.log(flat);


let namesForEach = ['Danny','Joe','Sarah','Molly', 'Delia','Smith'];

namesForEach.forEach (n => {
    console.log(n);
})

let count = 0;
namesForEach.forEach((n) => {
    count++;
});
console.log(count);


for (let i = 0; i < namesForEach.length; i++) {
    console.log(namesForEach[i]);
}

let numsMap = [1, 2, 3, 4, 5, 6,];

let doubled = numsMap.map((n) => n + 1);
console.log(doubled);



