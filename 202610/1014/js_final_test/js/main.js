// 問題文でshowText()の使用を指定している場合は、この関数を使ってください。
const showText = (id, value) => {
  document.getElementById(id).textContent = value;
};

/////////////////////////// 01 ///////////////////////////////
const studentName = '山田';
let score = 70;
score = 85;

console.log(studentName);
console.log(score);
/////////////////////////// 02 ///////////////////////////////
const unitPrice = 1800;
const quantity = 3;
function calculateTotal(price = 0, count = 1) {
  return price * count;
}

console.log(calculateTotal(unitPrice, quantity));
/////////////////////////// 03 ///////////////////////////////
const numbers = [12, 8, 15, 6, 9];
let total = 0;
for (const number of numbers) {
  total += number;
}

showText("q03-output", total)
/////////////////////////// 04 ///////////////////////////////
function checkDiscount(age = 0) {
  if (age <= 12 || age >= 65) {
    return "割引料金です";
  } else {
    return "通常料金です";
  }
}

const discountResult = checkDiscount(70);
showText("q04-output", discountResult);
/////////////////////////// 05 ///////////////////////////////

// 05で使用します。この二次元配列とオブジェクトを使ってください。
const learningData = [
  ["HTML", "CSS", "JavaScript", "Git", "React", "Next.js"],
  {
    name: "佐藤",
    age: 32,
    course: "Web Development",
    city: "Kobe",
  },
  ["Figma", "Photoshop", "Illustrator", "After Effects"],
];

const subject = learningData[0][4];
const learnerName = learningData[1].name;
const message = `${learnerName}さんは${subject}を学習しています`

showText("q05-output", message)
/////////////////////////// 06 ///////////////////////////////

// 06で使用します。この配列を使ってください。
const skills = ["HTML", "CSS", "不要1", "不要2", "JavaScript", "Git"];

const usefulSkills = skills.toSpliced(2, 2);
showText("q06-output", usefulSkills)
/////////////////////////// 07 ///////////////////////////////

// 07で使用します。この配列を使ってください。
const names = ["佐藤", "田中", "鈴木"];

const displayNames = names.map((name) => `${name}さん`);
showText("q07-output", displayNames)
/////////////////////////// 08 ///////////////////////////////

// 08で使用します。このオブジェクトを使ってください。
const subjectScores = {
  html: 80,
  css: 75,
  javascript: 90,
};

// 08で使用します。この配列を使ってください。
const subjectNames = ["HTML", "CSS", "JavaScript"];

const scoreList = Object.values(subjectScores);

scoreList.forEach((score, index) => {
  console.log(`${index + 1}. ${subjectNames[index]}：${score}点`)
})

/////////////////////////// 09 ///////////////////////////////
import { addTax } from "./utils/price.js";

const basePrice = 2000;
const taxedPrice = addTax(basePrice);

showText("q09-output", taxedPrice)
/////////////////////////// 10 ///////////////////////////////

// 10で使用します。このオブジェクトを使ってください。
const moduleUser = {
  name: "山田",
  city: "Osaka",
};

import formatUser from "./utils/user.js";

const formattedUser = formatUser(moduleUser);
showText("q10-output", formattedUser)
/////////////////////////// 11 ///////////////////////////////
const q11Button = document.querySelector('#q11-button');
const q11Target = document.querySelector('#q11-target');
const q11Status = document.querySelector('#q11-status');

q11Button.addEventListener('click', () => {
  q11Target.classList.toggle("is-active");

  if (q11Target.classList.contains("is-active")) {
    q11Status.textContent = '表示中';
    q11Button.textContent = '閉じる';
  } else {
    q11Status.textContent = '非表示';
    q11Button.textContent = '表示する';
  }
})
/////////////////////////// 12 ///////////////////////////////
const q12Image = document.querySelector('#q12-image');
const q12Caption = document.querySelector('#q12-caption');
const q12CatButton = document.querySelector('#q12-cat-button');
const q12DogButton = document.querySelector('#q12-dog-button');

q12CatButton.addEventListener('click', () => {
  q12Image.src = './images/cat.jpg';
  q12Image.alt = '猫の写真';
  q12Caption.textContent = '猫';
})

q12DogButton.addEventListener('click', () => {
  q12Image.src = './images/dog.jpg';
  q12Image.alt = '犬の写真';
  q12Caption.textContent = '犬';
})

/////////////////////////// 13 ///////////////////////////////
const q13Form = document.querySelector('#q13-form');
const q13Name = document.querySelector('#q13-name');
const q13Email = document.querySelector('#q13-email');

q13Form.addEventListener('submit', (e) => {
  e.preventDefault();
  const resultName = q13Name.value.trim();
  const resultEmail = q13Email.value.trim();

  if (!resultName.length || !resultEmail.length) {
    showText("q13-output", '入力内容を確認してください');
    return;
  }

  showText("q13-output", `${resultName}さん（${resultEmail}）`);
  return;

})
/////////////////////////// 14 ///////////////////////////////
const q14Button = document.getElementById("q14-button");
const q14User1 = document.getElementById("q14-user-1");
const q14User2 = document.getElementById("q14-user-2");
const q14User3 = document.getElementById("q14-user-3");

async function fetchUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("ユーザー情報の取得に失敗しました");
    }

    const users = await response.json();
    // ここから解答
    const result = users.slice(0, 3);

    q14User1.textContent = `${result[0].name} : ${result[0].email} : ${result[0].address.city}`
    q14User2.textContent = `${result[1].name} : ${result[1].email} : ${result[1].address.city}`
    q14User3.textContent = `${result[2].name} : ${result[2].email} : ${result[2].address.city}`

  } catch (error) {
    console.error(error);
  }
}

q14Button.addEventListener("click", fetchUsers);

/////////////////////////// 15 ///////////////////////////////
const q15Button = document.getElementById("q15-button");
const q15Post1 = document.getElementById("q15-post-1");
const q15Post2 = document.getElementById("q15-post-2");
const q15Post3 = document.getElementById("q15-post-3");

async function fetchPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error("投稿データの取得に失敗しました");
    }

    const posts = await response.json();
    // ここから解答
    const result = posts.slice(0, 3);

    q15Post1.textContent = `POST ${result[0].id}：${result[0].title}`;
    q15Post2.textContent = `POST ${result[1].id}：${result[1].title}`;
    q15Post3.textContent = `POST ${result[2].id}：${result[2].title}`;

  } catch (error) {
    console.error(error);
  }
}

q15Button.addEventListener("click", fetchPosts);