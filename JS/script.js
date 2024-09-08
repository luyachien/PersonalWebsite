/*LoadingPage*/
document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.classList.add('isLoad');

    setTimeout(function() {
        document.querySelector('.navbar').classList.add('show');
    }, 2000);
});

/*HamburgerToggle*/
document.getElementById('hamburgerToggle').addEventListener('click', function() {
    this.classList.toggle('open');
    var navbarToggler = document.getElementById('navbarTogglerDemo02');
    if (navbarToggler.classList.contains('collapse')) {
        navbarToggler.classList.remove('collapse');
        navbarToggler.classList.add('show');
    } else {
        navbarToggler.classList.remove('show');
        navbarToggler.classList.add('collapse');
    }
});

/*GoBackToTop*/
// 取得回到頂部按鈕元素
var backToTopButton = document.getElementById('page-top');

// 監聽頁面滾動事件
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // 如果頁面滾動超過 100px，則顯示回到頂部按鈕
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}