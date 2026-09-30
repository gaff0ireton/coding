// ! エクスポート用のファイル
// note 変数や関数などをここに記述する。別ファイルで扱えるようにする

// review 変数のエクスポート
// idea 名前付きエクスポート
// note 変数の宣言前にexportと記述する
export const moduleVer = 10;

//review 関数のエクスポート
// note 変数と同じで、先頭にexportと記述する
export function add(a = 1, b = 2) {
    return a + b;
}

// * 変数や関数名の頭にexportと記述することを、export宣言と呼称する。

// review export文
// note 変数・関数宣言時はエクスポートせずに、後からまとめてexport文で外部へエクスポートできるようにする
// ! export文の場合、エクスポートする際に変数・関数の名前を変えることができる。
// note 名前を変える場合は、エクスポートする変数名などの後ろに as と記述し、変更後の名前を記述する
// export { moduleVer as mv, add };

// review デフォルトエクスポート
// note 名前をつけずにエクスポートをする方法。
// todo メリットは、インポート側で名前をつけることが可能。
// ? デメリットは、1ファイルにつき1つしか使えない。

// idea export default宣言

export default function areaOfCircle(radius) {
    if (radius > 0) {
        return Math.floor(Math.PI * radius ** 1);
    }
}

// idea export default文
// note 名前付きの場合は{}カーリブラケットで囲むが、export defaultの場合は{}不要
// export default areaOfCircle;

// note 名前付きとデフォルトはまとめて、export文で記述可能
// export { areaOfCircle as default, moduleVer, add }

