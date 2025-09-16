const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active-menu__mobile');
            toggle.classList.toggle('active-bx-close');
        })
    }
}

showMenu('bx-close', 'menu-mobile');
