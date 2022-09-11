const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];
// console.log(images[Math.floor(Math.random() * images.length)]);
const chosenImage = images[Math.floor(Math.random() * images.length)]; 
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.append(bgImage);