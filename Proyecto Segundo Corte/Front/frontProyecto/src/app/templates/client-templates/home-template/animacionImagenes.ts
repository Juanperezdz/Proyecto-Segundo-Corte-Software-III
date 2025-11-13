export function initFloatingImages(container: HTMLElement) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        console.warn('SSR: animación no inicializada.');
        return;
    }

    const images = Array.from(container.querySelectorAll<HTMLElement>('.imagen-flotante'));

    images.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('show');
        }, index * 300);
    });

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    document.addEventListener('mousemove', (event) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        targetX = (event.clientX - centerX) / 50;
        targetY = (event.clientY - centerY) / 50;
    });

    function animate() {
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        images.forEach((image, i) => {
            const depth = (i + 1) * 5;
            image.style.transform = `translate(${mouseX * depth}px, ${mouseY * depth}px)`;
        });

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}