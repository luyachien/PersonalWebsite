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