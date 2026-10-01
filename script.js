const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpeg',
    'images/5.jpeg',
    'images/6.jpeg',
    'images/7.jpeg',
    'images/8.jpeg',
    'images/9.jpeg',
    'images/10.jpeg',
    'images/11.jpeg',
    'images/12.jpeg',
    'images/13.jpeg',
    'images/14.jpeg'
];

function addImage(ourSource, ourRotation) {

    const image = document.createElement('img');

    image.src = ourSource;

   
    const randomSize = Math.random() * 200 + 100;
    image.style.width = randomSize + 'px';

    image.style.transition = 'all 3s';

    image.style.transform = `rotate(${ourRotation}deg)`;


    image.style.position = 'absolute';

    const randomX = Math.random() * (window.innerWidth - randomSize);
    const randomY = Math.random() * (window.innerHeight - randomSize);

    image.style.left = randomX + 'px';
    image.style.top = randomY + 'px';


    image.style.opacity = '0';
    image.style.transform = `rotate(${ourRotation}deg) scale(0.2)`;

    document.body.appendChild(image);

  
    setTimeout(function() {

        image.style.opacity = '1';
        image.style.transform = `rotate(${ourRotation}deg) scale(1)`;

    }, 50);


    let shape = 0;

    setInterval(function() {

        if (shape === 0) {

            image.style.clipPath = 'circle(50%)';

        } else if (shape === 1) {

            image.style.clipPath =
            'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 100%, 50% 73%, 21% 100%, 32% 57%, 2% 35%, 39% 35%)';

        } else {

            image.style.clipPath =
            'path("M 50 90 C 35 75 5 55 5 30 C 5 10 30 5 50 25 C 70 5 95 10 95 30 C 95 55 65 75 50 90 Z")';

        }

        shape++;

        if (shape > 2) {
            shape = 0;
        }

    }, 3000);

    return image;
}


let imageIndex = 0;

for (let imageCount = 0; imageCount < 30; imageCount++) {

    while (imageIndex >= images.length) {
        imageIndex = 0;
    }

    const currentImage = images[imageIndex];

    setTimeout(function() {

        const image = addImage(
            currentImage,
            Math.random() * 90 - 45
        );

        image.style.transition =
            'filter 10s, transform 3s, opacity 3s';

        setTimeout(function() {

            image.style.filter =
                'grayscale(0) sepia(1) hue-rotate(90deg)';

        }, 50);

    }, imageCount * 1000);

    imageIndex++;
}
