//////////////////////// view All button ///////////////////
const ViewAllBtn = document.querySelector('.view-all-btn');
const product = document.querySelector('.product');

ViewAllBtn.addEventListener('click', (e) => {
    product.classList.toggle('show-more');
    if (ViewAllBtn.innerText === 'View More') {
        ViewAllBtn.innerText = 'View Less';
    } else {
        ViewAllBtn.innerText = 'View More';
    }
})

