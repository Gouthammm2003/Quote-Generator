let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
[
    'Two things are infinit the universe and human stupidity and Im not sure about the universe',
    'You only live once, but if you do it right, once is enough',
    'A friend is someone who knows all about you and still loves you',
    'If you tell the truth, you dont have to remember anything',
    'Be the change that you wish to see in the world'

];

btn.addEventListener('click' , function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
}
)