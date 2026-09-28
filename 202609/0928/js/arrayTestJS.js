/* ========================
   配列問題A
======================== */

/* ========================
   一問目
======================== */
// const fruits = ['りんご', 'ばなな', 'みかん'];
// console.log(fruits[1]);

/* ========================
   二問目
======================== */
const animals = ["いぬ", "ねこ", "うさぎ", "ぱんだ"];
animals.forEach(animal => {
    console.log(animal);
});

for (const animal of animals) {
    console.log(animal);

}
/* ========================
   三問目
======================== */
const seats = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"]
];

console.log(seats[0][2]);
console.log(seats[1][1]);
console.log(seats[2][0]);

/* ========================
   四問目
======================== */
const scores = [70, 85, 90, 60];

scores.forEach(score => {
    console.log(`点数は${score}です`);

});

for (const score of scores) {
    console.log(`点数は${score}です`);

}

/* ========================
   五問目
======================== */
const colors = ['赤', '青', '黄'];
colors.push('緑');
colors.pop();
const newColors = [...colors];
newColors.push('黒');
console.log(newColors);


/* ========================
   配列問題B
======================== */

/* ========================
   一問目
======================== */
// const numbers = [10, 25, 40, 15, 60];

// function getLargeNumbers(numbers, value) {
//     const result = numbers.filter((number) => number >= value);
//     return console.log(result);

// }
// getLargeNumbers(numbers, 20);

/* ========================
   二問目
======================== */
const numbers = [30, 5, 80, 20, 10];

function sortDescending(numbers) {
    const result = numbers.sort((a, b) => b - a);
    return console.log(result);

}

sortDescending(numbers);


/* ========================
   三問目
======================== */
const fruits = ["apple", "banana", "orange"];

function showItems(items) {
    return items.forEach((item, index) => {
        console.log(index + '：' + item);
    })
}

showItems(fruits);


/* ========================
   四問目
======================== */
const items = ["HTML", "CSS", "JavaScript", "PHP", "Git"];

function replaceItems(items) {
    const result = items.toSpliced(1, 0, 'React', 'Next.js');
    return console.log(result);

}

replaceItems(items);

/* ========================
   五問目
======================== */

const names = ["田中", "山田", "佐藤"];

function addHonorific(names) {
    const result = names.map((name) => {
        return name + 'さん';
    })
    return console.log(result);
}

addHonorific(names);
