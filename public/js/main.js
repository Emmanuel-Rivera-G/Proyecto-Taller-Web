document.querySelector('#btn-menu').addEventListener('click', function () {
    const menu = document.querySelector('menu');
    if (menu.hasAttribute('hidden')) {
        menu.removeAttribute('hidden');
    } else {
        menu.setAttribute('hidden', '');
    }
});