//Deck Constructor
function Deck(){
  this.deck=[];
}

Deck.prototype.reset = function () {
  console.log("Deck Reset");
  this.suit = ['Spade','Club','Hearts','Diamond'];
  this.value = ['A',1,2,3,4,5,6,7,8,9,'J','Q','K'];
  for(var i = 0;i < this.suit.length;i++)
  {
    for(var j = 0;j < this.value.length;j++)
    {
      this.deck.push(this.suit[i] + this.value[j]);
    }
  }
  return this;
};

Deck.prototype.shuffle = function(){
  var deck=this.deck;
   for(var i = deck.length-1; i >=0; i--)
   {
    var rand = Math.floor(Math.random() * (i+1)); //random no. from 0 to length-1
    var temp = deck[i];
    deck[i] = deck[rand];
    deck[rand] = temp;
   }
   console.log("Shuffled Deck is");
   return this;
}

Deck.prototype.deal = function () {
  return this.deck.pop();
};

Deck.prototype.show = function () {
  var deck_in_string = JSON.stringify(this.deck);
  console.log(deck_in_string);
  return this;
};

//PLAYER constructor
function Player(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.takeCard = function (deck) {
  this.hand.push(deck.deal());
  return this;
};

Player.prototype.discard = function (card) {
  console.log("Hand with card Discarded");
  if(card)
  {
    this.hand.splice(this.hand.indexOf(card),1);
  }
  else {
  this.hand.pop();
  }
  return this;
};

Player.prototype.show = function () {
  console.log(this.name);
  console.log(this.hand);
  return this;
};

var deckObj = new Deck();
var playerObj = new Player('Ambili');
deckObj.reset().show().shuffle().show();
console.log(deckObj.deal());
deckObj.show();
playerObj.takeCard(deckObj).takeCard(deckObj).takeCard(deckObj).takeCard(deckObj).show().discard('DiamondQ').show();
