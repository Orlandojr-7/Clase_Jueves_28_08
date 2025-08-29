// Botón y la imagen
const btn = document.getElementById("newImageBtn");
const randomImage = document.getElementById("randomImage");

btn.addEventListener("click", () => {
    let width = 500 + Math.floor(Math.random() * 100);
    let height = 300 + Math.floor(Math.random() * 100);
    randomImage.src = `https://picsum.photos/${width}/${height}?random=${Date.now()}`;
    
    randomImage.style.opacity = 0;
    setTimeout(() => {
        randomImage.style.opacity = 1;
    }, 300);
});
