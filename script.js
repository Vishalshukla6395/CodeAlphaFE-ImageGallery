let currentIndex = 0;
let slideshowInterval;
const images = [
    { url: 'Images/img1.jpg', description: 'Image 1' },
    { url: 'Images/img2.jpg', description: 'Image 2' },
    { url: 'Images/img3.jpg', description: 'Image 3' },
    { url: 'Images/img4.jpg', description: 'Image 4' },
    { url: 'Images/img5.jpg', description: 'Image 5' },
    { url: 'Images/img6.jpg', description: 'Image 6' },
    { url: 'Images/img7.jpg', description: 'Image 7' },
    { url: 'Images/img8.jpg', description: 'Image 8' },
];

function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = images[currentIndex].url;
    captionText.innerHTML = images[currentIndex].description;

    if (!slideshowInterval) startSlideshow();
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    stopSlideshow();
}

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    openModal(currentIndex);
}

function toggleFullscreen() {
    const modal = document.getElementById("modal");
    if (!document.fullscreenElement) {
        if (modal.requestFullscreen) modal.requestFullscreen();
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
}

function startSlideshow() {
    stopSlideshow();
    slideshowInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
}

function setViewMode(mode) {
    const thumbnails = document.querySelector('.thumbnails');
    if (mode === 'grid') {
        thumbnails.classList.add('grid-view');
        thumbnails.classList.remove('list-view');
    } else {
        thumbnails.classList.add('list-view');
        thumbnails.classList.remove('grid-view');
    }
}
