const panel = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
       this.classList.toggle('open-active');
    }
}

panel.forEach(pan => {
    pan.addEventListener('click', toggleOpen);
    pan.addEventListener('transitionend', toggleActive);
})