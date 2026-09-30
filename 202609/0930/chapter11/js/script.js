// ! モジュールのベースファイル
// note このファイルに他のjsファイルをインポートをして使う。ここでは変数や関数は基本的に記述しない

// review インポート文
// note 名前付きは{}の中に、,で区切って指定する
import { moduleVer, add } from "./modules01.js";

// review デフォルトエクスポートのインポート
import aoc from './modules01.js'

// note インポートの際、名前付きとデフォルトはまとめて記述ができる
// import aoc, { moduleVer, add } from './modules01';

//  review デフォルトエクスポートを使っての関数実行
console.log(moduleVer);
console.log(add(5, moduleVer));
console.log(aoc(moduleVer));

/* 新しいjsファイル(module02.js/module03.js)を作成
module02.jsには変数moduleTest(値は'モジュール化')
デフォルトの変数として、moduleDefault(値は'デフォルトエクスポート')
この二つをエクスポートする。 （注意：コンソールに表示させるメッセージは引数を使って組み立ててください）*/

/* module03.jsは関数modulemessage()を作って、引数を2つ取る。（仮引数名は自由）
その関数が実行されると、コンソールに「モジュール化は名前付きとデフォルトエクスポートがあります」と表示する。 */

// そして、変数としてmodulemsg(値は'名前付き')

// この二つの関数と変数をエクスポート文で、エクスポートしてください

/* script.jsで、上記二つのファイルから全てのエクスポートされた変数・関数をインポートして、関数を実行して、コンソールに正しくメッセージを表示させてください。
ただし、関数の引数は変数を渡すこと。 */

import { moduleTest, moduleDefault } from "./modules02.js";
import { moduleMessage, moduleMsg } from "./modules03.js";

moduleMessage(moduleTest, moduleMsg, moduleDefault);

// ! -------------------------------------------------------------- //

// review 例外処理

function gamble() {
    // idea 例外が発生するかもしれない処理をtry文に記述する
    try {
        if (Math.random() > .5) {
            alert('エラーは発生せずダイアログが開けました！');
            console.log('エラーなし');
        } else {
            alerl('エラー発生');
        }
    }

    // idea 例外が発生した際の処理をcatch文に記述する。引数を入れると自動的にErrorオブジェクトが渡される
    catch (err) {
        console.log(err);
    }

    // idea 例外が発生しても、しなくても、最後に実行される内容
    // note finallyは省略されることが多い
    finally {
        setTimeout(() => {
            gamble();
        }, 5000);
    }
};

// gamble();

// ! -------------------------------------------------------------- //