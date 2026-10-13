import { PRODUCTS } from '../data/products.js';

console.log(PRODUCTS);

const productGrid = document.getElementById('productGrid');
const resultCount = document.getElementById('resultCount');
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const sortSelect = document.getElementById('sortSelect');
const resetBtn = document.getElementById('resetBtn');

// idea ---- 画面を描画する関数 ---- //


function render() {

    const keyword = searchInput.value.trim().toLowerCase();
    const categorySelector = categorySelect.value;
    const sort = sortSelect.value;

    const filtered = PRODUCTS.filter(({ name, category, id }) => {
        const matchKeyword = name.toLowerCase().includes(keyword);
        const matchCategory = categorySelector === 'all' || category === categorySelector;

        return matchKeyword && matchCategory;
    });

    const sorted = filtered.toSorted((a, b) => {
        if (sort === 'price_asc') return a.price - b.price;
        if (sort === 'price_desc') return b.price - a.price;
        return a.id - b.id;
    });

    resultCount.textContent = `全 ${sorted.length} 件`;

    if (!sorted.length) {
        productGrid.innerHTML = `<p class="empty_message">条件に一致する商品が見つかりませんでした</p>`
    } else {
        productGrid.innerHTML = sorted.map(({ name, category, price, image }) =>
            `
                <div class="card">
                    <div class="card_image_wrap">
                        <img src="${image}" alt=${name} class="card_image">
                    </div>
                    <div class="card_content">
                        <span class="category">${category}</span>
                        <h3>${name}</h3>
                        <p class="price">¥${price}</p>
                    </div>
                </div>
                `
        ).join('');
    }
}


render();

searchInput.addEventListener('input', () => {
    render();
});

categorySelect.addEventListener('change', () => {
    render()
})

sortSelect.addEventListener('change', () => {
    render();
})

resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    categorySelect.value = 'all';
    sortSelect.value = 'id_asc';
    render();
})

