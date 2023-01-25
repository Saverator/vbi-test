let blocks = [1, 2, 3, 4];

const blockContainer = document.querySelector('#blocks');
const checkbox = document.querySelector('#check');
const addButton = document.querySelector('#add-button');

const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal__content');
const modalCloseBtn = document.querySelector('.modal__close-btn');
const modalBackdrop = document.querySelector('.modal-backdrop');

checkbox.addEventListener('change', () => {
    checkbox.checked ? blockContainer.classList.add('block_checked')
    : blockContainer.classList.remove('block_checked');
});

addButton.addEventListener('click', () => {
    blocks.push(blocks.length + 1);
    renderBlocks();
});

blockContainer.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

function openModal(event) {
    let data = event.target.dataset.name;
    if (!data) return;

    modal.classList.add('open');
    modalContent.innerHTML = `<h2>Блок ${data}</h2>`;
}

function closeModal() {
    modal.classList.remove('open');
}

function renderBlocks() {
    let html = '';
    for (let i = 0; i < blocks.length; i++) {
        html += `<div class="blocks__block" data-name="${blocks[i]}">
            <div class="block-content" data-name="${blocks[i]}">${blocks[i]}</div>
        </div>`;
    }
    blockContainer.innerHTML = html;
}

renderBlocks();