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
// ���o�^�쳻�����s����
var backToTopButton = document.getElementById('page-top');

// ��ť�����u�ʨƥ�
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // �p�G�����u�ʶW�L 20px�A�h��ܦ^�쳻�����s
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}