function displayCards(){
    var suppr = document.getElementById('random')
    suppr.innerHTML = ""
    var numCard = 0
    do{
        numCard += 1
        cardData()
        sleep(500)

    } while (numCard < 10)
    
    
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function cardData(){
    fetch('https://db.ygoprodeck.com/api/v5/randomcard.php')
        .then((response) => {return response.json()})
        .then(json => appendCards(json))
                    
}
        
function appendCards(json){
    let div = document.querySelector('#random')
            div.innerHtml= ""
            json.forEach(card => {
                let ul = document.createElement('li')
                let li =  document.createTextNode("Nom de la carte :" + card.name + "|   ")
                let cardText = {name:"nom", type:"Carte", race:"Type", attribute:"Attribut", level:"Niveau", atk:"Attaque", def:"Defense", scale:"Echelle Pendule", linkval:"Classification Lien", linkmarkers:"Marqueurs Lien", desc:"Effet de la carte", card_images:"Image de la carte"}
                cardText.foreach ( li => document.createTextNode(card.cardText)
               /* let txt = document.createTextNode("Carte :" + card.type + "|   ")
                let txt2 = document.createTextNode("Type :" + card.race + "|   ")
                let txt3 = document.createTextNode("Attribut :" + card.attribute + "|   ")
                let txt4 = document.createTextNode("Niveau :" + card.level + "|   ")
                let txt5 = document.createTextNode("Attaque :" + card.atk + "|   ")
                let txt6 = document.createTextNode("Defense :" + card.def + "|   ")
                let txt7 = document.createTextNode("Echelle Pendule :" + card.scale + "|   ")
                let txt8 = document.createTextNode("Classification Lien :" + card.linkval + "|   ")
                let txt9 = document.createTextNode("Marqueurs Lien :" + card.linkmarkers + "|   ")
                let txt10 = document.createTextNode("Descriptif carte :" + card.desc + "|   ")
                let txt11 = document.createTextNode("Image de la carte :" + card.card_images[0]['image_url'] + "|   ")
                let choseme = document.createElement("button")
                let txtbutton = document.createTextNode("Choose this card")*/
                div.appendChild(ul)
                ul.appendChild(li)
                ul.appendChild(txt)
                ul.appendChild(txt2)
                if(card.attribute != null){
                    ul.appendChild(txt3)
                    ul.appendChild(txt4)
                    ul.appendChild(txt5) }
                if(card.def != null)
                    ul.appendChild(txt6)
                if(card.scale != null)
                    ul.appendChild(txt7)
                if(card.linkval != null){
                    ul.appendChild(txt8)
                    ul.appendChild(txt9)}
                ul.appendChild(txt10)
                ul.appendChild(txt11)
                ul.appendChild(choseme)
                ul.appendChild(txtbutton)
                console.log(card)
                              })
}


