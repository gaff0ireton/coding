/* ==================================
idea 12-4 HTMLを書き換える ①属性を操作する
================================== */

// review 12-4-1 属性値を取り出す
const image01 = document.querySelector('#photo01');

console.log(image01);
console.log(Object.entries({ image01 }));

// idea ----------- ドット記法 ----------- //
console.log(image01.alt);
console.log(image01.src);
console.log(image01.id);
// console.log(image01.dataset);

// idea ----------- ブラケット記法 ----------- //
console.log(image01['alt']);
console.log(image01['src']);
console.log(image01['id']);
// console.log(image01['dataset']);

// review 12-4-2 属性値を書き換える

const changePhoto = (path, alt) => {
    image01.src = path;
    image01.alt = alt;
};

document.querySelector('#btn_sweets01').addEventListener('click', () => {
    changePhoto('images/square-1.jpg', 'シュークリーム');
});

document.querySelector('#btn_sweets02').addEventListener('click', () => {
    changePhoto('images/square-2.jpg', 'クロワッサン');
});

// review 12-4-3 プロパティやメソッドを利用して属性を操作する
console.log(image01.getAttribute('src')); // * images/square-1.jpg
console.log(image01.hasAttribute('src')); // * true

const attributes = image01.getAttributeNames(); // * ['src' , 'alt' , 'id']
console.log(attributes);

for (const attr of attributes) {
    const value = image01.getAttribute(attr);
    console.log(`${attr} = ${value}`);
}

const link = document.createElement('a');
link.textContent = 'Example.com';
link.setAttribute('href', 'https//:example.com');
link.setAttribute('target', '_blank');
link.setAttribute('rel', 'nofollow');

console.log(link);

document.querySelector('#agree').addEventListener('click', (e) => {
    const t = e.currentTarget;
    t.disabled = true; // * t.setAttribute('disabled', '')と同義;
})

document.querySelector('#agreement').addEventListener('scroll', (e) => {
    const t = e.currentTarget;
    if (t.clientHeight + t.scrollTop >= t.scrollHeight) {
        document.querySelector('#approve').removeAttribute('disabled');
        console.log(t.clientHeight + t.scrollTop);
        console.log(t.scrollHeight);

    }
})

// review 12-4-4 class属性を操作する
const importantText = document.querySelector('.important');
console.log(importantText.classList);

for (const txt of importantText.classList) {
    console.log(txt);
}

document.querySelector('.hamburger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('open');
})




// review 12-4-5 data-*属性を利用してHTMLにデータを残す


/* ==================================
idea 12-5 HTMLを書き換える ②テキストコンテンツを書き換える
================================== */


// review 12-5-1 テキストコンテンツを挿入する

const price = document.querySelector('#price');

price.insertAdjacentText('beforeend', '(税込)')


/* ==================================
idea 12-6 HTMLを書き換える③ 要素を書き換える・挿入する・削除する
================================== */

// review 12-6-1 新しい要素を特定の場所に挿入する

const messages = [
    {
        from: 'tanaka@example.com',
        date: '2019/08/16T11:15:22',
        message: 'お世話になっております。進行中のプロジェクトの件で...',
    },
    {
        from: 'mailnews@example.jp',
        date: '2019/08/15T21:38:44',
        message: '【最新記事】新規出店が進む中古家具市場、なにが起こっている？...',
    },
];

for (const msg of messages) {
    const row = `<tr><td>${msg.from}</td><td>${msg.date}</td><td>${msg.message}</td></tr>`;
    document.querySelector('#table_list').insertAdjacentHTML('beforeend', row);
}

// review 12-6-2 要素を削除する
// document.querySelector('#todo_today').remove();
// document.querySelector('#todo_today').replaceChildren();
document.querySelector('#todo_today').innerHTML = '';

// review 12-6-3 子要素を丸ごと書き換える
const product = document.querySelector('#product')
setTimeout(() => {
    product.innerHTML = `
    <dl>
        <dt>商品名</dt>
        <dd>コーヒー豆</dd>
        <dt>価格</dt>
        <dd>1,200円</dd>
    </dl>
    `;
}, 3000);

// review 12-6-4 Elementオブジェクトを作成する
const newItem = document.createElement('li');
newItem.textContent = '商品C';
console.log(newItem);

const itemList = document.querySelector('#item_list');

itemList.append(newItem);

// review 12-6-5 既存の要素を移動する
document.querySelector('#move').addEventListener('click', () => {
    const image = document.querySelector('#image');
    document.querySelector('#box2').insertAdjacentElement('beforeend', image);
})

/* ==================================
idea 12-7 その他のDOM操作
================================== */

// review 12-7-1 ページトップにスクロールする
// console.log(document.getElementById('gotop'));

document.getElementById('gotop').addEventListener('click', () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})
