// idea 1. 監視の設定（オプション）を定義する
const options = {
    root: null, // * 監視の基準にする要素。nullであれば、ビューポートが基準
    rootMargin: '0px', // * rootの範囲を広げたり、狭めたりするマージン
    threshold: .5, // * 要素が20％見えたタイミングで発火する
}

// idea 2. 交差状態は変化した時に実行するIntersectionObserverを作成する

const observer = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anim');
            observe.unobserve(entry.target);
        }
    })
}, options);

// idea 3. 監視したい要素全てを取得し、observerに登録する
document.querySelectorAll('.io_box').forEach((v) => {
    observer.observe(v);
})