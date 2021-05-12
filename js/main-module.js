export const searchFilm = () => {

    const movie = document.getElementById("myInput").value;

    const promise = fetch('https://www.omdbapi.com/?&apikey=d99eb7c1&s=' + movie);

    promise

        .then(res => { if (res) return res.json(); })

        .then(resjson => {
            for (let i = 0; i < resjson.Search.length; i++) {
                console.log(resjson.Search[i]);
            }
        })

        .catch(err => { console.error(err); })

}


export const film = () => {
    const promise = fetch(
        'https://www.omdbapi.com/?&apikey=d99eb7c1&s=Fast+Furious'
    );
    promise
    //recuper il contenuto json
        .then(res => {
            if (res) return res.json();
        })
        .then(resjson => {
          //  console.log(resjson)
            resjson.Search.forEach(stampa);
        })
        //solo in caso di errore stampo nella console
        .catch(err => {
            console.error(err);
        })
}

const stampa = (item) => {

    //creo tutti i div//
    const MAINdiv = document.createElement('div');
    const divCard = document.createElement('div');
    const poster = document.createElement('img');
    const card_title = document.createElement('h5');
    const card_text_anno = document.createElement("p");
    const card_text_genere = document.createElement("p");
    const container = document.getElementById('mainContainer');
    //assegno attributi ai div creati
    MAINdiv.setAttribute("class", "col");
    divCard.setAttribute("class", "card");
    poster.setAttribute("class", "card-img-top")
    //controllo se il poster e' presente, altrimenti inserisco un immagine 
    if (item.Poster == "N/A") {
        poster.setAttribute("src", ("img/not-found.jpg"));
    } else {
        poster.setAttribute("src", item.Poster);
    }
    //assegno attributi ai div creati
    card_title.setAttribute("class", "card-title");
    card_text_anno.setAttribute("class", "card-text");
    card_text_genere.setAttribute("class", "card-text");
    //inserisco le stringhe nell html
    card_title.innerHTML = "Titolo: " + item.Title;
    card_text_anno.innerHTML = "Anno: " + item.Year;
    card_text_genere.innerHTML = "Genere: " + item.Type;
    //inserisco le parti della card nel divcard e la div card nel MAINdiv 
    MAINdiv.appendChild(divCard);
    divCard.appendChild(poster);
    divCard.appendChild(card_title);
    divCard.appendChild(card_text_anno);
    divCard.appendChild(card_text_genere);
    container.appendChild(MAINdiv);
}
 