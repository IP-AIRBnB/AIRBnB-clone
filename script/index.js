
document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.video-container');
    const video = document.querySelector('.vid');
    const overlay = document.querySelector('.overlay');

    function playVideo() {
        video.play();
        overlay.style.opacity = '0';
    }

    function pauseVideo() {
        video.pause();
        overlay.style.opacity = '1';
    }

    videoContainer.addEventListener('mouseenter', playVideo);
    videoContainer.addEventListener('mouseleave', pauseVideo);

    // Add touch support for mobile devices
    videoContainer.addEventListener('touchstart', playVideo);
    videoContainer.addEventListener('touchend', pauseVideo);
});
