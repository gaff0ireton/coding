/* JS_drawer v1.0.0, 2022 */
/* created by Syo Motoyama, 2022 */

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggleButton');
    const drawerMenu = document.getElementById('drawerMenu');

    // 必要な要素が存在しない場合は処理を終了
    if (!toggleButton || !drawerMenu) {
        return;
    }

    // ドロワーメニューを閉じる処理
    const closeDrawer = () => {
        drawerMenu.classList.remove('open');
        toggleButton.classList.remove('close');
    };

    // トグルボタンをクリックした際の処理
    toggleButton.addEventListener('click', (event) => {
        // クリックイベントがdocumentまで伝播するのを防ぐ
        event.stopPropagation();

        drawerMenu.classList.toggle('open');
        toggleButton.classList.toggle('close');
    });

    // アンカーリンクをクリックした際にドロワーメニューを閉じる
    const anchorLinks = document.querySelectorAll('a');

    anchorLinks.forEach((anchorLink) => {
        anchorLink.addEventListener('click', closeDrawer);
    });

    // ドロワーメニュー外をクリックした際に閉じる
    document.addEventListener('click', (event) => {
        const targetElement = event.target;

        if (drawerMenu.classList.contains('open') && !drawerMenu.contains(targetElement)) {
            closeDrawer();
        }
    });
});
