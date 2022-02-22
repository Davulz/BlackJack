const htmldiv = document.getElementById('app');
//MODELL
let Decks = ['<img src = "SVG-cards-1.3/ace_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/2_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/3_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/4_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/5_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/6_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/7_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/8_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/9_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/10_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/jack_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/queen_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/king_of_hearts.svg"/>',
    '<img src = "SVG-cards-1.3/ace_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/2_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/3_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/4_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/5_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/6_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/7_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/8_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/9_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/10_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/jack_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/queen_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/king_of_clubs.svg"/>',
    '<img src = "SVG-cards-1.3/ace_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/2_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/3_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/4_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/5_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/6_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/7_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/8_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/9_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/10_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/jack_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/queen_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/king_of_diamonds.svg"/>',
    '<img src = "SVG-cards-1.3/ace_of_spades.svg"/>', '<img src = "SVG-cards-1.3/2_of_spades.svg"/>', '<img src = "SVG-cards-1.3/3_of_spades.svg"/>', '<img src = "SVG-cards-1.3/4_of_spades.svg"/>', '<img src = "SVG-cards-1.3/5_of_spades.svg"/>', '<img src = "SVG-cards-1.3/6_of_spades.svg"/>', '<img src = "SVG-cards-1.3/7_of_spades.svg"/>', '<img src = "SVG-cards-1.3/8_of_spades.svg"/>', '<img src = "SVG-cards-1.3/9_of_spades.svg"/>', '<img src = "SVG-cards-1.3/10_of_spades.svg"/>', '<img src = "SVG-cards-1.3/jack_of_spades.svg"/>', '<img src = "SVG-cards-1.3/queen_of_spades.svg"/>', '<img src = "SVG-cards-1.3/king_of_spades.svg"/>',
    '<img src = "SVG-cards-1.3/ace_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/2_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/3_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/4_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/5_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/6_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/7_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/8_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/9_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/10_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/jack_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/queen_of_hearts.svg"/>', '<img src = "SVG-cards-1.3/king_of_hearts.svg"/>',
    '<img src = "SVG-cards-1.3/ace_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/2_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/3_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/4_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/5_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/6_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/7_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/8_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/9_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/10_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/jack_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/queen_of_clubs.svg"/>', '<img src = "SVG-cards-1.3/king_of_clubs.svg"/>',
    '<img src = "SVG-cards-1.3/ace_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/2_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/3_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/4_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/5_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/6_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/7_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/8_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/9_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/10_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/jack_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/queen_of_diamonds.svg"/>', '<img src = "SVG-cards-1.3/king_of_diamonds.svg"/>',
    '<img src = "SVG-cards-1.3/ace_of_spades.svg"/>', '<img src = "SVG-cards-1.3/2_of_spades.svg"/>', '<img src = "SVG-cards-1.3/3_of_spades.svg"/>', '<img src = "SVG-cards-1.3/4_of_spades.svg"/>', '<img src = "SVG-cards-1.3/5_of_spades.svg"/>', '<img src = "SVG-cards-1.3/6_of_spades.svg"/>', '<img src = "SVG-cards-1.3/7_of_spades.svg"/>', '<img src = "SVG-cards-1.3/8_of_spades.svg"/>', '<img src = "SVG-cards-1.3/9_of_spades.svg"/>', '<img src = "SVG-cards-1.3/10_of_spades.svg"/>', '<img src = "SVG-cards-1.3/jack_of_spades.svg"/>', '<img src = "SVG-cards-1.3/queen_of_spades.svg"/>', '<img src = "SVG-cards-1.3/king_of_spades.svg"/>',
]
let DecksValue = ['11', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10',
    '11', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10',
    '11', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10',
    '11', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10',
    '11', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10',
    '11', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10',
    '11', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10',
    '11', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10'
]

let dealState = '';
let playerHand = '';
let playerHandValue = '';
let houseHand = '';
let houseHandValue = '';
let houseHandhidden = '';
let cardback = '';
let random = ''

//VIEW
view();


function view() {
    let html = /*html*/ `<h1>Blackjack</h1>
    <div class="wrapper">
        <div class="howtoplay"></div>
        <div class='dealersHand'>${cardback}${houseHand}</div>
        <div class='yourHand'>${playerHand}</div>
        <button ${dealState} onclick="dealCards()" class="deal">DEAL</div>
        <div class="choices">
            <button onclick="hitCards()" class=hit>Hit</button>
            <button onclick="standCards()"class=stand>Stand</button>
            <button onclick="splitCards()"class=split>Split</button>
            <button onclick="doubleCards()"class=double>Double</button>
        </div>
    </div>
`
    htmldiv.innerHTML = html;
}

//CONTROLLER
function HandValue() {

}
// function ace() {
//     // hvis hånda inneholder Ess => sjekk total for både 1 og 11.
//     if(HandValue < 21) ace = "11"
//     else if (HandValue > 21) ace = "1";
// }


function dealCards() {
    //deal cards  hide 2nd dealt housecard.
    dealState = 'disabled'
    playerHand = '';
    playerHandValue = '';

    randomCard()
    playerHand += Decks[random]
    playerHandValue = parseInt(DecksValue[random])
    Decks.splice(random, 1)
    DecksValue.splice(random, 1)
    randomCard()
    houseHandhidden = Decks[random]
    houseHandValue = parseInt(DecksValue[random])
    Decks.splice(random, 1)
    DecksValue.splice(random, 1)
    cardback = '<img src = "SVG-cards-1.3/red_joker.svg"/>'
    randomCard()
    playerHand += Decks[random]
    playerHandValue += parseInt(DecksValue[random])
    Decks.splice(random, 1)
    DecksValue.splice(random, 1)
    randomCard()
    houseHand += Decks[random]
    houseHandValue += parseInt(DecksValue[random])
    Decks.splice(random, 1)
    DecksValue.splice(random, 1)
    console.log('You:', playerHandValue, 'House:', houseHandValue, houseHandhidden)
    view();
}

function randomCard() {
    random = Math.floor(Math.random() * Decks.length);

}

function hitCards() {


}

function addCards() {

}