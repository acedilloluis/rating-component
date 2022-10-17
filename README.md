# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

In this project I learned to create a dynamic component using Javascript. In particular, I tried as best as I could to keep CSS out of the script. This function handles the DOM manipulation after the user has selected a rating:

```js
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
```

### Continued development

In future projets I'd like to try to use different layout methods. In this project I used flexbox once again.
