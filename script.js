let count = localStorage.getItem('beerCount') || 0;
document.getElementById('count').textContent = count;

document.getElementById('beer').addEventListener('click', () => {
    count++;
    document.getElementById('count').textContent = count;
    localStorage.setItem('beerCount', count);

    const beer = document.getElementById('beer');
    beer.style.transform = 'scale(1.2) rotate(20deg)';
    setTimeout(() => {
        beer.style.transform = 'scale(1) rotate(0)';
    }, 300);
});