function responsiveMenu() {
    if (document.querySelector('.responsive-navbar').style.width == '100%')
    {
        document.querySelector('.responsive-navbar').style.width = '0';
        document.querySelector('.responsive-nav-link').style.display = 'none';
    }
    else{
        document.querySelector('.responsive-navbar').style.width = '100%';
        document.querySelector('.responsive-nav-link').style.display = 'flex';
    }
}

const title = document.querySelector('.header-title');

new Typewriter(title, {
    loop: true,
    deleteSpeed: 30
})
    .changeDelay(70)
    .typeString('Découvrez Sète à véo,')
    .deleteChars(2)
    .typeString('lo, tout en ayant du fun')
    .deleteChars(3)
    .typeString('Fun !')
    .pauseFor(200)
    .start()
    .pauseFor(10000)










