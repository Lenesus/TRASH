const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const changeClass = el => {
    for (let i = 0; i < tabbs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');


}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
})