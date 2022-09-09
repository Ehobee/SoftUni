function movies(arr) {

    let arrLength = arr.length;
    let movies = [];

    for (let i = 0; i < arrLength; i++) {

        let info = arr[i];
        if (info.includes('addMovie')) {
            let [command, name] = info.split('addMovie ');
            movies.push({
                name
            })
        } else if (info.includes('directedBy')) {
            let [name, director] = info.split(' directedBy ');

            let movie = movies.find((movieObject => movieObject.name === name));

            if (movie) {
                movie.director = director
            }
        } else if (info.includes('onDate')) {
            let [name, date] = info.split(' onDate ');

            let movie = movies.find((movieObject => movieObject.name === name));

            if (movie) {
                movie.date = date
            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)

function trackMovie(actions) {
    let movies = {};
    let title = '';
    let date = '';
    let director = '';

    for (let command of actions) {
        if (command.startsWith('addMovie')) {
            title = command.slice(9); // starting index of each title
            movies[title] = {
                name: title,
                director: '',
                date: '',
            }
        }

        if (command.includes('onDate')) {
            command = command.split(' onDate ');
            title = command[0];
            date = command[1];

            if (movies.hasOwnProperty(title)) {
                movies[title].date = date;
            }
        }

        if (command.includes('directedBy')) {
            command = command.split(' directedBy ');
            title = command[0];
            director = command[1];

            if (movies.hasOwnProperty(title)) {
                movies[title].director = director;
            }
        }
    }

    let json = '';

    for (item in movies) {
        if (movies[item].date && movies[item].director) {
            json = JSON.stringify(movies[item]);
            console.log(json);
        }
    }
}