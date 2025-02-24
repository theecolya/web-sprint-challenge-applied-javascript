import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement('div')
  const headlineDiv = document.createElement('div')
  const authorDiv = document.createElement('div')
  const imageDiv = document.createElement('div')
  const image = document.createElement('img')
  const creditSpan = document.createElement('span')

  cardDiv.setAttribute('class','card');
  headlineDiv.setAttribute('class','headline');
  authorDiv.setAttribute('class','author');
  imageDiv.setAttribute('class','img-container');
  image.setAttribute('src', article.authorPhoto);

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imageDiv);
  authorDiv.appendChild(creditSpan);
  imageDiv.appendChild(image);

  headlineDiv.textContent = article.headline;
  creditSpan.textContent = `By ${article.authorName}`;

  cardDiv.addEventListener('click', function() {
    console.log(article.headline)
  });

  return cardDiv
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5001/api/articles').then(function(response) 
  { const artArr = Object.entries(response.data);
    const artArrOne = artArr[0][1].javascript
    const artArrTwo = artArr[0][1].bootstrap
    const artArrThree = artArr[0][1].technology
    const artArrFour = artArr[0][1].jquery
    const artArrFive = artArr[0][1].node

    artArrOne.forEach(element => {
      document.querySelector(selector).appendChild(Card(element))
    });
    artArrTwo.forEach(element => {
      document.querySelector(selector).appendChild(Card(element))
    });
    artArrThree.forEach(element => {
      document.querySelector(selector).appendChild(Card(element))
    });
    artArrFour.forEach(element => {
      document.querySelector(selector).appendChild(Card(element))
    });
    artArrFive.forEach(element => {
      document.querySelector(selector).appendChild(Card(element))
    });
  })
  .catch(err => {console.error(err)});
}

export { Card, cardAppender }