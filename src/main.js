const ratingBtns = document.querySelectorAll('button');
let rating = 0;

for (let i = 0; i < 5; i++) {
  ratingBtns[i].addEventListener('click', (event) => {
    rating = Number(event.target.innerHTML);
    ratingBtns[i].setAttribute('id', 'clicked-button');
    // Remove clicked state styles from all other buttons when a new one is clicked
    for (let j = 0; j < 5; j++) {
      if (j !== i) {
        ratingBtns[j].setAttribute('id', '');
      }
    }
  });
}

const form = document.querySelector('form');

function displayThankYou() {
  const main = document.querySelector('main');
  const thankYouImg = document.querySelector('img');
  const header = document.querySelector('h3');
  const para = document.querySelector('p');

  form.remove();

  header.textContent = 'Thank You!';
  para.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

  thankYouImg.src = new URL(
    'images/illustration-thank-you.svg',
    import.meta.url
  );
  thankYouImg.alt =
    'An illustration of a cell phone, a credit card, and a circle';

  const ratingDisplay = document.createElement('div');
  ratingDisplay.textContent = `You selected ${rating} out of 5`;

  // Center child elements in container and apply ratingDisplay styles
  main.setAttribute('id', 'thank-you-container');

  // Display elements in proper order
  main.appendChild(thankYouImg);
  main.appendChild(ratingDisplay);
  main.appendChild(header);
  main.appendChild(para);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (rating !== 0) {
    displayThankYou();
  }
});
