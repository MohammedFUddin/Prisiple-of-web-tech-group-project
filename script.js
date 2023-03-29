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

// Search function

function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.listing');
    let l = document.getElementsByTagName('h5');
    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('h5')[0];
        let value = a.innerHTML || a.innerText || a.textContent;
        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        }
        else {
            item[i].style.display = "none";
        }
    }
}

