//pseudocode:
// butona click olunca
// quote ve author gelcek
// random olcak

const quotes = [
    {
        quote:"The journey of a thousand miles begins with one step.",
        author: "~Lao Tzu"
    },
    {
        quote:"That which does not kill us makes us stronger.",
        author: "~Friedrich Nietzsche"
    },
    {
        quote:"Life is what happens when you’re busy making other plans.",
        author: "~John Lennon"
    },
    {
        quote:"When the going gets tough, the tough get going.",
        author: "~Joe Kennedy"
    },
    {
        quote:"You must be the change you wish to see in the world.",
        author: "~Mahatma Gandhi"
    },
    {
        quote:"Whether you think you can or you think you can’t, you’re right.",
        author: "~Henry Ford"
    },
    {
        quote:"What you love, let it kill you.",
        author: "~David Moses"
    },
    {
        quote:"Hayata nasıl bakıyorsan, orasındasın.",
        author: "~Rüştü Keten"
    },
    {
        quote:"You can go whenever you want, whereever you want, as long as you want.",
        author: "~Nurettin Akın"
    }
];

const btn = document.querySelector('#generatequote');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');

btn.addEventListener('click', () => {
    console.log('click');
    let randomNum = Math.floor(Math.random() * quotes.length)
    console.log(randomNum);
    let display = quotes[randomNum];
    quote.innerHTML = display.quote;
    author.innerHTML = display.author;

})