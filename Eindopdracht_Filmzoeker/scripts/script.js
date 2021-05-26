var movies_list = document.getElementById("films__list")

const addMoviesToDom = function (movies) {
    movies.map(movie => {
        let newLi = document.createElement('li');
        let newImage = document.createElement('img');
        let newA = document.createElement('a');
        newImage.src = movie.Poster;
        newA.href = findLink(movie);
        newLi.appendChild(newA);
        newA.appendChild(newImage);
        movies_list.appendChild(newLi);
    }
    )
}

const addEventListeners = function () {
    const radio_buttons = document.getElementsByName('filter')
    radio_buttons.forEach(button => button.addEventListener('change', () => handleOnChangeEvent(event)))
}

const handleOnChangeEvent = function (event) {
    switch (event.target.id) {
        case "latest":
            movies_list.innerHTML = "";
            addMoviesToDom(filterLatest());
            break;
        case "avenger":
            movies_list.innerHTML = "";
            addMoviesToDom(filterMovies('Avengers'));
            break;
        case "x-men":
            movies_list.innerHTML = "";
            addMoviesToDom(filterMovies("X-Men"));
            break;
        case "princess":
            movies_list.innerHTML = "";
            addMoviesToDom(filterMovies("Princess"));
            break;
        case "batman":
            movies_list.innerHTML = "";
            addMoviesToDom(filterMovies("Batman"));
            break;
    }
}

const filterMovies = function (word) {
    var filtered = movies.filter(movie => movie.Title.includes(word))
    return filtered
}

const filterLatest = function () {
    var filtered = movies.filter(movie => parseInt(movie.Year) >= 2014)
    return filtered
}

const findLink = function (movie) {
    return " https://www.imdb.com/title/" + movie.imdbID;
}