const WORKER_URL = "https://little-sun-ce37.picalpical2004.workers.dev/";

async function updateCounter() {
    const response = await fetch(WORKER_URL);
    const globalCount = await response.text();
    document.getElementById('count').textContent = globalCount;
}

document.getElementById('beer').addEventListener('click', async () => {
    await fetch(WORKER_URL, { method: 'POST' });

    await updateCounter();

    const beer = document.getElementById('beer');
    beer.style.transform = 'scale(1.2) rotate(20deg)';
    setTimeout(() => beer.style.transform = 'scale(1) rotate(0)', 300);
});

updateCounter();