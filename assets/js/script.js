// Add is-sticky to .header__logo when it reaches the top
function checkHeaderSticky() {
    const headerLogo = document.querySelector('.header__logo');
    if (!headerLogo) return;
    const stickyTop = parseInt(getComputedStyle(headerLogo).top, 10) || 0;
    if (headerLogo.getBoundingClientRect().top <= stickyTop) {
        document.body.classList.add('sticky-header');
    } else {
        document.body.classList.remove('sticky-header');
    }
}

window.addEventListener('scroll', checkHeaderSticky);
window.addEventListener('resize', checkHeaderSticky);
window.addEventListener('load', checkHeaderSticky);


function equalHeight(groups) {
    groups.forEach(group => {
        const elements = Array.isArray(group) ? group : Array.from(group);
        let tallest = 0;
        elements.forEach(el => {
            el.style.height = 'auto'; // reset before measuring
            const elHeight = el.offsetHeight;
            if (elHeight > tallest) {
                tallest = elHeight;
            }
        });
        elements.forEach(el => {
            el.style.height = tallest + 'px';
        });
    });
}

window.addEventListener('load', () => {
    equalHeight([
        document.querySelectorAll('.card__description'),
        document.querySelectorAll('.features')
    ]);
});

window.addEventListener('resize', () => {
    equalHeight([
        document.querySelectorAll('.card__description'),
        document.querySelectorAll('.features')
    ]);
});


