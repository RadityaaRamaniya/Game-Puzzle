const boxes = 
document.querySelectorAll('.box');

boxes.forEach(box => {
    let rotation = [0, 90, 180, 270]
[Math.floor(Math.random() * 4)];

box.style.transform = `rotate(${rotation}deg)`;

box.addEventListener('click', () => {
    rotation += 90;

    if (rotation >= 360) {
        rotation = 0;
    }

    box.style.transform = `rotate(${rotation}deg)`;
});
});