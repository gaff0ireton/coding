// ===================================================
// 配列メソッド復習
// map() / join('') / filter() / includes() / sort() / innerHTML
// ===================================================

const products = [
  { id: 1, name: 'ボールペン', category: '文房具', price: 150, stock: true },
  { id: 2, name: 'ノート', category: '文房具', price: 200, stock: true },
  { id: 3, name: 'マグカップ', category: '雑貨', price: 1200, stock: false },
  { id: 4, name: '万年筆', category: '文房具', price: 3500, stock: true },
  { id: 5, name: 'トートバッグ', category: '雑貨', price: 1800, stock: true },
  { id: 6, name: 'サインペン', category: '文房具', price: 120, stock: false },
  { id: 7, name: 'ペンケース', category: '文房具', price: 980, stock: true },
];

// ---------------------------------------------------
// Q1. map()
// 商品名だけの配列を作って console.log で表示しよう
// 変数名: 商品名の配列 → names
// 期待する結果: ['ボールペン', 'ノート', 'マグカップ', ...]
// ---------------------------------------------------
// ← ここに書く
const result_01 = products.map((product) => product.name);
console.log(result_01);

// ---------------------------------------------------
// Q2. map() + join('')
// 各商品を `<li>商品名：〇〇円</li>` の文字列にし、
// join('') で1つの文字列につなげよう
// 変数名: つなげた文字列 → listHtml
// ヒント: join('') を付けないとどうなる？ join(',') との違いは？
// ---------------------------------------------------
// ← ここに書く
const listHtml = products.map((product) => `<li>${product.name}：${product.price}円</li>`).join('');
console.log(listHtml);

// ---------------------------------------------------
// Q3. innerHTML
// Q2 で作った listHtml を id="all_list" の ul に表示しよう
// 変数名: 取得した ul 要素 → allList
// ---------------------------------------------------
// ← ここに書く
document.querySelector('#all_list').innerHTML = listHtml;

// ---------------------------------------------------
// Q4. filter()
// 価格が 1000円以上 の商品だけを取り出し、id="expensive_list" に表示しよう
// 変数名: 取得した ul 要素 → expensiveList / 取り出した配列 → expensiveProducts
// ---------------------------------------------------
// ← ここに書く
const expensiveList = document.querySelector('#expensive_list');
const expensiveProducts = products.filter((product) => product.price >= 1000);

// expensiveProducts.forEach((product) => {
//   const li = document.createElement('li');
//   li.textContent = `${product.name}：${product.price}円`;
//   expensiveList.append(li);
// });

expensiveList.innerHTML = expensiveProducts.map((product) => `<li>${product.name}：${product.price}円</li>`).join('');

// ---------------------------------------------------
// Q5. includes()
// 名前に「ペン」を含む商品だけを取り出し、id="search_list" に表示しよう
// 変数名: 取得した ul 要素 → searchList / 検索語 → keyword / 取り出した配列 → keywordProducts
// ヒント: 文字列.includes('ペン') は true / false を返す
// おまけ: 配列の includes も試そう → [1, 2, 3].includes(2)
// ---------------------------------------------------
// ← ここに書く
const searchList = document.querySelector('#search_list');
const keyword = 'ペン';
const keywordProducts = products.filter((product) => product.name.includes(keyword));

// keywordProducts.forEach((product) => {
//   const li = document.createElement('li');
//   li.textContent = `${product.name}：${product.price}円`;
//   searchList.append(li);
// });

searchList.innerHTML = keywordProducts.map((product) => `<li>${product.name}：${product.price}円</li>`).join('');

// ---------------------------------------------------
// Q6. sort()
// 価格が 安い順（昇順） に並べ替えて、id="sorted_list" に表示しよう
// 変数名: 取得した ul 要素 → sortedList / 並べ替えた配列 → sortedProducts
// 注意: sort() は元の配列を書き換える！ [...products] でコピーしてから並べ替えよう
// ヒント: (a, b) => a.price - b.price
// ---------------------------------------------------
// ← ここに書く
const sortedList = document.querySelector('#sorted_list');
const sortedProducts = [...products].sort((a, b) => a.price - b.price);

// sortedProducts.forEach((product) => {
//   const li = document.createElement('li');
//   li.textContent = `${product.name}：${product.price}円`;
//   sortedList.append(li);
// });

sortedList.innerHTML = sortedProducts.map((product) => `<li>${product.name}：${product.price}円</li>`).join('');


// ---------------------------------------------------
// Q7. まとめ
// 「在庫あり(stock が true)」かつ「カテゴリが文房具」の商品を
// 価格の 高い順 に並べ、id="final_list" に表示しよう
// 変数名: 取得した ul 要素 → finalList
//         取り出した配列 → stationeryProducts / 並べ替えた配列 → sortedStationeryProducts
// ヒント: 手順1 filter で取り出す → 手順2 sort で並べる → 手順3 map + join で表示
//         「かつ」は &&
// ---------------------------------------------------
// ← ここに書く

const finalList = document.querySelector('#final_list');
const stationeryProducts = products.filter((product) => product.stock && product.category === '文房具');
const sortedStationeryProducts = [...stationeryProducts].sort((a, b) => b.price - a.price);

// sortedStationeryProducts.forEach((product) => {
//   const li = document.createElement('li');
//   li.textContent = `${product.name}：${product.price}円`;
//   finalList.append(li);
// });

finalList.innerHTML = sortedStationeryProducts.map((product) => `<li>${product.name}：${product.price}円</li>`).join('');

// const result = products.filter((product) => product.stock);

// const result = products.map((product) => product.name);

// const result = products.filter((product) => product.stock && product.price <= 1000)
//   .map((product) => ({ // ! 分割代入することも可能 ({name,price}=>({name,price}))
//     name: product.name,
//     price: product.price
//   }))

// function getProductById(products, id) {
//   const result = products.find((product) => product.id === id) ?? 'null'; // ! 文字列になっている
//   return result;
// }

// console.log(getProductById(products, 2));
// console.log(getProductById(products, 99));

// const result = products.toSorted((a, b) => a.price - b.price);

// const result = products.reduce((acc, current) => {
//   if (current.stock) {
//     return acc + current.price;
//   }

//   return acc;
// }, 0);

console.log(result);
