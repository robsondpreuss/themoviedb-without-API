const moviesContainer = document.querySelector('.movies')

const movies = [
  {
    image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9z4jRr43JdtU66P0iy8h18OyLql.jpg',
    title: 'O Troll da Montanha',
    rating: 9.2,
    year: 2022,
    description: "Após ficar aprisionada por mil anos nas profundezas da montanha de Dovre, uma criatura gigantesca chega à superfície. Ela inicia uma jornada rumo à capital da Noruega, deixando destruição e caos em seu rastro. Um grupo de heróis se une para impedi-la. Mas como deter algo que deveria existir apenas no folclore norueguês?.",
    isFavorited: true
  },
  {
    image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ooBR3qulC40ws0QkYBUAYFKmLRE.jpg',
    title: 'Wandinha',
    rating: 9.2,
    year: 2022,
    description: "Inteligente, sarcástica e apática, Wandinha Addams pode estar meio morta por dentro, mas na Escola Nunca Mais ela vai fazer amigos, inimigos e investigar assassinatos.",
    isFavorited: false
  },
  {
    image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/72f0kFmOutPhSaZkXs0oGDmfvRd.jpg',
    title: 'Exército do Amanhã',
    rating: 9.2,
    year: 2022,
    description: "Em um mundo pós-apocalíptico, a China presencia a queda de um meteorito infectado com uma planta mortal, então um grupo de homens da cidade atingida forma um esquadrão suicida para salvar a região de um colapso. No entanto, a situação se trata de uma ameaça alienígena vinda de criaturas poderosas que podem acabar com a humanidade, obrigando o soldado sobrevivente Tai Loi (Louis Koo) enfrentar seus piores medos.",
    isFavorited: true
  },
]

window.onload = function () {
  movies.forEach(movie => renderMovie(movie))
}

function renderMovie(movie) {

  const { title, image, rating, year, description, isFavorited } = movie

  const movieElement = document.createElement('div')
  movieElement.classList.add('movie')
  moviesContainer.appendChild(movieElement)

  const movieInformations = document.createElement('div')
  movieInformations.classList.add('movie-informations')

  const movieImageContainer = document.createElement('div')
  movieImageContainer.classList.add('movie-image')
  const movieImage = document.createElement('img')
  movieImage.src = image
  movieImage.alt = `${title} Poster`
  movieImageContainer.appendChild(movieImage)
  movieInformations.appendChild(movieImageContainer)

  const movieTextContainer = document.createElement('div')
  movieTextContainer.classList.add('movie-text')
  const movieTitle = document.createElement('h4')
  movieTitle.textContent = `${title} (${year})`
  movieTextContainer.appendChild(movieTitle)
  movieInformations.appendChild(movieTextContainer)

  const informations = document.createElement('div')
  informations.classList.add('movie-informations')
  movieTextContainer.appendChild(informations)

  const ratingContainer = document.createElement('div')
  ratingContainer.classList.add('rating')
  const starImage = document.createElement('img')
  starImage.src = './assets/images/star.png'
  starImage.alt = 'Star'
  const movieRate = document.createElement('span')
  movieRate.classList.add('movie-rate')
  movieRate.textContent = rating
  ratingContainer.appendChild(starImage)
  ratingContainer.appendChild(movieRate)
  informations.appendChild(ratingContainer)

  const favorite = document.createElement('div')
  favorite.classList.add('favorite')
  const favoriteImage = document.createElement('img')
  favoriteImage.src = isFavorited ? './assets/images/heart-fill.svg' : './assets/images/heart.svg'
  favoriteImage.alt = 'Heart'
  favoriteImage.classList.add('favoriteImage')
  const favoriteText = document.createElement('span')
  favoriteText.classList.add('movie-favorite')
  favoriteText.textContent = 'Favoritar'
  favorite.appendChild(favoriteImage)
  favorite.appendChild(favoriteText)
  informations.appendChild(favorite)

  const movieDescriptionContainer = document.createElement('div')
  movieDescriptionContainer.classList.add('movie-description')
  const movieDescription = document.createElement('span')
  movieDescription.textContent = description
  movieDescriptionContainer.appendChild(movieDescription)

  movieElement.appendChild(movieInformations)
  movieElement.appendChild(movieDescriptionContainer)
}
