const cardimages = [{
    'name': 'Rick and Morty 1',
    'img': '/img/rm1.jpg',
  },
  {
    'name': 'Rick and Morty 2',
    'img': 'img/rm2.jpeg',
  },
  {
    'name': 'Rick and Morty 3',
    'img': 'img/rm3.jpeg',
  },
  {
    'name': 'Rick and Morty 4',
    'img': 'img/rm4.jpeg',
  },
  {
    'name': 'Rick and Morty 5',
    'img': 'img/rm5.jpeg',
  },
  {
    'name': 'Rick and Morty 6',
    'img': 'img/rm6.png',
  },
  {
    'name': 'Rick and Morty 7',
    'img': 'img/rm7.jpeg',
  },
  {
    'name': 'Rick and Morty 8',
    'img': 'img/rm8.jpeg',
  },
  {
    'name': 'Rick and Morty 9',
    'img': 'img/rm9.jpeg',
  },
  {
    'name': 'Rick and Morty 10',
    'img': 'img/rm10.png',
  },
  {
    'name': 'Rick and Morty 11',
    'img': 'img/rm11.png',
  },
  {
    'name': 'Rick and Morty 12',
    'img': 'img/rm12.jpeg',
  },
];

const gameGrid = cardimages
  .concat(cardimages)
  .sort(() => 0.5 - Math.random());

let first = '';
let second = '';
let count = 0;
let previousTarget = null;
let delay = 1000;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  first = '';
  second = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      first = clicked.parentNode.dataset.name;
      console.log(first);
      clicked.parentNode.classList.add('selected');
    } else {
      second = clicked.parentNode.dataset.name;
      console.log(second);
      clicked.parentNode.classList.add('selected');
    }

    if (first && second) {
      if (first === second) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }

});
