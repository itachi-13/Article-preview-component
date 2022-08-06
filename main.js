let share = document.querySelector('.share');
let socialMedia = document.querySelector('.social-media');

share.addEventListener('click', () => {
    if (share.style.color === 'white') {
        share.style.color = '#6e8098';
        share.style.backgroundColor = 'hsl(210, 46%, 95%)';
        socialMedia.style.display = 'none';
    } else {
        share.style.color = 'white';
        share.style.backgroundColor = '#6e8098';
        socialMedia.style.display = 'flex';
    }
})