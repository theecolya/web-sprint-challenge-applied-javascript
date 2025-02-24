const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerDiv = document.createElement('div')
  const dateSpan = document.createElement('span')
  const divTitle = document.createElement('h1')
  const tempSpan = document.createElement('span')

  headerDiv.setAttribute('class','header');
  dateSpan.setAttribute('class','date');
  dateSpan.textContent = date;
  headerDiv.appendChild(dateSpan);
  divTitle.textContent = title;
  headerDiv.appendChild(divTitle);
  tempSpan.setAttribute('class','temp');
  tempSpan.textContent = temp;
  headerDiv.appendChild(tempSpan);
  return headerDiv
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const newHeader = Header('Virgo Full Moon', 'March 19 2022', '70*F')
  document.querySelector(selector).appendChild(newHeader)
}

export { Header, headerAppender }
