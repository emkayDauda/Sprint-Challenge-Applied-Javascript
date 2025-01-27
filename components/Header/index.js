// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  const [header, date, heading, temp] = ["div", "span", "h1", "span"].map(
    element => document.createElement(element)
  );

  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp')

  header.appendChild(date);
  header.appendChild(heading);
  header.appendChild(temp);

  date.textContent = 'SMARCH 28, 2019';
  heading.textContent = 'Lambda Times';
  temp.textContent = '98°'

  return header;
}

const headerComponent = Header();

document.querySelector('.header-container').appendChild(headerComponent)