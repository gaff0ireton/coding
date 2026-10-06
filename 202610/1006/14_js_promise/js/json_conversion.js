const productData = {
    name: 'ノートパソコン',
    price: '98,000',
    inStock: true,
};

// idea ----- JavaScriptオブジェクトを、JSON文字列に変換する ----- //
const productJson = JSON.stringify(productData, null, 4);
console.log(productJson);
console.log(typeof productJson);

document.querySelector('#placeholder').textContent = productJson;

// idea ----- JSON文字列を、JavaScriptオブジェクトに変換する ----- //
const productObj = JSON.parse(productJson);
console.log(productObj);
console.log(typeof productObj);

// JSONの書式が間違っていた時の処理
const invalidJson = `{ "name": "マウス", }`; // * 間違った書式のJSON文字列（カンマ(,)が不要）

try {
    const parsedJson = JSON.parse(invalidJson);
    console.log(parsedJson);
} catch (err) {

    console.log(err.message);
}

const parse = async (json) => {
    try {
        const parsedJson = JSON.parse(json);
        console.log(parsedJson);
    } catch (err) {
        console.log(err.message);
    }
}

parse(productJson);


