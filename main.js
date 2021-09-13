const btnOpen = document.getElementById('btn-open');
const modal = documment.getElementById('wrapper-modal');

const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
});

const classModal = () => {
    modal.classList.remove('active');
};

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);