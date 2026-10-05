// review ホーム要素の小要素を全部表示

const loginForm = document.forms['login'];
console.log(loginForm.elements);

// review テキストフィールドの値を取得・表示

const getTextValue = (selecter) => {
    return document.querySelector(selecter).value;
};

document.querySelector('#btn-text').addEventListener('click', (e) => {
    const val = getTextValue('[name="text"]');
    console.log(val);
    document.querySelector('#result').textContent = val;

})

// review インプットイベントを用いて、テキストの値で、output要素のコンテンツを書き換える

document.querySelector('[name="text"]').addEventListener('input', (e) => {
    const t = e.currentTarget;
    document.querySelector('#result').textContent = t.value;

})

// review テキストエリアの値を取得・表示

const getTextareaValue = (selecter) => {
    return document.querySelector(selecter).value;
};

document.querySelector('#btn-textarea').addEventListener('click', (e) => {
    const val = getTextareaValue('[name="textarea"]');
    console.log(val);

})

// review 数値フィールドを取得・変換・表示
// note HTMLのフォームの値をvalueで取得した場合、全て文字列型になる。そのため、取得したvalueの値をnumber()オブジェクトを使って、数値に変換する必要がある。

const getNumberValue = (selecter) => {
    return Number(document.querySelector(selecter).value);
};

document.querySelector('#btn-number').addEventListener('click', (e) => {
    const val = getNumberValue('[name="number"]');
    console.log(val);

})

// review レンジフィールドを取得・変換・表示

const getRangeValue = (selecter) => {
    return Number(document.querySelector(selecter).value);
};

document.querySelector('#btn-range').addEventListener('click', (e) => {
    const val = getRangeValue('[name="range"]');
    console.log(val);
    document.querySelector('#val').textContent = val;
})

// review インプットイベントを用いて、レンジフィールドの値で、output要素のコンテンツを書き換える
const updateValue = (value) => {
    document.querySelector('#val').textContent = value;
}

const rangeField = document.querySelector('[name="range"]');

rangeField.addEventListener('input', (e) => {
    updateValue(e.currentTarget.value);
})

// * webページが表示された際に初期値を表示するために、関数を即時実行している
updateValue(rangeField.value);

// review 日付入力フィールドを取得・変換・表示

const getDateValue = (selecter) => {
    return new Date(document.querySelector(selecter).value);
};

document.querySelector('#btn-date').addEventListener('click', (e) => {
    const val = getDateValue('[name="date"]');
    console.log(val);
})

// review カラーフィールドを取得・表示
const getColorValue = (selecter) => {
    return document.querySelector(selecter).value;
};

document.querySelector('#btn-color').addEventListener('click', (e) => {
    const val = getColorValue('[name="color"]');
    console.log(val);
})

// review changeイベントを用いて、カレンダーの日付変更の度に、日付データをコンソールに表示させる

document.querySelector('[name="date"]').addEventListener('change', (e) => {
    console.log(new Date(e.currentTarget.value));

})

// review ラジオボタンの値を取得
const getRadioValue = (formId, name) => {
    const form = document.forms[formId];
    const radios = form.elements[name];
    return radios.value;
}

document.querySelector('#btn-payment').addEventListener('click', (e) => {
    e.preventDefault();
    const radioValue = getRadioValue('login', 'payment');
    console.log(radioValue);

})

// review チェックボックスの値を取得
// idea 単一のチェックボックスの取得・表示
// note チェックボックスの値は、checkedプロパティの真偽値の値をよく使う。
const getCheckSingleValue = (selecter) => {
    const checkSingle = document.querySelector(selecter);
    // * checkedプロパティにはチェックボックスがONかOFFかが、真偽値で入っている。valueはHTMLのvalue属性。
    return [checkSingle.checked, checkSingle.value];
}

// idea チェックボックスにイベント設定

document.querySelector('[name="check-single"]').addEventListener('change', (e) => {
    const t = e.currentTarget;
    const btn = document.querySelector('#btn-checkbox-single');

    if (t.checked) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
})

document.querySelector('#btn-checkbox-single').addEventListener('click', () => {
    const checked = getCheckSingleValue('[name="check-single"]');
    console.log(checked);

})

// idea 複数のチェックボックスの取得・表示

const getCheckMultiValue = (selecter) => {
    const arr = [];
    const checkboxes = document.querySelectorAll(selecter + ':checked');
    checkboxes.forEach((v, i) => {
        arr.push([i + 1, v.value, v]);
    })
    return arr;
}

document.querySelector('#btn-checkbox-multi').addEventListener('click', () => {
    const checked = getCheckMultiValue('[name="checkbox-multi"]');
    console.log(checked);

})


document.querySelectorAll('[name="checkbox-multi"]').forEach((v) => {
    v.addEventListener('click', (e) => {
        const checked = getCheckMultiValue('[name="checkbox-multi"]');
        console.log(checked);

    })
})

// review ファイルフィールドからの取得・表示
// idea テキストファイルの情報を取得
document.querySelector('#textfile').addEventListener('change', (e) => {
    const file = e.currentTarget.files[0];
    const fileName = file.name;
    const fileSize = Math.round(file.size / 1024);
    document.querySelector('#file').textContent = `${fileName} (${fileSize}KB)`
})

// idea 画像ファイルの情報を取得
document.querySelector('#image-upload').addEventListener('change', (e) => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        const img = document.querySelector('#content > img');
        img.src = reader.result;
    });
    reader.readAsDataURL(file);
})

// review contenteditable属性のコンテンツを取得
const getContentEditableText = (selecter) => {
    const elm = document.querySelector(selecter);
    return elm.textContent;
}

document.querySelector('#btn-contenteditable').addEventListener('click', async () => {
    const text = getContentEditableText('#para');
    console.log(text);
    await navigator.clipboard.writeText(text);

})

// review 送信ボタン（type="submit"）を押下した時のイベント設定
document.forms['login'].addEventListener('submit', () => {
    const userName = document.querySelector('[name = "username"]').value;
    alert(`${userName}としてログインします`);
})

// ! ------------------------------------------------------------------------ //

const getValue = (selecter) => {
    const input = document.querySelector(selecter).value;
    const value = input.value.trim();

    // if (value !== '' && !Number.isNaN(Number(value))) {

    // }
};

const formClick = (area, btn) => {
    document.querySelector(btn).addEventListener('click', () => {
        const val = getTextValue(area);
        console.log(val);
    })
}

// formClick('[name="text"]', '#btn-text');
// formClick('[name="textarea"]', '#btn-textarea');
// formClick('[name="color"]', '#btn-color');

