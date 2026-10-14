import { addTax } from "./utils/price_answer.js";
import formatUser from "./utils/user_answer.js";

// 問題文でshowText()の使用を指定している場合は、この関数を使います。
const showText = (id, value) => {
  document.getElementById(id).textContent = value;
};

/////////////////////////// 01 ///////////////////////////////

const studentName = "山田";
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

showText("q03-output", total);


/////////////////////////// 04 ///////////////////////////////

function checkDiscount(age = 0) {
  if (age <= 12 || age >= 65) {
    return "割引対象です";
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
const message = `${learnerName}さんは${subject}を学習しています`;

showText("q05-output", message);


/////////////////////////// 06 ///////////////////////////////

// 06で使用します。この配列を使ってください。
const skills = ["HTML", "CSS", "不要1", "不要2", "JavaScript", "Git"];

const usefulSkills = skills.toSpliced(2, 2);
showText("q06-output", usefulSkills);


/////////////////////////// 07 ///////////////////////////////

// 07で使用します。この配列を使ってください。
const names = ["佐藤", "田中", "鈴木"];

const displayNames = names.map((name) => {
  return `${name}さん`;
});

showText("q07-output", displayNames);


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
  console.log(`${index + 1}. ${subjectNames[index]}：${score}点`);
});


/////////////////////////// 09 ///////////////////////////////

/*
  本番の解答では js/utils/price.js に次のコードを記述します。

  export function addTax(price, taxRate = 0.1) {
    return Math.round(price * (1 + taxRate));
  }

  main.js では次のように名前付きインポートします。

  import { addTax } from "./utils/price.js";

  この解答ファイルでは受講者用の price.js を空のまま残すため、
  price_answer.js から同じ関数を読み込んでいます。
*/

const basePrice = 2000;
const taxedPrice = addTax(basePrice);

showText("q09-output", taxedPrice);


/////////////////////////// 10 ///////////////////////////////

// 10で使用します。このオブジェクトを使ってください。
const moduleUser = {
  name: "山田",
  city: "Osaka",
};

/*
  本番の解答では js/utils/user.js に次のコードを記述します。

  function formatUser(user) {
    return `${user.name}（${user.city}）`;
  }

  export default formatUser;

  main.js では次のようにデフォルトインポートします。

  import formatUser from "./utils/user.js";

  この解答ファイルでは受講者用の user.js を空のまま残すため、
  user_answer.js から同じ関数を読み込んでいます。
*/

const formattedUser = formatUser(moduleUser);
showText("q10-output", formattedUser);


/////////////////////////// 11 ///////////////////////////////

const q11Button = document.getElementById("q11-button");
const q11Target = document.getElementById("q11-target");
const q11Status = document.getElementById("q11-status");

q11Button.addEventListener("click", () => {
  q11Target.classList.toggle("is-active");

  if (q11Target.classList.contains("is-active")) {
    q11Status.textContent = "表示中";
    q11Button.textContent = "閉じる";
  } else {
    q11Status.textContent = "非表示";
    q11Button.textContent = "表示する";
  }
});


/////////////////////////// 12 ///////////////////////////////

const q12Image = document.getElementById("q12-image");
const q12Caption = document.getElementById("q12-caption");
const q12CatButton = document.getElementById("q12-cat-button");
const q12DogButton = document.getElementById("q12-dog-button");

q12CatButton.addEventListener("click", () => {
  q12Image.src = "./images/cat.jpg";
  q12Image.alt = "猫の写真";
  q12Caption.textContent = "猫";
});

q12DogButton.addEventListener("click", () => {
  q12Image.src = "./images/dog.jpg";
  q12Image.alt = "犬の写真";
  q12Caption.textContent = "犬";
});


/////////////////////////// 13 ///////////////////////////////

const q13Form = document.getElementById("q13-form");
const q13Name = document.getElementById("q13-name");
const q13Email = document.getElementById("q13-email");
const q13Output = document.getElementById("q13-output");

q13Form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = q13Name.value.trim();
  const email = q13Email.value.trim();

  if (name === "" || email === "") {
    q13Output.textContent = "入力内容を確認してください";
  } else {
    q13Output.textContent = `${name}さん（${email}）`;
  }
});


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

    q14User1.textContent = `${users[0].name} / ${users[0].email} / ${users[0].address.city}`;
    q14User2.textContent = `${users[1].name} / ${users[1].email} / ${users[1].address.city}`;
    q14User3.textContent = `${users[2].name} / ${users[2].email} / ${users[2].address.city}`;
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

    const userPosts = posts.filter((post) => {
      return post.userId === 3;
    });

    q15Post1.textContent = `POST ${userPosts[0].id}：${userPosts[0].title}`;
    q15Post2.textContent = `POST ${userPosts[1].id}：${userPosts[1].title}`;
    q15Post3.textContent = `POST ${userPosts[2].id}：${userPosts[2].title}`;
  } catch (error) {
    console.error(error);
  }
}

q15Button.addEventListener("click", fetchPosts);
