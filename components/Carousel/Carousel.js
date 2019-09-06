/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function createCarousel(){
  const [carousel, leftButton, img1, img2, img3, img4, rightButton] = [
    "div",
    "div",
    "img",
    "img",
    "img",
    "img",
    "div"
  ].map(Element => {

    const x = document.createElement(Element);
    x.style.display = 'block';
    return x
  });

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  img1.setAttribute('src', './assets/carousel/mountains.jpeg');
  img2.setAttribute('src', './assets/carousel/computer.jpeg');
  img3.setAttribute('src', './assets/carousel/trees.jpeg');
  img4.setAttribute('src', './assets/carousel/turntable.jpeg');

  // carousel.style.display = 'flex';
  return carousel;
}

document.querySelector('.carousel-container').appendChild(createCarousel());