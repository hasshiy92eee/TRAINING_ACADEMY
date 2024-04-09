'use strict';

// menu-imgがクリックされた時に全て表示させる
document.getElementById('menu-img').addEventListener('click', function () {
    let zoo = document.querySelectorAll('.animal');
    zoo.forEach(function (zoo) {
        zoo.style.visibility = 'visible';
    });
});

// explain-btnがクリックされた時に説明文を表示する
const eBtn = document.querySelector('.explain-btn');
const eArea = document.querySelector('.explain-area');

eBtn.addEventListener('click', function () {
    eArea.style.display = 'block';
});



// 修正時刻: Sat 2024/02/03 10:00:54
