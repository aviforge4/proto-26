
document.getElementById('profilePhoto').addEventListener('click', function () {
    document.getElementById('profileSection').style.display = 'block';
});

document.querySelector('.close-profile-icon').addEventListener('click', function () {
    document.getElementById('profileSection').style.display = 'none';
});

function showSection(section) {
    const sections = ['videos', 'shorts', 'posts'];
    sections.forEach(sec => {
        const elements = document.querySelectorAll(`.${sec}-section .${sec}-item`);
        if (sec === section) {
            elements.forEach(el => el.style.display = 'block');
        } else {
            elements.forEach(el => el.style.display = 'none');
        }
    });
}

// Initialize the sections to hide all items except the default one (e.g., videos)
document.addEventListener('DOMContentLoaded', () => {
    showSection('videos');
});
