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
