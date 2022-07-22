const tabs = document.getElementById('tabs');
const tabsHidden = document.getElementById('tabsHidden');
const content = document.querySelectorAll('.content');
const contentHidden = document.querySelectorAll('.content-hidden');


const changeClass1 = el => {
    for(let i =  0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab1 = e.target.dataset.btn;
    changeClass1(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab1) {
            content[i].classList.add('active');        }
    }
})

const changeClass2 = el => {
    for(let i =  0; i < tabsHidden.children.length; i++) {
        tabsHidden.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabsHidden.addEventListener('click', e => {
    const currTab2 = e.target.dataset.btn;
    changeClass2(e.target);
    for(let i = 0; i < contentHidden.length; i++) {
        contentHidden[i].classList.remove('active');
        if(contentHidden[i].dataset.content === currTab2) {
            contentHidden[i].classList.add('active');        }
    }
});






