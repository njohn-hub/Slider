

let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let caroselDom = document.querySelector(".carosel");
let listItemDom = document.querySelector(".carosel .list");
let thumbnailDom = document.querySelector(".carosel .thumbnail");


nextDom.onclick = () => {
    showSlider("next")
}

prevDom.onclick = () => {
    showSlider('prev')
}

let TimeRunning = 3000;
let timeAutoNext = 700;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext)

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carosel .list .item');
    let itemThumbnail = document.querySelectorAll('.carosel .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0])
        thumbnailDom.appendChild(itemThumbnail[0]) 
        caroselDom.classList.add('next')
    } else {
        let lastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[lastItem])
        thumbnailDom.prepend(itemThumbnail[lastItem])
        caroselDom.classList.add('prev')
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        caroselDom.classList.remove('next')
        caroselDom.classList.remove('prev')
    }, TimeRunning)

    clearTimeout(runAutoRun)
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext)
}