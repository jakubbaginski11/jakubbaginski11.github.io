function changeNavbarToWhite() {
    var searchIcon = document.getElementById("search-icon");
    let navbar = document.querySelector('.navbar-container');
    let cartCounter = document.querySelector('.cart-counter');
    searchIcon.src = "icons/search-icon.svg";
    navbar.classList.remove('navbar-default');
    cartCounter.classList.remove('cart-counter-default');
}

function changeNavbarToTransparent() {
    var searchIcon = document.getElementById("search-icon");
    let navbar = document.querySelector('.navbar-container');
    let cartCounter = document.querySelector('.cart-counter');
    searchIcon.src = "icons/search-icon-white.svg";
    navbar.classList.add('navbar-default');
    cartCounter.classList.add('cart-counter-default');
}

function hideNavbarLogo()
    {
        document.getElementsByClassName('logo-button')[0].style.opacity = "0";
    }

function showNavbarLogo()
    {
        document.getElementsByClassName('logo-button')[0].style.opacity = "1";
    }

function showNavbar()
{

    let navbar = document.querySelector('.navbar-container');

    navbar.style.top = '0';
}


var lastScrollTop;
navbar = document.querySelector('.navbar-container');

window.addEventListener('scroll', function () {
    
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var searchActive = document.getElementById('search-field').style.display

    if (scrollTop > lastScrollTop && searchActive === "none") {
        navbar.style.top = '-80px'; 
    }
    else {
        showNavbar();
    }

    if (scrollTop == 0 && searchActive === "none"){
        // changeNavbarToTransparent();
        // hideNavbarLogo();
        setTimeout(function()
        {
            var search = document.getElementById('search-field');
            changeNavbarToTransparent();
                hideNavbarLogo();

        }, 200);
    }
    if (scrollTop > 0) {
        setTimeout(function()
        {
            changeNavbarToWhite();
            showNavbarLogo();
        }, 200);
    }
    
    lastScrollTop = scrollTop;
});


