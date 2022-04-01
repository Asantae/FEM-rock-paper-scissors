const rules = document.getElementById('rules');
const modalContainer = document.getElementById('modal-container');
const modalClose = document.getElementById('modal-close');

rules.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

modalClose.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});
