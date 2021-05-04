   export const film = () => {
        const promise = fetch (
            //'http://www.omdbapi.com/?s=%27blade%20runner%27&apikey=d99eb7c1'
           // 'http://www.omdbapi.com/?s=harry+potter&apikey=d99eb7c1'
           'http://www.omdbapi.com/?s=fast&apikey=d99eb7c1'
           

        );
        promise
            .then (res => {
                if(res) return res.json();
            })
            .then (resjson => {                
                resjson.Search.forEach(stampa);
            })
            .catch(err => {
                console.error(err);
            })
    }
    
    const stampa = (item) => {

    
    const MAINdiv = document.createElement('div');
    const divCard = document.createElement('div');
    const poster = document.createElement('img');
    const card_title = document.createElement('h5');
    const card_text_anno = document.createElement("p");
    const card_text_genere = document.createElement("p");

    const container = document.getElementById('mainContainer');

    
    MAINdiv.setAttribute("class", "col");
    divCard.setAttribute("class","card");
    poster.setAttribute("class", "card-img-top");
    poster.setAttribute("src", item.Poster);
    
    card_title.setAttribute("class","card-title");
    card_text_anno.setAttribute("class","card-text");
    card_text_genere.setAttribute("class","card-text");


    card_title.innerHTML = "Titolo: " + item.Title;
    card_text_anno.innerHTML = "Anno: " + item.Year;
    card_text_genere.innerHTML = "Genere: " + item.Type;

    MAINdiv.appendChild(divCard);
    divCard.appendChild(poster);
    divCard.appendChild(card_title);
    divCard.appendChild(card_text_anno);
    divCard.appendChild(card_text_genere);
    container.appendChild(MAINdiv);
    
    
     

    
}

