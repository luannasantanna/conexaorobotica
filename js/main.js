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

document.querySelectorAll('.swiper-slide h4').forEach(el => {
    const maxChars = 160; 
    if (el.innerText.length > maxChars) {
      el.innerText = el.innerText.slice(0, maxChars) + '...';
    }
  });
  