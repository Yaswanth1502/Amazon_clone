const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev'); // Use querySelector for a single button
const next_btn = document.querySelector('.control_next'); // Same here

let n = 0;


function changeSlide() {
    
    imgs.forEach(img => img.style.display = 'none');
    
    imgs[n].style.display = 'block';
}


changeSlide();

// Event listener for the next button
next_btn.addEventListener('click', () => {
    n = (n + 1) % imgs.length; // Increment n, and loop back to 0 if it exceeds the last index
    changeSlide();
});

// Event listener for the previous button
prev_btn.addEventListener('click', () => {
    n = (n - 1 + imgs.length) % imgs.length; // Decrement n, and loop to the last index if n becomes negative
    changeSlide();
});
