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

/*Show navbar after hovering jumbotron*/
document.addEventListener("DOMContentLoaded", function() {
    var jumbotron = document.querySelector(".jumbotron");
    var navbar = document.querySelector(".navbar");

    jumbotron.addEventListener("mouseenter", function() {
        navbar.style.opacity = "1";
    });

    jumbotron.addEventListener("mouseleave", function() {
        if (!navbar.classList.contains("hovered")) {
            navbar.style.opacity = "";
        }
    });

    navbar.addEventListener("mouseenter", function() {
        navbar.classList.add("hovered");
        navbar.style.opacity = "1";
    });

    navbar.addEventListener("mouseleave", function() {
        navbar.classList.remove("hovered");
        if (!jumbotron.matches(":hover")) {
            navbar.style.opacity = "";
        }
    });
});

/*GoBackToTop*/
// 取得回到頂部按鈕元素
var backToTopButton = document.getElementById('page-top');

// 監聽頁面滾動事件
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // 如果頁面滾動超過 20px，則顯示回到頂部按鈕
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}