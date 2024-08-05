/*LoadingPage*/
document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.classList.add('isLoad');

    setTimeout(function() {
        document.querySelector('.navbar').classList.add('show');
    }, 2000);

    setTimeout(function() {
        document.querySelector('.GoToSecond').classList.add('show');
    }, 3000);
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

/*Show navbar after hovering banner*/
document.addEventListener("DOMContentLoaded", function() {
    var banner = document.querySelector(".banner");
    var navbar = document.querySelector(".navbar");

    banner.addEventListener("mouseenter", function() {
        navbar.style.opacity = "1";
    });

    banner.addEventListener("mouseleave", function() {
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
        if (!banner.matches(":hover")) {
            navbar.style.opacity = "";
        }
    });
});

/*往下滑20px時，導覽列透明度為1(顯現)*/
document.addEventListener('DOMContentLoaded', function() {
    // Loading page transition
    document.documentElement.classList.add('isLoad');

    setTimeout(function() {
        document.querySelector('.navbar').classList.add('show');
    }, 2000);

    // Handle navbar visibility on scroll
    const navbar = document.querySelector('.navbar');
    const banner = document.querySelector('.banner');
    let hoverTimer;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Handle mouse hover on banner
    banner.addEventListener('mouseenter', function() {
        hoverTimer = setTimeout(function() {
            navbar.style.opacity = '0';
        }, 3000); // 3000 milliseconds = 3 seconds
    });

    // Handle mouse leave from banner
    banner.addEventListener('mouseleave', function() {
        clearTimeout(hoverTimer);
        navbar.style.opacity = ''; // Reset the opacity
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