// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
      console.log(response.data);
      const object = response.data;

      Object.entries(object.articles).forEach(([key, val]) => console.log(key, val));
  })
  .catch(error => {
      console.log(error);
  });

function cardComponent(article){
    const [card, headline, authorContainer, imgContainer, image, authorName] = [
      "div",
      "div",
      "div",
      "div",
      "img",
      "span"
    ].map(element => document.createElement(element));

    card.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    card.appendChild(headline);
    card.appendChild(authorContainer);

    authorContainer.appendChild(imgContainer);
    imgContainer.appendChild(image);

    card.appendChild(authorName);

    headline.textContent = article.headline;
    image.setAttribute('src', article.authorPhoto);
    authorName.textContent = `By ${article.authorName}`

    return card;
}
