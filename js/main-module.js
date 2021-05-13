export const searchFilm = (input, container) => {
    const movie = document.getElementById(input).value;
    clearContainer(container);
    addFilm(movie);
}

const clearContainer = (container) => {
    document.getElementById(container).innerHTML = '';
}

export const addFilm = (movie) => {
    const promise = fetch('https://www.omdbapi.com/?&apikey=d99eb7c1&s=' + movie);
    promise
        .then(res => { if (res) return res.json(); }) //recupero il contenuto json
        .then(resjson => { resjson.Search.forEach(createFilm); })
        .catch(err => { console.error(err); }) //solo in caso di errore stampo nella console
}

const createFilm = (item) => {
    //creo tutti i div//
    const MAINdiv = document.createElement('div');
    const divCard = document.createElement('div');
    const poster = document.createElement('img');
    const card_title = document.createElement('h5');
    const card_text_anno = document.createElement("p");
    const card_text_genere = document.createElement("p");
    const container = document.getElementById('mainContainer');
    makeCard(MAINdiv, divCard, poster, card_title, card_text_anno, card_text_genere);
    addContent(item, poster, card_title, card_text_anno, card_text_genere);
    //inserisco le parti della card nel divcard e la div card nel MAINdiv 
    divCard.innerHTML += poster.outerHTML + card_title.outerHTML + card_text_anno.outerHTML + card_text_genere.outerHTML
    MAINdiv.appendChild(divCard);
    container.appendChild(MAINdiv);
}

const makeCard = (div, card, poster, title, year, genre) => {
    //assegno attributi ai div creati
    div.setAttribute("class", "col");
    card.setAttribute("class", "card");
    poster.setAttribute("class", "card-img-top")
    //assegno attributi ai div creati
    title.setAttribute("class", "card-title");
    year.setAttribute("class", "card-text");
    genre.setAttribute("class", "card-text");
}

const addContent = (item, poster, title, year, genre) => {
    //controllo se il poster e' presente, altrimenti inserisco un immagine 
    if (item.Poster == "N/A") {
        poster.setAttribute("src", ("img/not-found.jpg"));
    } else {
        poster.setAttribute("src", item.Poster);
    }
    //inserisco le stringhe nell'html
    title.innerHTML = "Titolo: " + item.Title;
    year.innerHTML = "Anno: " + item.Year;
    genre.innerHTML = "Genere: " + item.Type;
}
