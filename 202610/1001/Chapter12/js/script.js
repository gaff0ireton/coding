const todos = document.querySelectorAll('.todo');
console.log(todos);


todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo.textContent}`);
    console.log(todo.textContent.length);

})

for (const todo of todos) {
    console.log(todo.textContent);
}

const bannerBox = document.getElementById('list');
console.log(bannerBox);

// review 要素がなかった時の処理
const paragraph = document.querySelector('#text');
console.log(paragraph);

if (!paragraph) {
    document.querySelector('#container').insertAdjacentHTML(
        'beforeend',
        '<p>見つからなかったワン</p>'
    )
} else {
    document.querySelector('#container').insertAdjacentHTML(
        'beforeend',
        '<p>見つけたワン</p>'
    )
}

// ! イベントが発生する要素、もしくはその要素が格納されている変数名.addEventListener('イベント名',コールバック関数,{オブション(省略可能)});

const box01 = document.querySelector('#box');
const box01_span = document.querySelector('#box span');

// note イベント名(第一引数)は、イベントとして決まっている名前がある
// note 第二引数のコールバック関数に引数を渡すと、Eventオブジェクトが渡される。
box01.addEventListener('click', (e) => {
    box01.classList.toggle('js-click');
    console.log(`${e.type} イベント発生`);
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(`client position: (${e.clientX}, ${e.clientY})`);
    console.log(`offset position: (${e.offsetX}, ${e.offsetY})`);

    console.log(Object.entries(e));
})

// review キーボードイベント
document.addEventListener('keydown', (e) => {
    const key = e.key;
    console.log(key);
    box01_span.textContent += key;

})

// review イベントが発生した要素に処理を行う

document.querySelector('#clickable').addEventListener('click', (e) => {
    const me = e.currentTarget;
    me.src = 'res/dom-target-arrow.png';

    setTimeout(() => {
        me.src = 'res/dom-target-default.png';
    }, 1000);
})

// review デフォルト動作をキャンセルする
document.getElementById('show-alert').addEventListener('click', (e) => {
    e.preventDefault();
    alert('デフォルト動作をキャンセルして、ダイアログを表示したワン！');
})

// review 一度だけクリックできるいいねボタン
const addLike = () => {
    const numElm = document.querySelector('#number');
    const currentLike = Number(numElm.textContent);
    numElm.textContent = currentLike + 1;
}

const clickLike = (e) => {
    e.currentTarget.children[0].src = 'res/like-off.png';
    addLike();
    e.currentTarget.removeEventListener('click', clickLike);
};

document.querySelector('#like').addEventListener('click', clickLike);

const image = document.querySelector('.like-on');
console.log(image.src);
console.log(image.alt);
console.log(image.className);

const changePhoto = (path, alt) => {
    document.querySelector('#photo').src = path;
    document.querySelector('#photo').alt = alt;
}

document.querySelector('#btn1').addEventListener('click', () => {
    changePhoto('res/square-1.jpg', 'シュークリーム');
});

document.querySelector('#btn2').addEventListener('click', () => {
    changePhoto('res/square-2.jpg', 'クロワッサン');
});
// box01.addEventListener('mouseenter', () => {
//     box01.classList.add('js-hover');
//     console.log('hover');

// })

// box01.addEventListener('mouseleave', () => {
//     box01.classList.remove('js-hover');
//     console.log('leave');

// })

// ! ---------------- 授業内容とは関係がない ---------------- //

const response = await fetch("https://dog.ceo/api/breeds/image/random");
const data = await response.json();

console.log(data);

const img = document.querySelector('.dog-img img');

const btn = document.querySelector('.dog-btn');

img.src = data.message;

btn.addEventListener('click', async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    img.src = data.message;

});

// ! ---------------- 授業内容とは関係がない ---------------- //